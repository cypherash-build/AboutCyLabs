"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import GlassSurface from "../ui/GlassSurface";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#products", label: "Products" },
    { href: "#vision", label: "Vision" },
    { href: "#impact", label: "Impact" },
  ];

  return (
    <header
      className={cn(
        "sticky top-4 z-50 w-full transition-all duration-300"
      )}
    >
      <div className="container mx-auto px-4">
        <GlassSurface
          className="transition-all duration-300"
          borderRadius={12}
          backgroundOpacity={isScrolled ? 0.05 : 0}
          blur={isScrolled ? 20 : 0}
          borderWidth={isScrolled ? 0.07 : 0}
        >
          <div className="flex h-16 w-full items-center justify-between px-6">
            <Link href="#" className="flex items-center gap-2">
              <Image
                src="https://i.postimg.cc/tR2k3L80/logo.png"
                alt="Cypherash Labs Logo"
                width={140}
                height={40}
                className="h-auto"
                priority
              />
            </Link>
            <nav className="hidden md:flex">
              <ul className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium text-primary transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </GlassSurface>
      </div>
    </header>
  );
}