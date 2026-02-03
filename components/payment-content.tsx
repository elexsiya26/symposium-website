"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Loader2 } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import Image from "next/image";

interface Registration {
  id: string;
  name: string;
  email: string;
  payment_status: string;
}

export function PaymentContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const registrationId = searchParams.get("id");

  const [registration, setRegistration] = useState<Registration | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    async function fetchRegistration() {
      if (!registrationId) {
        setError("No registration ID provided");
        setIsLoading(false);
        return;
      }

      try {
        const supabase = createClient();
        const { data, error: fetchError } = await supabase
          .from("registrations")
          .select("id, name, email, payment_status")
          .eq("id", registrationId)
          .single();

        if (fetchError || !data) {
          setError("Registration not found. Please register first.");
          setIsLoading(false);
          return;
        }

        setRegistration(data);

        if (data.payment_status === "completed") {
          setSuccess(true);
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Failed to load registration details.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchRegistration();
  }, [registrationId]);

  const handleConfirmPayment = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!transactionId.trim()) {
      setError("Please enter your transaction ID");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const supabase = createClient();

      const { error: updateError } = await supabase
        .from("registrations")
        .update({
          payment_status: "completed",
          transaction_id: transactionId,
          updated_at: new Date().toISOString(),
        })
        .eq("id", registrationId);

      if (updateError) {
        throw updateError;
      }

      setSuccess(true);
    } catch (err) {
      console.error("Payment update error:", err);
      setError("Failed to confirm payment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error && !registration) {
    return (
      <Card className="border-destructive bg-destructive/5">
        <CardContent className="p-8 text-center">
          <p className="text-destructive">{error}</p>
          <Button
            className="mt-4"
            onClick={() => router.push("/register")}
          >
            Go to Registration
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (success) {
    return (
      <Card className="border-green-500 bg-green-50">
        <CardContent className="p-8 text-center">
          <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
          <h2 className="mt-4 text-2xl font-bold text-green-700">
            Payment Confirmed!
          </h2>
          <p className="mt-2 text-green-600">
            Thank you, {registration?.name}! Your registration is complete.
          </p>
          <p className="mt-1 text-sm text-green-600">
            A confirmation email will be sent to {registration?.email}.
          </p>
          <Button
            className="mt-6"
            onClick={() => router.push("/")}
          >
            Return to Home
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Registration Details */}
      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle>Registration Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p>
              <span className="font-medium text-muted-foreground">Name:</span>{" "}
              <span className="text-foreground">{registration?.name}</span>
            </p>
            <p>
              <span className="font-medium text-muted-foreground">Email:</span>{" "}
              <span className="text-foreground">{registration?.email}</span>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* QR Code Section */}
      <Card className="border-border bg-card">
        <CardHeader className="text-center">
          <CardTitle>Scan to Pay</CardTitle>
          <CardDescription>
            Registration Fee: Rs. 500
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <div className="rounded-xl border-4 border-primary/20 bg-white p-4">
            {/* Placeholder QR Code - Replace with your actual QR code image */}
            <div className="flex h-48 w-48 items-center justify-center bg-white">
              <Image
                src="/images/payment-qr.png"
                alt="Payment QR Code"
                width={192}
                height={192}
                className="h-48 w-48 object-contain"
                onError={(e) => {
                  // Fallback to placeholder if image not found
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    parent.innerHTML = `
                      <div class="flex h-48 w-48 flex-col items-center justify-center gap-2 bg-secondary rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-muted-foreground">
                          <rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3a2 2 0 0 0-2 2v3"/><path d="M21 21v.01"/><path d="M12 7v3a2 2 0 0 1-2 2H7"/><path d="M3 12h.01"/><path d="M12 3h.01"/><path d="M12 16v.01"/><path d="M16 12h1"/><path d="M21 12v.01"/><path d="M12 21v-1"/>
                        </svg>
                        <span class="text-xs text-muted-foreground text-center px-2">Add QR code at /images/payment-qr.png</span>
                      </div>
                    `;
                  }
                }}
              />
            </div>
          </div>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Scan this QR code with any UPI app to make payment
          </p>
        </CardContent>
      </Card>

      {/* Transaction ID Form */}
      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle>Confirm Payment</CardTitle>
          <CardDescription>
            After completing the payment, enter your transaction ID below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleConfirmPayment} className="space-y-4">
            {error && (
              <div className="rounded-lg bg-destructive/10 p-4 text-sm text-destructive">
                {error}
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="transactionId">Transaction ID / UPI Reference Number</Label>
              <Input
                id="transactionId"
                type="text"
                required
                placeholder="Enter your transaction ID"
                value={transactionId}
                onChange={(e) => setTransactionId(e.target.value)}
                disabled={isSubmitting}
              />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Confirming...
                </>
              ) : (
                "Confirm Payment"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
