"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.2 } }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: [0, 1, 0], scale: [0.9, 1, 0.9] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="https://i.postimg.cc/tR2k3L80/logo.png"
          alt="Cypherash Labs Logo"
          width={200}
          height={57}
          priority
        />
      </motion.div>
    </motion.div>
  );
};

export default Loader;
