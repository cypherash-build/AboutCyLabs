import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BrainCircuit, Cpu } from "lucide-react";
import Image from "next/image";
import { content } from "@/lib/content";
import GlassSurface from "../ui/GlassSurface";

export default function Vision() {
  const { sunshot, moonshot } = content.vision;

  return (
    <section id="vision">
      <div className="container mx-auto px-4">
        <GlassSurface
          className="p-6 sm:p-8 md:p-12"
          backgroundOpacity={0.05}
          blur={20}
        >
          <div className="w-full">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="font-headline text-3xl font-semibold text-primary md:text-4xl">
                Pioneering The Next Frontier
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our long-term vision extends beyond current problems. We are building the foundational technologies for tomorrow's world.
              </p>
            </div>

            <div className="w-full">
                <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
                <AccordionItem value="item-1" className="border-b-secondary/50">
                    <AccordionTrigger className="text-left hover:no-underline">
                    <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                            <BrainCircuit className="h-6 w-6 text-primary" />
                        </div>
                        <span className="font-headline text-xl font-semibold text-primary">{sunshot.name}</span>
                    </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-2 text-base text-muted-foreground bg-card/30 p-4 rounded-md">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                            <div className="space-y-2">
                                <p className="font-medium text-primary/90">{sunshot.concept}</p>
                                <p>{sunshot.vision}</p>
                            </div>
                            <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                                <Image
                                    src="https://i.postimg.cc/85ZghZh1/BCI.png"
                                    alt="Project Sunshot: Brain-Computer Interface"
                                    fill
                                    className="object-cover"
                                    data-ai-hint="brain computer interface"
                                />
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-b-secondary/50">
                    <AccordionTrigger className="text-left hover:no-underline">
                     <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                            <Cpu className="h-6 w-6 text-primary" />
                        </div>
                        <span className="font-headline text-xl font-semibold text-primary">{moonshot.name}</span>
                    </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-2 text-base text-muted-foreground bg-card/30 p-4 rounded-md">
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                            <div className="space-y-2">
                                <p className="font-medium text-primary/90">{moonshot.concept}</p>
                                <p>{moonshot.vision}</p>
                            </div>
                            <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                                <Image
                                    src="https://i.postimg.cc/qqgVQ2L2/PLA.png"
                                    alt="Project Moonshot: Photonic AI Accelerator"
                                    fill
                                    className="object-cover"
                                    data-ai-hint="photonic chip"
                                />
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
                </Accordion>
            </div>
          </div>
        </GlassSurface>
      </div>
    </section>
  );
}
