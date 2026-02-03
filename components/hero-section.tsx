import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-accent py-24 sm:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-white blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400"></span>
            </span>
            Registration Now Open
          </div>

          <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            TechSymposium 2026
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/90 sm:text-xl">
            Join industry leaders, innovators, and tech enthusiasts for three
            days of inspiring talks, hands-on workshops, and networking
            opportunities that will shape the future of technology.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="w-full bg-white text-primary hover:bg-white/90 sm:w-auto"
            >
              <Link href="/register">Register Now</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full border-white/30 bg-transparent text-white hover:bg-white/10 sm:w-auto"
            >
              <Link href="#about">Learn More</Link>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="flex flex-col items-center gap-2 rounded-xl bg-white/10 p-6 backdrop-blur-sm">
              <Calendar className="h-8 w-8 text-white" />
              <span className="text-lg font-semibold text-white">March 15-17, 2026</span>
              <span className="text-sm text-white/70">Three Full Days</span>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-xl bg-white/10 p-6 backdrop-blur-sm">
              <MapPin className="h-8 w-8 text-white" />
              <span className="text-lg font-semibold text-white">Convention Center</span>
              <span className="text-sm text-white/70">San Francisco, CA</span>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-xl bg-white/10 p-6 backdrop-blur-sm">
              <Users className="h-8 w-8 text-white" />
              <span className="text-lg font-semibold text-white">500+ Attendees</span>
              <span className="text-sm text-white/70">Expected Participation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
