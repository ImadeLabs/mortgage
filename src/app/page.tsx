export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 flex items-start justify-center p-4 pt-16 pb-24">

      <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-6 sm:p-8 max-w-xl w-full text-center">

        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          🏡 Own a Property Or Home in Nigeria Without Full Payment
        </h1>

        <p className="text-gray-600 mb-2">
          Lagos • Abuja • Port Harcourt
        </p>

        <p className="text-gray-600 mb-6">
          Check your mortgage eligibility in under 5 minutes
        </p>

        <div className="bg-blue-50 p-4 rounded-xl mb-6 text-sm text-gray-700">
          💡 We estimate how much property you can afford based on your income and bank mortgage rules in Nigeria.
        </div>

        <a href="/qualify">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl w-full font-semibold hover:scale-105 transition mt-4">
            Check Eligibility 🚀
          </button>
        </a>

        <p className="text-xs text-gray-500 mt-4">
          Powered by Bricks & Beyond NG • Mortgage Intelligence System
        </p>

        {/* TRUST SECTION */}
        <div className="mt-6 bg-green-50 p-4 rounded-xl text-sm text-gray-700">
          ✅ Trusted mortgage guidance  
          <br />
          🏦 Works with Nigerian bank requirements  
          <br />
          ⚡ Fast pre-qualification process  
        </div>

      </div>

      {/* 📱 MOBILE STICKY BUTTON */}
      <div className="fixed bottom-0 left-0 w-full bg-white p-4 shadow-md sm:hidden">
        <a href="/qualify">
          <button className="bg-blue-600 text-white w-full py-3 rounded-xl font-semibold">
            Check Eligibility 🚀
          </button>
        </a>
      </div>

    </main>
  );
}