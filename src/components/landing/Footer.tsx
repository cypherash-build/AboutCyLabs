import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <Image
              src="https://i.postimg.cc/tR2k3L80/logo.png"
              alt="Cypherash Labs Logo"
              width={140}
              height={40}
              className="h-auto"
            />
          </div>
          <p className="text-center text-sm text-primary-foreground/80">
            &copy; {new Date().getFullYear()} Cypherash Labs Private Limited. All
            rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://www.linkedin.com/company/cypherash"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-primary-foreground/80 transition-colors hover:text-primary-foreground" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
