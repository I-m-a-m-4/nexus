"use client"; // This component uses interactivity (state) so we mark it as a Client Component

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Define the navigation links (similar to the official Next.js site)
  const navigationLinks = [
    { name: "Docs", href: "/docs" },
    { name: "Learn", href: "/learn" },
    { name: "Blog", href: "/blog" },
    { name: "Showcase", href: "/showcase" },
    { name: "Deploy", href: "https://vercel.com/new" },
  ];

  return (
    <header className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          {/* Logo Section */}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <a>
                <span className="sr-only">Next.js</span>
                <Image
                  src="/nextjs-logo.svg" // make sure to have this logo in your public folder
                  alt="Next.js Logo"
                  width={40}
                  height={40}
                  className="h-8 w-auto sm:h-10"
                />
              </a>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-10">
            {navigationLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                  {link.name}
                </a>
              </Link>
            ))}
          </nav>

          {/* Right-Side Link (e.g. Vercel) */}
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link href="https://vercel.com">
              <a className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                Vercel
              </a>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="bg-gray-100 p-2 rounded-md inline-flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open menu</span>
              {mobileMenuOpen ? (
                // Close Icon (X)
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger Icon
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigationLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                  {link.name}
                </a>
              </Link>
            ))}
            <Link href="https://vercel.com">
              <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Vercel
              </a>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
