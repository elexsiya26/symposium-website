import { Suspense } from "react";
import { Navigation } from "@/components/navigation";
import { PaymentContent } from "@/components/payment-content";
import { Footer } from "@/components/footer";
import { Loader2 } from "lucide-react";

export const metadata = {
  title: "Payment - TechSymposium 2026",
  description: "Complete your payment for TechSymposium 2026",
};

function PaymentLoading() {
  return (
    <div className="flex h-64 items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
  );
}

export default function PaymentPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Complete Your Payment
            </h1>
            <p className="mt-4 text-muted-foreground">
              Scan the QR code below to complete your registration payment.
            </p>
          </div>
          <div className="mt-10">
            <Suspense fallback={<PaymentLoading />}>
              <PaymentContent />
            </Suspense>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
