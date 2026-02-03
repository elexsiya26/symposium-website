import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Handshake, Rocket, Award } from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "Innovative Sessions",
    description:
      "Explore cutting-edge topics in AI, blockchain, cloud computing, and emerging technologies.",
  },
  {
    icon: Handshake,
    title: "Networking",
    description:
      "Connect with industry professionals, potential partners, and like-minded innovators.",
  },
  {
    icon: Rocket,
    title: "Workshops",
    description:
      "Hands-on sessions designed to help you build practical skills and gain real experience.",
  },
  {
    icon: Award,
    title: "Certifications",
    description:
      "Earn recognized certifications that validate your participation and learning.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Attend TechSymposium?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            Experience a transformative event that brings together the brightest
            minds in technology for learning, collaboration, and inspiration.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group border-border bg-card transition-all hover:border-primary/20 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
