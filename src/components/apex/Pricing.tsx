import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

type Tier = {
  name: string;
  tagline: string;
  monthly: number;
  annually: number;
  features: string[];
  highlight?: boolean;
};

const tiers: Tier[] = [
  {
    name: "Basic",
    tagline: "Get moving.",
    monthly: 39,
    annually: 29,
    features: ["Unlimited gym access", "Locker room & showers", "Access to all cardio zones", "Mobile app workouts"],
  },
  {
    name: "Premium",
    tagline: "Train smarter.",
    monthly: 79,
    annually: 59,
    features: ["Everything in Basic", "All 50+ group classes", "2 personal training sessions / mo", "Recovery zone access", "Guest passes (4 / mo)"],
    highlight: true,
  },
  {
    name: "VIP",
    tagline: "No limits.",
    monthly: 149,
    annually: 119,
    features: ["Everything in Premium", "Unlimited PT sessions", "Nutrition coaching", "Priority class booking", "Spa & sauna access"],
  },
];

export function Pricing() {
  const [annually, setAnnually] = useState(true);

  return (
    <section id="membership" className="py-24 sm:py-32 bg-card/40">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Membership</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold">Pick your tier. Lock in your gains.</h2>
          <p className="mt-4 text-muted-foreground">Cancel anytime. No hidden fees. Just results.</p>

          <div className="mt-8 inline-flex items-center gap-1 p-1 rounded-full glass">
            {[
              { label: "Monthly", v: false },
              { label: "Annually", v: true, badge: "−25%" },
            ].map((opt) => (
              <button
                key={opt.label}
                onClick={() => setAnnually(opt.v)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
                  annually === opt.v ? "bg-primary text-primary-foreground" : "text-foreground/70"
                }`}
              >
                {opt.label}
                {opt.badge && (
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${annually === opt.v ? "bg-primary-foreground/15" : "bg-primary/20 text-primary"}`}>
                    {opt.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 max-w-6xl mx-auto">
          {tiers.map((t) => {
            const price = annually ? t.annually : t.monthly;
            return (
              <div
                key={t.name}
                className={`relative rounded-3xl p-8 transition-all hover:-translate-y-1 ${
                  t.highlight
                    ? "bg-card border-2 border-primary shadow-[var(--shadow-glow)] lg:scale-105"
                    : "glass hover:border-primary/30"
                }`}
              >
                {t.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold">{t.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{t.tagline}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-5xl font-bold">${price}</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {annually ? "Billed annually" : "Billed monthly"}
                </p>

                <Button
                  className={`mt-6 w-full rounded-full font-semibold ${
                    t.highlight ? "" : "bg-foreground text-background hover:bg-foreground/90"
                  }`}
                >
                  Choose {t.name}
                </Button>

                <ul className="mt-8 space-y-3">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <span className="grid place-items-center size-5 rounded-full bg-primary/20 text-primary shrink-0 mt-0.5">
                        <Check className="size-3" strokeWidth={3} />
                      </span>
                      <span className="text-foreground/85">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}