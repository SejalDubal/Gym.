import { useState } from "react";
import { Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = ["All", "HIIT", "Strength", "Yoga", "Boxing", "Functional"] as const;
type Category = (typeof categories)[number];

type ClassItem = {
  name: string;
  category: Exclude<Category, "All">;
  time: string;
  day: string;
  trainer: string;
};

const schedule: ClassItem[] = [
  { name: "Sunrise HIIT", category: "HIIT", time: "06:00 — 07:00", day: "Mon", trainer: "Jordan Cole" },
  { name: "Power Lifting", category: "Strength", time: "08:00 — 09:30", day: "Mon", trainer: "Maya Reeves" },
  { name: "Vinyasa Flow", category: "Yoga", time: "10:00 — 11:00", day: "Tue", trainer: "Alex Nguyen" },
  { name: "Boxing Fundamentals", category: "Boxing", time: "17:30 — 18:30", day: "Tue", trainer: "Marcus Vega" },
  { name: "Athletic Conditioning", category: "Functional", time: "18:00 — 19:00", day: "Wed", trainer: "Jordan Cole" },
  { name: "Hypertrophy Lab", category: "Strength", time: "19:00 — 20:30", day: "Wed", trainer: "Maya Reeves" },
  { name: "Tabata Burn", category: "HIIT", time: "06:30 — 07:15", day: "Thu", trainer: "Maya Reeves" },
  { name: "Restore Yoga", category: "Yoga", time: "19:30 — 20:30", day: "Thu", trainer: "Alex Nguyen" },
  { name: "Combat Cardio", category: "Boxing", time: "07:00 — 08:00", day: "Fri", trainer: "Marcus Vega" },
];

export function Classes() {
  const [active, setActive] = useState<Category>("All");
  const filtered = active === "All" ? schedule : schedule.filter((c) => c.category === active);

  return (
    <section id="classes" className="py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Weekly Schedule</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold">Train like there's no off-day.</h2>
          <p className="mt-4 text-muted-foreground">Filter by discipline and lock in your spot.</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                active === cat
                  ? "bg-primary text-primary-foreground shadow-[var(--shadow-glow)]"
                  : "glass hover:border-primary/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c) => (
            <div
              key={c.name + c.day}
              className="group glass rounded-2xl p-6 hover:border-primary/40 hover:-translate-y-1 transition-all animate-fade-in"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs px-2.5 py-1 rounded-full bg-primary/15 text-primary font-semibold uppercase tracking-wide">
                  {c.category}
                </span>
                <span className="text-xs text-muted-foreground font-medium">{c.day}</span>
              </div>
              <h3 className="mt-4 text-xl font-bold">{c.name}</h3>
              <div className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><Clock className="size-4" />{c.time}</div>
                <div className="flex items-center gap-2"><User className="size-4" />{c.trainer}</div>
              </div>
              <Button variant="outline" className="mt-5 w-full rounded-full bg-transparent border-foreground/15 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
                Book Spot
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}