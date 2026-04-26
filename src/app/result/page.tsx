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

    return {
      monthlyPayment,
      propertyPrice,
    };
  }

  const result = calculateMortgage(income);

  return (
    <div className="p-6 text-center max-w-md mx-auto">

      <h2 className="text-2xl font-bold mb-6">
        🎯 Mortgage Eligibility Result
      </h2>

      {/* PROPERTY VALUE */}
      <div className="bg-green-50 p-5 rounded-xl mb-4">
        <p className="text-sm text-gray-600">
          🏡 Estimated Property You Can Afford
        </p>
        <h3 className="text-3xl font-bold text-green-700 mt-2">
          ₦{Math.round(result.propertyPrice).toLocaleString()}
        </h3>
      </div>

      {/* MONTHLY PAYMENT */}
      <div className="bg-blue-50 p-5 rounded-xl mb-6">
        <p className="text-sm text-gray-600">
          💰 Estimated Monthly Payment
        </p>
        <h3 className="text-2xl font-bold text-blue-700 mt-2">
          ₦{Math.round(result.monthlyPayment).toLocaleString()}
        </h3>
      </div>

      {/* CTA */}
      <a href="https://wa.me/2347031028402">
        <button className="bg-green-600 text-white px-6 py-3 rounded-xl w-full font-semibold">
          Talk to Bricks & Beyond NG 
        </button>
      </a>

      <p className="text-xs text-gray-400 mt-4">
        This is an estimate based on Nigerian mortgage affordability rules
      </p>

    </div>
  );
}

export default function ResultPage() {
  return (
    <Suspense fallback={<p className="text-center mt-10">Calculating...</p>}>
      <ResultContent />
    </Suspense>
  );
}