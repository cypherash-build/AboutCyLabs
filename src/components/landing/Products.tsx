"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useAudience } from "./AudienceContext";
import { content } from "@/lib/content";
import GlassSurface from "../ui/GlassSurface";
import { AnimatePresence, motion } from "framer-motion";
import { X, HelpCircle, Clock, Award } from "lucide-react";
import ScrambledText from "../ui/ScrambledText";
import "../ui/ScrambledText.css";

type ProductId = "cypherkey" | "cypheri" | "cypherb" | "kitab";

export default function Products() {
  const { audience } = useAudience();
  const products = content.products;
  const [selectedProduct, setSelectedProduct] = useState<ProductId | null>(
    null
  );

  const handleSelectProduct = (id: ProductId) => {
    if (audience === "investor") {
      setSelectedProduct(id);
    }
  };

  const handleDeselectProduct = () => {
    setSelectedProduct(null);
  };

  const investorDetails = selectedProduct
    ? content.investorDetails[selectedProduct]
    : null;

  return (
    <section id="products">
      <div className="container mx-auto px-4">
        <GlassSurface
          className="p-6 sm:p-8 md:p-12"
          backgroundOpacity={0.05}
          blur={20}
        >
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="flex justify-center">
              <ScrambledText>
                <h2 className="font-headline text-3xl font-semibold text-primary md:text-4xl">
                  Our Portfolio of Solutions
                </h2>
              </ScrambledText>
            </div>
            <p className="mt-4 text-lg text-muted-foreground">
              We identify technological vacuums and fill them with permanent,
              impactful deep tech solutions.
            </p>
          </div>

          <div className="relative min-h-[400px]">
            <AnimatePresence>
              {!selectedProduct && (
                <motion.div
                  key="product-grid"
                  className="grid grid-cols-1 gap-8 md:grid-cols-2"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, display: "none" }}
                  transition={{ duration: 0.2 }}
                >
                  {products.map((product) => (
                    <motion.div
                      key={product.id}
                      layoutId={`product-card-${product.id}`}
                      onClick={() =>
                        handleSelectProduct(product.id as ProductId)
                      }
                      className={`flex h-full flex-col overflow-hidden rounded-lg bg-card/50 transition-all ${
                        audience === "investor"
                          ? "cursor-pointer hover:-translate-y-1 hover:shadow-lg"
                          : ""
                      }`}
                      whileHover={
                        audience === "investor" ? { scale: 1.02 } : {}
                      }
                    >
                      <Card className="flex h-full flex-col border-0 bg-transparent">
                        <CardHeader>
                          <div className="mb-4 flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                              <product.icon className="h-6 w-6 text-accent" />
                            </div>
                            <CardTitle className="font-headline text-2xl font-bold text-primary">
                              {product.name}
                            </CardTitle>
                          </div>
                          <CardDescription className="text-base">
                            {product.id === "cypherkey" ? (
                              <ScrambledText>
                                <p>{product.description[audience]}</p>
                              </ScrambledText>
                            ) : (
                              <p>{product.description[audience]}</p>
                            )}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-grow flex-col justify-end pt-4">
                          <div>
                            <h4 className="mb-2 text-sm font-semibold text-primary">
                              Target Audience
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {product.target.map((t, i) => (
                                <Badge key={i} variant="secondary">
                                  {t}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {selectedProduct && investorDetails && (
                <motion.div
                  key="product-detail"
                  layoutId={`product-card-${selectedProduct}`}
                  className="absolute inset-0 z-10 overflow-hidden rounded-lg bg-card/80 backdrop-blur-lg"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.4, ease: "easeOut" },
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.95,
                    transition: { duration: 0.3, ease: "easeIn" },
                  }}
                >
                  <div className="flex h-full flex-col">
                    <div className="flex items-start justify-between border-b border-border/50 p-6 sm:p-8">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                          <investorDetails.icon className="h-6 w-6 text-accent" />
                        </div>
                        <h2 className="font-headline text-3xl font-bold text-primary">
                          {investorDetails.name}
                        </h2>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={handleDeselectProduct}
                        aria-label="Close"
                      >
                        <X className="h-6 w-6" />
                      </Button>
                    </div>

                    <motion.div
                      className="flex-grow overflow-y-auto p-6 sm:p-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { delay: 0.2, duration: 0.4 },
                      }}
                    >
                      <div className="space-y-12">
                        <div>
                          <h4 className="mb-4 flex items-center gap-3 font-headline text-xl font-semibold text-accent">
                            <HelpCircle className="h-5 w-5" />
                            What we solve and for whom?
                          </h4>
                          <p className="whitespace-pre-line text-muted-foreground">
                            {investorDetails.q1}
                          </p>
                        </div>
                        <div>
                          <h4 className="mb-4 flex items-center gap-3 font-headline text-xl font-semibold text-accent">
                            <Clock className="h-5 w-5" />
                            Why now and why us?
                          </h4>
                          <p className="whitespace-pre-line text-muted-foreground">
                            {investorDetails.q2}
                          </p>
                        </div>
                        <div>
                          <h4 className="mb-4 flex items-center gap-3 font-headline text-xl font-semibold text-accent">
                            <Award className="h-5 w-5" />
                            How are we different?
                          </h4>
                          <p className="whitespace-pre-line text-muted-foreground">
                            {investorDetails.q3}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </GlassSurface>
      </div>
    </section>
  );
}
