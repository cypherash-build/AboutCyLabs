
"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAudience, Audience } from "./AudienceContext";
import { content } from "@/lib/content";
import { Users } from "lucide-react";
import SplitText from "../ui/SplitText";

export default function Hero() {
  const { audience, setAudience } = useAudience();
  const heroContent = content.hero[audience];

  return (
    <section
      id="home"
      className="relative bg-transparent pt-24 pb-20 text-center md:pt-40 md:pb-32"
    >
      <div className="container relative z-10 mx-auto flex flex-col items-center px-4">
        <SplitText
          text={heroContent.headline}
          className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl"
          splitType="words"
          textAlign="center"
        />
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
            {heroContent.subheadline}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <a href="#products">Explore Our Solutions</a>
          </Button>
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-muted-foreground" />
            <Select
              onValueChange={(value: Audience) => setAudience(value)}
              defaultValue="default"
            >
              <SelectTrigger className="w-[200px] bg-card shadow-sm">
                <SelectValue placeholder="I am a..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">General Visitor</SelectItem>
                <SelectItem value="government">Government Official</SelectItem>
                <SelectItem value="investor">Investor</SelectItem>
                <SelectItem value="technologist">Technologist</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </section>
  );
}
