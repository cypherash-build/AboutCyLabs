"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAudience } from "./AudienceContext";
import { content } from "@/lib/content";
import GlassSurface from "../ui/GlassSurface";

export default function Impact() {
  const { audience } = useAudience();
  const impactItems = content.impact[audience];

  return (
    <section id="impact">
      <div className="container mx-auto px-4">
        <GlassSurface
          className="p-6 sm:p-8 md:p-12"
          backgroundOpacity={0.05}
          blur={20}
        >
          <div className="w-full">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2
                  className="font-headline text-3xl font-semibold text-primary md:text-4xl"
              >
                Measurable & Meaningful Impact
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We are committed to delivering solutions that create tangible, positive change across society and industries.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {impactItems.map((item, index) => (
                <Card key={index} className="flex flex-col bg-card/50">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      {item.title}
                    </CardTitle>
                    <div className="rounded-md bg-accent/10 p-2">
                        <item.icon className="h-5 w-5 text-accent" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-primary">{item.metric}</div>
                    <p className="text-xs text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </GlassSurface>
      </div>
    </section>
  );
}
