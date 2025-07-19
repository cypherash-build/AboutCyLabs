import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BrainCircuit, Cpu } from "lucide-react";
import Image from "next/image";
import { content } from "@/lib/content";

export default function Vision() {
  const { sunshot, moonshot } = content.vision;

  return (
    <section id="vision" className="bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-semibold text-primary md:text-4xl">
            Pioneering The Next Frontier
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our long-term vision extends beyond current problems. We are building the foundational technologies for tomorrow's world.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-start">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-xl">
                 <Image
                    src="https://placehold.co/600x400.png"
                    alt="Abstract representation of future technology"
                    fill
                    className="object-cover"
                    data-ai-hint="future technology"
                />
            </div>
            <div className="flex flex-col">
                <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left hover:no-underline">
                    <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                            <BrainCircuit className="h-6 w-6 text-primary" />
                        </div>
                        <span className="font-headline text-xl font-semibold text-primary">{sunshot.name}</span>
                    </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-2 text-base text-muted-foreground">
                        <p className="font-medium text-primary/90">{sunshot.concept}</p>
                        <p className="mt-2">{sunshot.vision}</p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left hover:no-underline">
                     <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                            <Cpu className="h-6 w-6 text-primary" />
                        </div>
                        <span className="font-headline text-xl font-semibold text-primary">{moonshot.name}</span>
                    </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-2 text-base text-muted-foreground">
                        <p className="font-medium text-primary/90">{moonshot.concept}</p>
                        <p className="mt-2">{moonshot.vision}</p>
                    </AccordionContent>
                </AccordionItem>
                </Accordion>
            </div>
        </div>
      </div>
    </section>
  );
}
