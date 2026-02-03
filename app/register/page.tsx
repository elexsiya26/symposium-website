import { Navigation } from "@/components/navigation";
import { RegistrationForm } from "@/components/registration-form";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Register - TechSymposium 2026",
  description: "Register for TechSymposium 2026 - The premier technology conference",
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Register for TechSymposium 2026
            </h1>
            <p className="mt-4 text-muted-foreground">
              Complete the form below to secure your spot at the symposium.
            </p>
          </div>
          <div className="mt-10">
            <RegistrationForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
