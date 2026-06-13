import { ArrowRight, Clock, Users, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-gym.jpg";

const stats = [
  { icon: Clock, label: "24/7 Access", value: "Every Day" },
  { icon: Flame, label: "50+ Classes", value: "Per Week" },
  { icon: Users, label: "Expert Coaches", value: "Certified" },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Apex Fitness training floor"
          width={1920}
          height={1280}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="relative container mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-8 animate-float-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-semibold tracking-wider uppercase">
            <span className="size-2 rounded-full bg-primary animate-pulse" />
            New Members — Free 7 Day Trial
          </span>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]">
            Elevate Your Limits.
            <br />
            <span className="text-primary text-glow">Define Your Future.</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Join a community built on grit. Train with elite coaches, on premium equipment,
            in a space engineered to push you past your last PR.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-full font-semibold text-base h-14 px-8 shadow-[var(--shadow-glow)] hover:scale-105 transition-transform">
              <a href="#contact">
                Start Free Trial
                <ArrowRight className="ml-1 size-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full font-semibold text-base h-14 px-8 border-foreground/20 bg-transparent hover:bg-foreground/5">
              <a href="#classes">View Classes</a>
            </Button>
          </div>
        </div>

        <div className="lg:col-span-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="glass rounded-2xl p-6 flex items-center gap-4 animate-float-up hover:border-primary/40 hover:-translate-y-1 transition-all"
              style={{ animationDelay: `${0.2 + i * 0.1}s` }}
            >
              <div className="grid place-items-center size-14 rounded-xl bg-primary/15 text-primary shrink-0">
                <s.icon className="size-7" />
              </div>
              <div>
                <div className="text-2xl font-bold">{s.label}</div>
                <div className="text-sm text-muted-foreground">{s.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}