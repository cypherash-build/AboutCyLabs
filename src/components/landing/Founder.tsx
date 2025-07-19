import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import GlassSurface from "../ui/GlassSurface";
import { CheckCircle } from "lucide-react";
import SplitText from "../ui/SplitText";

export default function Founder() {
  const journeyPoints = [
    { age: "Age 12", achievement: "Created first soldered PCB" },
    { age: "Age 13", achievement: "Made a webcam-based trackpad" },
    { age: "Age 14", achievement: "Developed wireless electricity transmission" },
    { age: "Age 15", achievement: "Built a Green Hydrogen Generator" },
    { age: "Age 16", achievement: "Engineered kinetic-powered shoes" },
    { age: "2018-2021", achievement: "Freelance Software Developer" },
    { age: "2021", achievement: "CTO at Mowen Technologies" },
    { age: "2024-Present", achievement: "CEO at Cypherash Labs" },
  ];

  return (
    <section id="founder">
      <div className="container mx-auto px-4">
        <GlassSurface
          className="p-6 sm:p-8 md:p-12"
          backgroundOpacity={0.05}
          blur={20}
        >
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <SplitText
              text="The Mind Behind The Mission"
              className="font-headline text-3xl font-semibold text-primary md:text-4xl"
              splitType="words"
            />
            <p className="mt-4 text-lg text-muted-foreground">
              Our innovation is driven by a unique blend of foresight and
              full-stack engineering, embodied by our founder.
            </p>
          </div>

          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <Card className="overflow-hidden bg-card/50 shadow-lg">
                <CardContent className="p-0">
                  <div className="relative aspect-square w-full">
                    <Image
                      src="https://media.licdn.com/dms/image/v2/D5603AQFACMsOua-x_Q/profile-displayphoto-shrink_800_800/B56Zbi7XSnHgAo-/0/1747563935890?e=1755734400&v=beta&t=35UKqXt02QK4TadKJ1JrgtWaVO-HfOP9k-BISSlO9aE"
                      alt="Yash Pratap Singh, Founder & CEO of Cypherash Labs"
                      fill
                      className="object-cover"
                      data-ai-hint="founder portrait"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-headline text-2xl font-bold text-primary">
                      Yash Pratap Singh
                    </h3>
                    <p className="text-md font-medium text-accent">
                      Founder & CEO
                    </p>
                    <p className="mt-2 text-muted-foreground">
                      A self-identified polymath with a lifelong passion for
                      filling technological vacuums with permanent, impactful
                      solutions.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="lg:col-span-3">
              <div className="text-center lg:text-left">
                <h4 className="font-headline text-2xl font-semibold text-primary">
                  A Journey of Innovation
                </h4>
                <p className="mt-2 text-muted-foreground">
                  From childhood projects to deep tech leadership, the path has
                  always been about solving what's next.
                </p>
              </div>
              <div className="mt-8 space-y-4">
                {journeyPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                    <div>
                      <p className="font-semibold text-primary">
                        {point.achievement}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {point.age}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </GlassSurface>
      </div>
    </section>
  );
}
