import React from "react";
import Image from "next/image";

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
              className="h-auto invert filter"
            />
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
