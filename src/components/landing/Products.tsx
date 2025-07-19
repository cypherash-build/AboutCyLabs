"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAudience } from "./AudienceContext";
import { content } from "@/lib/content";

export default function Products() {
  const { audience } = useAudience();
  const products = content.products;

  return (
    <section id="products" className="bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-semibold text-primary md:text-4xl">
            Our Portfolio of Solutions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We identify technological vacuums and fill them with permanent, impactful deep tech solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {products.map((product) => (
            <Card key={product.id} className="flex flex-col overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
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
          ))}
        </div>
      </div>
    </section>
  );
}
