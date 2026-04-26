
"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function ResultContent() {
  const params = useSearchParams();
  const incomeParam = params.get("income");
  const income = incomeParam ? Number(incomeParam) : 0;

  function calculateMortgage(income: number, years = 15) {
    const affordabilityRate = 0.35;
    const equityFactor = 0.8;

    const monthlyPayment = income * affordabilityRate;
    const loanAmount = monthlyPayment * 12 * years;
    const propertyPrice = loanAmount / equityFactor;

    return { monthlyPayment, propertyPrice };
  }

  const result = calculateMortgage(income);

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">
        🎯 Mortgage Eligibility Result
      </h2>

      <p className="text-xl mb-6">
        ₦{Math.round(result.propertyPrice).toLocaleString()}
      </p>

      <a href="https://wa.me/2347031028402">
        <button className="bg-green-600 text-white px-6 py-3 rounded-xl">
          Chat on WhatsApp 💬
        </button>
      </a>
    </div>
  );
}

export default function ResultPage() {
  return (
    <Suspense fallback={<p className="text-center mt-10">Loading...</p>}>
      <ResultContent />
    </Suspense>
  );
}