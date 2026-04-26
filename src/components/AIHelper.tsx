"use client";

import { useState } from "react";

export default function AIHelper() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  const askAI = () => {
    if (!message) return;

    if (message.toLowerCase().includes("mortgage")) {
      setReply("Mortgage lets you buy a house and pay monthly instead of full cash.");
    } else if (message.toLowerCase().includes("income")) {
      setReply("Stable income increases your chances of mortgage approval.");
    } else {
      setReply("Ask me about mortgage, income, or property affordability.");
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-4 mt-6">
      <h3 className="font-bold mb-2">🤖 Mortgage Assistant</h3>

      <input
        className="border p-2 w-full rounded mb-2"
        placeholder="Ask me anything..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        onClick={askAI}
        className="bg-black text-white w-full py-2 rounded"
      >
        Ask AI
      </button>

      {reply && (
        <p className="mt-3 text-sm text-gray-700 bg-gray-100 p-2 rounded">
          {reply}
        </p>
      )}
    </div>
  );
}