import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bricks & Beyond NG | Mortgage Eligibility Checker",
  description:
    "Check your mortgage eligibility in Nigeria. Estimate how much property you can afford in Abuja, Lagos, Port Harcourt, and Kano.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gray-50">

        {/* 🔝 NAVBAR (ONLY ONE, CLEAN) */}
        <header className="w-full bg-white shadow-sm">
          <div className="max-w-6xl mx-auto flex items-center justify-between p-4">

            {/* LOGO */}
            <Link
              href="/"
              className="flex items-center gap-2 hover:opacity-80 transition"
            >
              <span className="text-xl">🏡</span>
              <span className="font-bold text-gray-800">
                Bricks & Beyond NG
              </span>
            </Link>

            {/* CTA BUTTON */}
            <Link
              href="/qualify"
              className="text-sm bg-black text-white px-4 py-2 rounded-lg hover:opacity-90"
            >
              Check Eligibility
            </Link>

          </div>
        </header>

        {/* 🧱 MAIN CONTENT */}
        <main className="flex-grow">
          {children}
        </main>

        {/* 🔻 FOOTER */}
        <footer className="bg-white border-t mt-10">
          <div className="max-w-6xl mx-auto p-6 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Bricks & Beyond NG</p>

            <p className="mt-2">
              Mortgage guidance for Abuja • Lagos • Port Harcourt • Kano
            </p>

            <p className="mt-2 text-xs text-gray-400">
              This platform provides estimates only. Final approval depends on bank verification.
            </p>
          </div>
        </footer>

      </body>
    </html>
  );
}