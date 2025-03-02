"use client"
import { useState } from "react"
import Link from "next/link"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("Home")

  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Contact Us", path: "/contact" },
  ]

  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-lg bg-black/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 text-xl font-bold text-white">
            WarrantyAppTeam
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`relative px-3 py-2 text-sm font-medium transition-all ${
                    activeLink === link.name 
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                  onClick={() => setActiveLink(link.name)}
                >
                  {link.name}
                  {activeLink === link.name && (
                    <span className="absolute bottom-0 left-0 w-full h-px bg-white/80 animate-underline" />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <button className="hidden md:inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105">
            Book Us Now
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-black/95 backdrop-blur-xl border-b border-white/10">
          <div className="px-4 pt-2 pb-6 space-y-4">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`block px-3 py-2 text-base font-medium ${
                  activeLink === link.name
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
                onClick={() => {
                  setActiveLink(link.name)
                  setIsOpen(false)
                }}
              >
                {link.name}
              </Link>
            ))}
            <button className="w-full mt-4 px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all">
              Book Us Now
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}