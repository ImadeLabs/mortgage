"use client";

import { useSearchParams } from "next/navigation";

function calculateMortgage(income: number, years = 15) {
  const affordabilityRate = 0.35;
  const equityFactor = 0.8;

  const monthlyPayment = income * affordabilityRate;
  const loanAmount = monthlyPayment * 12 * years;
  const propertyPrice = loanAmount / equityFactor;

  return { monthlyPayment, loanAmount, propertyPrice };
}

export default function Result() {
  const params = useSearchParams();
  const income = Number(params.get("income"));

  const result = calculateMortgage(income);

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center p-6">

      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">

        <h2 className="text-2xl font-bold mb-4">
          🎯 Mortgage Eligibility Result
        </h2>

        <div className="bg-green-50 p-4 rounded-xl mb-4">
          <p className="text-sm text-gray-600">Estimated Property Value</p>
          <h3 className="text-2xl font-bold text-green-700">
            ₦{Math.round(result.propertyPrice).toLocaleString()}
          </h3>
        </div>

        <div className="text-sm text-gray-600 mb-6">
          Monthly Affordability: ₦{Math.round(result.monthlyPayment).toLocaleString()}
        </div>

        <a href="https://wa.me/2347031028402">
          <button className="bg-green-600 hover:bg-green-700 text-white w-full py-3 rounded-xl font-semibold">
            Talk to Bricks & Beyond NG
          </button>
        </a>

        <p className="text-xs text-gray-400 mt-4">
          Results are estimates, subject to bank approval
        </p>

      </div>

    </main>
  );
}