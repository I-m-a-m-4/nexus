import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#111111] to-[#333333] text-white">
      {/* Optional Background Overlay */}
      <div className="absolute inset-0 -z-10">
        {/* You can use a background pattern image if desired */}
        <div className="w-full h-full bg-[url('/background-pattern.svg')] bg-cover opacity-20"></div>
      </div>

      <main className="flex flex-col items-center justify-center text-center min-h-screen px-4">
        {/* Hero Logo */}
        <div className="mb-8">
          <Image
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={78}
            priority
            className="dark:invert"
          />
        </div>

        {/* Hero Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
          Next.js
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mb-8">
          The React Framework for the Web. Build production-ready applications
          with ease.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/docs"
            className="px-6 py-3 bg-white text-black rounded-md text-lg font-semibold hover:bg-gray-200 transition"
          >
            Get Started
          </a>
          <a
            href="https://nextjs.org/learn"
            className="px-6 py-3 border border-white rounded-md text-lg font-semibold hover:bg-white hover:text-black transition"
          >
            Learn More
          </a>
        </div>
      </main>

      <footer className="py-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Vercel Inc.
        </p>
      </footer>
    </div>
  );
}
