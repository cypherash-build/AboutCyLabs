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
import { X, DollarSign, Target, Lightbulb, Briefcase } from "lucide-react";

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
          <div className="relative w-full">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="font-headline text-3xl font-semibold text-primary md:text-4xl">
                Our Portfolio of Solutions
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We identify technological vacuums and fill them with permanent,
                impactful deep tech solutions.
              </p>
            </div>
            
            <div className="relative min-h-[400px]">
              <AnimatePresence>
                {!selectedProduct && (
                  <motion.div
                    className="grid grid-cols-1 gap-8 md:grid-cols-2"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.2 } }}
                  >
                    {products.map((product) => (
                      <motion.div
                        key={product.id}
                        layoutId={`product-card-${product.id}`}
                        onClick={() =>
                          !selectedProduct && handleSelectProduct(product.id as ProductId)
                        }
                        className={`flex h-full flex-col overflow-hidden rounded-lg bg-card/50 transition-all ${
                          audience === "investor"
                            ? "cursor-pointer hover:-translate-y-1 hover:shadow-lg"
                            : ""
                        }`}
                        whileHover={audience === 'investor' && !selectedProduct ? { scale: 1.02 } : {}}
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
                              {product.description[audience]}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="flex flex-grow flex-col justify-end">
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
                    layoutId={`product-card-${selectedProduct}`}
                    className="absolute inset-0 z-10 overflow-hidden rounded-lg bg-card/80 backdrop-blur-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.4 } }}
                    exit={{ opacity: 0, transition: { duration: 0.3 } }}
                  >
                    <div className="flex h-full flex-col p-6 sm:p-8">
                      <div className="mb-4 flex items-start justify-between">
                          <div className="flex items-center gap-4">
                              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                                  <investorDetails.icon className="h-6 w-6 text-accent" />
                              </div>
                              <h2 className="font-headline text-3xl font-bold text-primary">{investorDetails.name}</h2>
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
                          className="flex-grow overflow-y-auto pr-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.4 } }}
                      >
                          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                              <div className="space-y-4">
                                  <div className="space-y-2">
                                      <h4 className="flex items-center gap-2 font-semibold text-accent"><Target />Problem</h4>
                                      <p className="text-muted-foreground">{investorDetails.problem}</p>
                                  </div>
                                  <div className="space-y-2">
                                      <h4 className="flex items-center gap-2 font-semibold text-accent"><Lightbulb />Solution</h4>
                                      <p className="text-muted-foreground">{investorDetails.solution}</p>
                                  </div>
                              </div>
                              <div className="space-y-4">
                                  <div className="space-y-2">
                                      <h4 className="flex items-center gap-2 font-semibold text-accent"><Briefcase />Market</h4>
                                      <p className="text-muted-foreground">{investorDetails.market}</p>
                                  </div>
                                  <div className="space-y-2">
                                      <h4 className="flex items-center gap-2 font-semibold text-accent"><DollarSign />Revenue Model</h4>
                                      <p className="text-muted-foreground">{investorDetails.revenueModel}</p>
                                  </div>
                              </div>
                          </div>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </GlassSurface>
      </div>
    </section>
  );
}
