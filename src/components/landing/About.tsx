"use client";

import { useAudience } from "@/components/landing/AudienceContext";
import { content } from "@/lib/content";
import { Lightbulb } from "lucide-react";
import GlassSurface from "../ui/GlassSurface";
import SplitText from "../ui/SplitText";

export default function About() {
  const { audience } = useAudience();
  const aboutContent = content.about[audience];

  return (
    <section id="about">
      <div className="container mx-auto px-4">
        <GlassSurface
          className="p-6 sm:p-8 md:p-12"
          backgroundOpacity={0.05}
          blur={20}
        >
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-accent/10 p-3">
                <Lightbulb className="h-8 w-8 text-accent" />
              </div>
            </div>
            <SplitText
              text="Our Core Mission"
              className="font-headline text-3xl font-semibold text-primary md:text-4xl"
              splitType="words"
            />
            <p className="mt-4 text-lg text-muted-foreground md:text-xl">
              {aboutContent.mission}
            </p>
          </div>
        </GlassSurface>
      </div>
    </section>
  );
}
