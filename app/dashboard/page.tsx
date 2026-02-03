import { Navigation } from "@/components/navigation";
import { DashboardStats } from "@/components/dashboard-stats";
import { RegistrationsTable } from "@/components/registrations-table";
import { Footer } from "@/components/footer";
import { createClient } from "@/lib/supabase/server";

export const metadata = {
  title: "Dashboard - TechSymposium 2026",
  description: "Admin dashboard for TechSymposium 2026",
};

export const revalidate = 0; // Always fetch fresh data

async function getRegistrations() {
  const supabase = await createClient();

  const { data: registrations, error } = await supabase
    .from("registrations")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching registrations:", error);
    return [];
  }

  return registrations || [];
}

export default async function DashboardPage() {
  const registrations = await getRegistrations();

  const totalRegistrations = registrations.length;
  const completedPayments = registrations.filter(
    (r) => r.payment_status === "completed"
  ).length;
  const pendingPayments = registrations.filter(
    (r) => r.payment_status === "pending"
  ).length;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Registration Dashboard
            </h1>
            <p className="mt-2 text-muted-foreground">
              Overview of symposium registrations and payment status.
            </p>
          </div>

          <DashboardStats
            totalRegistrations={totalRegistrations}
            completedPayments={completedPayments}
            pendingPayments={pendingPayments}
          />

          <div className="mt-10">
            <RegistrationsTable registrations={registrations} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
