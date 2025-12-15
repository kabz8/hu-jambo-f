import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { apiRequest } from "@/lib/queryClient";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart, ArrowLeft, DollarSign, CreditCard, BookOpen, HeartHandshake, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { isUnauthorizedError } from "@/lib/authUtils";

// Load Stripe outside component render
const stripePromise = import.meta.env.VITE_STRIPE_PUBLIC_KEY 
  ? loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY)
  : null;

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    try {
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: window.location.origin + "/donate?success=true",
        },
      });

      if (error) {
        toast({
          title: "Payment Failed",
          description: error.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Payment Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PaymentElement />
      <Button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3"
        disabled={!stripe || isProcessing}
      >
        {isProcessing ? (
          <>
            <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"></div>
            Processing...
          </>
        ) : (
          <>
            <Heart className="w-4 h-4 mr-2" />
            Complete Donation
          </>
        )}
      </Button>
    </form>
  );
};

export default function Donate() {
  const { toast } = useToast();
  const [clientSecret, setClientSecret] = useState("");
  const [amount, setAmount] = useState<number>(25);
  const [customAmount, setCustomAmount] = useState("");
  const [step, setStep] = useState<"amount" | "payment">("amount");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      toast({
        title: "Donation Successful!",
        description: "Thank you for your generous support. Your donation helps us serve our community better.",
      });
    }
  }, [toast]);

  const handleAmountSelect = (selectedAmount: number) => {
    setAmount(selectedAmount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    const numValue = parseFloat(value);
    if (!isNaN(numValue) && numValue > 0) {
      setAmount(numValue);
    }
  };

  const handleProceedToPayment = async () => {
    if (!amount || amount <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid donation amount.",
        variant: "destructive",
      });
      return;
    }

    if (!stripePromise) {
      toast({
        title: "Payment Not Available",
        description: "Stripe payment is not configured. Please contact support.",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await apiRequest("POST", "/api/create-payment-intent", { amount });
      const data = await response.json();
      setClientSecret(data.clientSecret);
      setStep("payment");
    } catch (error) {
      if (isUnauthorizedError(error as Error)) {
        toast({
          title: "Unauthorized",
          description: "You are logged out. Logging in again...",
          variant: "destructive",
        });
        setTimeout(() => {
          window.location.href = "/api/login";
        }, 500);
        return;
      }
      
      toast({
        title: "Error",
        description: "Failed to initialize payment. Please try again.",
        variant: "destructive",
      });
    }
  };



  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 via-green-600 to-blue-600 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/">
              <Button variant="ghost" className="text-white hover:bg-white/20 mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-4xl font-bold mb-4">
              <Heart className="inline w-8 h-8 mr-2" />
              Support Our Mission
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Help us continue building this faith community and reaching more people with God's love
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {step === "amount" ? (
          <div className="space-y-8">
            {/* Amount Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  <DollarSign className="inline w-6 h-6 mr-2" />
                  Choose Your Donation Amount
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Preset Amounts */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[10, 25, 50, 100].map((presetAmount) => (
                    <Button
                      key={presetAmount}
                      variant={amount === presetAmount ? "default" : "outline"}
                      className="h-16 text-lg font-semibold"
                      onClick={() => handleAmountSelect(presetAmount)}
                    >
                      ${presetAmount}
                    </Button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div className="space-y-2">
                  <Label htmlFor="custom-amount" className="text-sm font-medium">
                    Or enter a custom amount:
                  </Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="custom-amount"
                      type="number"
                      placeholder="Enter amount"
                      value={customAmount}
                      onChange={(e) => handleCustomAmountChange(e.target.value)}
                      className="pl-10"
                      min="1"
                      step="0.01"
                    />
                  </div>
                </div>

                {/* Selected Amount Display */}
                {amount > 0 && (
                  <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <p className="text-lg font-semibold text-green-800 dark:text-green-200">
                      Donation Amount: ${amount.toFixed(2)}
                    </p>
                  </div>
                )}

                {/* Proceed Button */}
                <Button
                  onClick={handleProceedToPayment}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 text-lg"
                  disabled={!amount || amount <= 0}
                >
                  <CreditCard className="w-5 h-5 mr-2" />
                  Proceed to Payment
                </Button>
              </CardContent>
            </Card>

            {/* Impact Section */}
            <Card className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20">
              <CardHeader>
                <CardTitle className="text-xl text-center">Your Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#a47551]/10 text-[#a47551] mb-2">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Scripture Resources</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Help us provide Bible study materials and devotionals
                    </p>
                  </div>
                  <div>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#a47551]/10 text-[#a47551] mb-2">
                      <HeartHandshake className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Community Support</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Support our prayer and testimony sharing platform
                    </p>
                  </div>
                  <div>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#a47551]/10 text-[#a47551] mb-2">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Outreach Programs</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Fund programs that reach more people with God's love
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Payment Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  <CreditCard className="inline w-6 h-6 mr-2" />
                  Complete Your Donation
                </CardTitle>
                <div className="text-center text-lg font-semibold text-green-600 dark:text-green-400">
                  Amount: ${amount.toFixed(2)}
                </div>
              </CardHeader>
              <CardContent>
                {clientSecret && stripePromise ? (
                  <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <CheckoutForm />
                  </Elements>
                ) : (
                  <div className="text-center py-8">
                    <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-300">Preparing payment form...</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Back to Amount Selection */}
            <div className="text-center">
              <Button
                variant="ghost"
                onClick={() => setStep("amount")}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Amount Selection
              </Button>
            </div>
          </div>
        )}

        {/* Security Notice */}
        <Card className="mt-8 bg-gray-50 dark:bg-gray-800">
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
              <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span>Secure payment processing powered by Stripe</span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              Your payment information is encrypted and secure. We never store your credit card details.
            </p>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
}
