import { Card, CardContent } from "@/components/ui/card";

const speakers = [
  {
    name: "Dr. Sarah Chen",
    role: "AI Research Director",
    company: "TechCorp Labs",
    initials: "SC",
  },
  {
    name: "Michael Roberts",
    role: "Chief Technology Officer",
    company: "Innovation Inc",
    initials: "MR",
  },
  {
    name: "Dr. Emily Watson",
    role: "Cloud Architecture Lead",
    company: "CloudScale Solutions",
    initials: "EW",
  },
  {
    name: "James Liu",
    role: "Blockchain Expert",
    company: "DecentralTech",
    initials: "JL",
  },
];

export function SpeakersSection() {
  return (
    <section className="bg-secondary/50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Featured Speakers
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            Learn from industry experts who are shaping the future of technology.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {speakers.map((speaker) => (
            <Card
              key={speaker.name}
              className="border-border bg-card text-center transition-all hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  {speaker.initials}
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">
                  {speaker.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary">
                  {speaker.role}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {speaker.company}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
