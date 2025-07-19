"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Waves } from "lucide-react";
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
      className={cn("sticky top-0 z-50 w-full transition-all duration-300")}
    >
      <GlassSurface
        className="transition-all duration-300"
        borderRadius={0}
        backgroundOpacity={isScrolled ? 0.05 : 0}
        blur={isScrolled ? 20 : 0}
        borderWidth={0}
        style={isScrolled ? {
          borderBottom: "1px solid hsl(var(--border))",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"
        } : {}}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <Link href="#" className="flex items-center gap-2">
            <Waves className="h-7 w-7 text-accent" />
            <span className="font-headline text-2xl font-bold text-primary">
              Cypherash
            </span>
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
    </header>
  );
}
