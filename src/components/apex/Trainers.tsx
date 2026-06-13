import { useRef } from "react";
import { ChevronLeft, ChevronRight, Instagram, Twitter, Youtube } from "lucide-react";
import t1 from "@/assets/trainer-1.jpg";
import t2 from "@/assets/trainer-2.jpg";
import t3 from "@/assets/trainer-3.jpg";
import t4 from "@/assets/trainer-4.jpg";

const trainers = [
  { name: "Jordan Cole", role: "Strength & Conditioning", img: t1 },
  { name: "Maya Reeves", role: "Hypertrophy & Powerlifting", img: t2 },
  { name: "Marcus Vega", role: "Boxing & Combat Sports", img: t3 },
  { name: "Alex Nguyen", role: "Yoga & Mobility", img: t4 },
];

export function Trainers() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "l" | "r") => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "l" ? -340 : 340, behavior: "smooth" });
  };

  return (
    <section id="trainers" className="py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Meet the team</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold">Coaches who've been where you're going.</h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("l")}
              className="size-11 rounded-full glass grid place-items-center hover:border-primary/40 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              onClick={() => scroll("r")}
              className="size-11 rounded-full glass grid place-items-center hover:border-primary/40 transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 -mx-6 px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {trainers.map((t) => (
            <article
              key={t.name}
              className="snap-start shrink-0 w-[300px] sm:w-[340px] group relative rounded-3xl overflow-hidden glass hover:border-primary/40 transition-all"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={t.img}
                  alt={t.name}
                  width={768}
                  height={960}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold">{t.name}</h3>
                <p className="text-sm text-primary font-medium mt-1">{t.role}</p>
                <div className="mt-3 flex gap-2">
                  {[Instagram, Twitter, Youtube].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="size-8 rounded-full grid place-items-center bg-foreground/10 hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="Social"
                    >
                      <Icon className="size-4" />
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}