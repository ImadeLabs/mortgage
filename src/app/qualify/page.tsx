"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function QualifyPage() {
  const [income, setIncome] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    if (!income) return;

    router.push(`/result?income=${income}`);
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-gray-50">

      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md text-center">

        <h1 className="text-2xl font-bold mb-4">
          🏦 Check Your Mortgage Eligibility
        </h1>

        <p className="text-gray-600 mb-6">
          Enter your monthly income
        </p>

        <input
          type="number"
          placeholder="e.g. 500000"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          className="border p-3 w-full rounded mb-4"
        />

        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white w-full py-3 rounded-xl font-semibold hover:scale-105 transition"
        >
          Continue 🚀
        </button>

      </div>

    </main>
  );
}