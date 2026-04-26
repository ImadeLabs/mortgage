"use client";

import { useState } from "react";

export default function QualifyPage() {
  const [income, setIncome] = useState("");

  const handleContinue = () => {
    if (!income) return;

    // FORCE FULL NAVIGATION (MOST STABLE FOR iPHONE SAFARI)
    window.location.href = `/result?income=${income}`;
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-gray-50">

      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md text-center">

        <h1 className="text-2xl font-bold mb-4">
          🏦 Mortgage Eligibility Check
        </h1>

        <p className="text-gray-600 mb-6">
          Enter your monthly income
        </p>

        <input
          type="number"
          inputMode="numeric"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          placeholder="e.g. 500000"
          className="border p-3 w-full rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={handleContinue}
          className="bg-blue-600 text-white w-full py-3 rounded-xl font-semibold active:scale-95 transition"
        >
          Continue 🚀
        </button>

      </div>

    </main>
  );
}