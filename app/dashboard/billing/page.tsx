import { auth } from "@clerk/nextjs/server";
import PricingTableWrapper from "@/components/billing/PricingTableWrapper";

export default async function BillingPage() {
  const { userId } = await auth();

  if (!userId) return null;

  return (
    <main
      className="min-h-screen px-6 py-20"
      style={{ backgroundColor: "#5523E8" }}
    >
      <div className="max-w-5xl mx-auto text-white">
  
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">
            Billing & Plans
          </h1>
          <p className="mt-3 text-lg text-white/90">
            Manage your subscription and upgrade anytime.
          </p>
        </div>

       
        <PricingTableWrapper />

       
        <p className="text-sm text-white/80 mt-8">
          Questions about plans or custom credits? Contact support.
        </p>
      </div>
    </main>
  );
}
