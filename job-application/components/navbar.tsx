"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Service", href: "#" },
    { label: "About", href: "#" },
    { label: "Network", href: "#" },
    { label: "Contact Us", href: "#" },
  ];

  return (
    <nav className="w-full bg-white shadow-sm">
      {/* Main Navbar */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <h4 className="font-bold text-xl lg:text-2xl">Dsign</h4>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 font-medium lg:ml-20">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 lg:px-6">
              Sign In
            </Button>
            <Button className="bg-blue-100 text-blue-600 hover:bg-blue-200 px-6 lg:px-8">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 py-2 px-3 rounded-md hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                  Sign In
                </Button>
                <Button className="bg-blue-100 text-blue-600 hover:bg-blue-200 w-full">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}