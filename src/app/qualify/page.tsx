"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Qualify() {
  const [income, setIncome] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    if (!income) return alert("Please enter your income");
    router.push(`/result?income=${income}`);
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">

      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full">

        <h2 className="text-2xl font-bold mb-2 text-gray-800">
          Let’s check your eligibility 🧠
        </h2>

        <p className="text-gray-500 mb-6">
          Step 1 of 3 — Income Check
        </p>

        <label className="text-sm text-gray-600">
          Monthly Income (₦)
        </label>

        <input
          type="number"
          placeholder="e.g 500000"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          className="border p-3 rounded-xl w-full mt-2 mb-6 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <button
          onClick={handleSubmit}
          className="bg-purple-600 hover:bg-purple-700 text-white w-full py-3 rounded-xl font-semibold transition"
        >
          Continue →
        </button>

        <p className="text-xs text-gray-400 mt-4 text-center">
          Secure mortgage estimation system
        </p>

      </div>

    </main>
  );
}