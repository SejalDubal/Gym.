import { useState, type FormEvent } from "react";
import { MapPin, Phone, Clock, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const hours = [
  { day: "Mon — Fri", time: "05:00 — 23:00" },
  { day: "Saturday", time: "06:00 — 22:00" },
  { day: "Sunday", time: "07:00 — 21:00" },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-card/40">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 rounded-3xl overflow-hidden glass">
          <div className="p-10 sm:p-12 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Visit us</span>
              <h2 className="mt-3 text-4xl sm:text-5xl font-bold">Drop in. Tour the floor.</h2>
              <p className="mt-4 text-muted-foreground">
                Our doors are open. Stop by, meet the team, and try anything you want.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <span className="grid place-items-center size-11 rounded-xl bg-primary/15 text-primary shrink-0">
                  <MapPin className="size-5" />
                </span>
                <div>
                  <div className="font-semibold">Location</div>
                  <div className="text-sm text-muted-foreground">240 Vanguard Ave, Suite 12<br />Brooklyn, NY 11201</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="grid place-items-center size-11 rounded-xl bg-primary/15 text-primary shrink-0">
                  <Phone className="size-5" />
                </span>
                <div>
                  <div className="font-semibold">Phone</div>
                  <a href="tel:+18005550199" className="text-sm text-muted-foreground hover:text-primary">+1 (800) 555-0199</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="grid place-items-center size-11 rounded-xl bg-primary/15 text-primary shrink-0">
                  <Clock className="size-5" />
                </span>
                <div className="grow">
                  <div className="font-semibold">Hours</div>
                  <ul className="mt-1 text-sm text-muted-foreground space-y-1">
                    {hours.map((h) => (
                      <li key={h.day} className="flex justify-between gap-6">
                        <span>{h.day}</span>
                        <span className="text-foreground/80">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="p-10 sm:p-12 bg-background/40 border-l border-border">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <span className="grid place-items-center size-16 rounded-full bg-primary/15 text-primary mb-6">
                  <Check className="size-8" strokeWidth={3} />
                </span>
                <h3 className="text-2xl font-bold">You're in.</h3>
                <p className="mt-2 text-muted-foreground">We'll be in touch within 24 hours with your day pass.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div>
                  <h3 className="text-2xl font-bold">Get a Free Day Pass</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Try anything. No commitment.</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" required placeholder="Alex Carter" className="h-12 bg-background/60" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required placeholder="you@email.com" className="h-12 bg-background/60" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" required placeholder="(555) 010-2030" className="h-12 bg-background/60" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="goal">Fitness Goal</Label>
                  <Select>
                    <SelectTrigger id="goal" className="h-12 bg-background/60 w-full">
                      <SelectValue placeholder="Pick your goal" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lose">Lose weight</SelectItem>
                      <SelectItem value="build">Build muscle</SelectItem>
                      <SelectItem value="athletic">Athletic performance</SelectItem>
                      <SelectItem value="general">General fitness</SelectItem>
                      <SelectItem value="recovery">Recovery & mobility</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button type="submit" className="w-full h-12 rounded-full font-semibold text-base shadow-[var(--shadow-glow)]">
                  Claim My Day Pass
                  <ArrowRight className="ml-1 size-4" />
                </Button>
                <p className="text-xs text-muted-foreground text-center">By submitting you agree to our terms. We never share your info.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}