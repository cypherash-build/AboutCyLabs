import React from "react";
import { Waves } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <Waves className="h-6 w-6 text-accent" />
            <span className="font-headline text-xl font-bold">Cypherash Labs</span>
          </div>
          <p className="text-center text-sm text-primary-foreground/80">
            &copy; {new Date().getFullYear()} Cypherash Labs Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
