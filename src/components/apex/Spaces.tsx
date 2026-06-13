import { useState } from "react";
import { Dumbbell, Activity, Compass, Sparkles, X, Maximize2, Check } from "lucide-react";
import gymWeights from "@/assets/gym-weights.png";
import gymCardio from "@/assets/gym-cardio.png";
import gymYoga from "@/assets/gym-yoga.png";
import gymRecovery from "@/assets/gym-recovery.png";

type Space = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  img: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  equipment: string[];
};

const spaces: Space[] = [
  {
    id: "weights",
    title: "Weight Training Zone",
    tagline: "Engineered for pure strength.",
    description: "Equipped with competition-grade power cages, Olympic lifting platforms, custom dumbbells up to 150 lbs, and state-of-the-art selectorized strength machines.",
    img: gymWeights,
    icon: Dumbbell,
    features: [
      "Eleiko competition barbells & plates",
      "10+ multi-purpose power racks",
      "Specialized lifting turf & sled tracks",
      "Dumbbell range up to 150 lbs"
    ],
    equipment: ["Eleiko Barbells", "Hammer Strength Cages", "BOSU & Kettlebells", "Plateloaded Leg Press"]
  },
  {
    id: "cardio",
    title: "Cardio Deck",
    tagline: "Elevate your conditioning.",
    description: "Rows of premium Woodway treadmills, assault bikes, stairmasters, and rowing machines positioned with panoramic views and integrated telemetry tracking.",
    img: gymCardio,
    icon: Activity,
    features: [
      "Woodway Curve self-powered treadmills",
      "Assault AirBikes & Concept2 Rowers",
      "Heart rate telemetry screen integration",
      "Panoramic city views during training"
    ],
    equipment: ["Woodway Curve", "Concept2 Rowers", "Assault AirBikes", "StairMaster Gauntlet"]
  },
  {
    id: "yoga",
    title: "Yoga & Pilates Studio",
    tagline: "Find your alignment.",
    description: "A tranquil, climate-controlled oasis designed for Vinyasa flow, hot yoga, mobility drills, and guided mindfulness sessions.",
    img: gymYoga,
    icon: Compass,
    features: [
      "Infrared radiant heating panels",
      "HEPA medical-grade air filtration",
      "Premium Manduka PRO yoga mats",
      "Immersive ambient light & sound system"
    ],
    equipment: ["Manduka Mats", "Pilates Reformers", "Meditation Cushions", "Yoga Blocks & Straps"]
  },
  {
    id: "recovery",
    title: "Recovery Lounge",
    tagline: "Rest, rebuild, repeat.",
    description: "Unlock peak performance with custom-built cold plunge pools, traditional Finnish saunas, infrared suites, and hyperbaric oxygen chambers.",
    img: gymRecovery,
    icon: Sparkles,
    features: [
      "Thermoregulated 42°F cold plunge pools",
      "Traditional dry Finnish wood sauna",
      "Full-spectrum infrared sauna suites",
      "Hyperbaric oxygen therapy chambers"
    ],
    equipment: ["Plunge Cold Pools", "Finnish Wood Sauna", "Clearlight IR Sauna", "Hyperbaric Chambers"]
  }
];

export function Spaces() {
  const [activeSpace, setActiveSpace] = useState<Space | null>(null);

  return (
    <section id="spaces" className="py-24 sm:py-32 bg-card/25 border-y border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Our Facilities</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold">World-class spaces built for elite results.</h2>
          <p className="mt-4 text-muted-foreground">
            Explore our meticulously engineered zones designed to maximize every second of your training and recovery.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {spaces.map((space) => {
            const Icon = space.icon;
            return (
              <div
                key={space.id}
                onClick={() => setActiveSpace(space)}
                className="group relative h-[420px] rounded-3xl overflow-hidden glass border border-border/40 cursor-pointer hover:border-primary/40 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={space.img}
                    alt={space.title}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-black/20 group-hover:via-background/50 transition-all duration-300" />
                </div>

                {/* Floating Action Button */}
                <div className="absolute top-5 right-5 z-10 size-10 rounded-full glass border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 className="size-4 text-primary" />
                </div>

                {/* Text Content */}
                <div className="absolute inset-x-0 bottom-0 p-6 z-10 flex flex-col justify-end h-1/2">
                  <div className="size-10 rounded-xl bg-primary/20 backdrop-blur-md text-primary flex items-center justify-center w-fit mb-4 border border-primary/20">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">{space.title}</h3>
                  <p className="text-sm text-primary font-medium mt-1">{space.tagline}</p>
                  <p className="text-xs text-muted-foreground mt-2 line-clamp-2 opacity-80 group-hover:opacity-100 transition-opacity">
                    {space.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox / Modal */}
      {activeSpace && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in">
          <div 
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl glass border border-white/10 flex flex-col md:flex-row shadow-[var(--shadow-glow)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveSpace(null)}
              className="absolute top-5 right-5 z-20 size-10 rounded-full bg-black/50 border border-white/10 text-white flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              aria-label="Close details"
            >
              <X className="size-5" />
            </button>

            {/* Left Column: Image */}
            <div className="relative w-full md:w-1/2 min-h-[300px] md:min-h-[450px]">
              <img
                src={activeSpace.img}
                alt={activeSpace.title}
                className="absolute inset-0 size-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-background/90" />
            </div>

            {/* Right Column: Details */}
            <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-3">
                <div className="size-9 rounded-lg bg-primary/20 text-primary flex items-center justify-center border border-primary/20">
                  <activeSpace.icon className="size-4" />
                </div>
                <span className="text-xs uppercase tracking-widest text-primary font-bold">Featured Space</span>
              </div>

              <h3 className="text-3xl font-bold tracking-tight">{activeSpace.title}</h3>
              <p className="text-lg text-primary font-medium mt-1">{activeSpace.tagline}</p>
              
              <p className="text-muted-foreground text-sm mt-4 leading-relaxed">
                {activeSpace.description}
              </p>

              <div className="mt-6">
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Key Highlights</h4>
                <ul className="space-y-2.5">
                  {activeSpace.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <span className="grid place-items-center size-5 rounded-full bg-primary/15 text-primary shrink-0 mt-0.5 border border-primary/10">
                        <Check className="size-3" strokeWidth={3} />
                      </span>
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-6 border-t border-white/5 flex flex-wrap gap-2">
                {activeSpace.equipment.map((eq, i) => (
                  <span 
                    key={i} 
                    className="text-[11px] px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-muted-foreground font-semibold uppercase tracking-wider"
                  >
                    {eq}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
