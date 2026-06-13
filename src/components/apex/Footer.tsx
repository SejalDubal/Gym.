import { Dumbbell, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-bold">
          <span className="grid place-items-center size-8 rounded-lg bg-primary text-primary-foreground">
            <Dumbbell className="size-4" />
          </span>
          APEX<span className="text-primary">.</span>
        </div>
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Apex Fitness. All rights reserved.</p>
        <div className="flex gap-3">
          {[Instagram, Twitter, Youtube].map((Icon, i) => (
            <a key={i} href="#" className="size-9 rounded-full grid place-items-center glass hover:border-primary/40 transition-colors" aria-label="Social">
              <Icon className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}