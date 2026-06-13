import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { R as Root } from "../_libs/radix-ui__react-label.mjs";
import { S as Select$1, a as SelectValue$1, b as SelectTrigger$1, c as SelectIcon, d as SelectPortal, e as SelectContent$1, f as SelectViewport, g as SelectItem$1, h as SelectItemIndicator, i as SelectItemText, j as SelectScrollUpButton$1, k as SelectScrollDownButton$1, l as SelectLabel$1, m as SelectSeparator$1 } from "../_libs/radix-ui__react-select.mjs";
import { D as Dumbbell, X, M as Menu, A as ArrowRight, C as Clock, F as Flame, U as Users, a as Activity, b as Compass, S as Sparkles, c as Maximize2, d as Check, e as User, f as ChevronLeft, g as ChevronRight, I as Instagram, T as Twitter, Y as Youtube, h as MapPin, P as Phone, i as ChevronDown, j as ChevronUp } from "../_libs/lucide-react.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/radix-ui__number.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-arrow.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const links = [
  { label: "Home", href: "#home" },
  { label: "Spaces", href: "#spaces" },
  { label: "Classes", href: "#classes" },
  { label: "Membership", href: "#membership" },
  { label: "Trainers", href: "#trainers" },
  { label: "Contact", href: "#contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass py-3" : "py-5"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "container mx-auto flex items-center justify-between px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#home", className: "flex items-center gap-2 font-bold text-lg tracking-tight", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid place-items-center size-9 rounded-lg bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Dumbbell, { className: "size-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "APEX",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "hidden md:flex items-center gap-8 text-sm font-medium", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: l.href,
              className: "text-foreground/80 hover:text-primary transition-colors story-link",
              children: l.label
            }
          ) }, l.href)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "rounded-full font-semibold shadow-[var(--shadow-glow)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#membership", children: "Join Now" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "md:hidden p-2",
              onClick: () => setOpen((v) => !v),
              "aria-label": "Toggle menu",
              children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "size-6" })
            }
          )
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden glass mt-3 mx-4 rounded-2xl p-6 animate-fade-in", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "flex flex-col gap-4 text-base font-medium", children: [
          links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: l.href, onClick: () => setOpen(false), children: l.label }) }, l.href)),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "w-full rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#membership", onClick: () => setOpen(false), children: "Join Now" }) }) })
        ] }) })
      ]
    }
  );
}
const heroImg = "/assets/hero-gym-Bj6LZUWq.jpg";
const stats = [
  { icon: Clock, label: "24/7 Access", value: "Every Day" },
  { icon: Flame, label: "50+ Classes", value: "Per Week" },
  { icon: Users, label: "Expert Coaches", value: "Certified" }
];
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "home", className: "relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: heroImg,
          alt: "Apex Fitness training floor",
          width: 1920,
          height: 1280,
          className: "absolute inset-0 size-full object-cover"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative container mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 space-y-8 animate-float-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-semibold tracking-wider uppercase", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-2 rounded-full bg-primary animate-pulse" }),
          "New Members — Free 7 Day Trial"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]", children: [
          "Elevate Your Limits.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary text-glow", children: "Define Your Future." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-xl leading-relaxed", children: "Join a community built on grit. Train with elite coaches, on premium equipment, in a space engineered to push you past your last PR." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "rounded-full font-semibold text-base h-14 px-8 shadow-[var(--shadow-glow)] hover:scale-105 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#contact", children: [
            "Start Free Trial",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 size-4" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "rounded-full font-semibold text-base h-14 px-8 border-foreground/20 bg-transparent hover:bg-foreground/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#classes", children: "View Classes" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-1", children: stats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "glass rounded-2xl p-6 flex items-center gap-4 animate-float-up hover:border-primary/40 hover:-translate-y-1 transition-all",
          style: { animationDelay: `${0.2 + i * 0.1}s` },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid place-items-center size-14 rounded-xl bg-primary/15 text-primary shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "size-7" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold", children: s.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: s.value })
            ] })
          ]
        },
        s.label
      )) })
    ] })
  ] });
}
const gymWeights = "/assets/gym-weights-C6FP0kTj.png";
const gymCardio = "/assets/gym-cardio-BxtFL2QP.png";
const gymYoga = "/assets/gym-yoga-YSG1qUy1.png";
const gymRecovery = "/assets/gym-recovery-yPTZ9c5-.png";
const spaces = [
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
function Spaces() {
  const [activeSpace, setActiveSpace] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "spaces", className: "py-24 sm:py-32 bg-card/25 border-y border-border/50", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.2em] text-primary font-semibold", children: "Our Facilities" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-4xl sm:text-5xl font-bold", children: "World-class spaces built for elite results." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Explore our meticulously engineered zones designed to maximize every second of your training and recovery." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-4", children: spaces.map((space) => {
        const Icon = space.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            onClick: () => setActiveSpace(space),
            className: "group relative h-[420px] rounded-3xl overflow-hidden glass border border-border/40 cursor-pointer hover:border-primary/40 transition-all duration-500 hover:-translate-y-2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 z-0 overflow-hidden", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: space.img,
                    alt: space.title,
                    className: "size-full object-cover transition-transform duration-700 group-hover:scale-110",
                    loading: "lazy"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/40 to-black/20 group-hover:via-background/50 transition-all duration-300" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-5 right-5 z-10 size-10 rounded-full glass border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Maximize2, { className: "size-4 text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 bottom-0 p-6 z-10 flex flex-col justify-end h-1/2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 rounded-xl bg-primary/20 backdrop-blur-md text-primary flex items-center justify-center w-fit mb-4 border border-primary/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-5" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-white tracking-tight", children: space.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-primary font-medium mt-1", children: space.tagline }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-2 line-clamp-2 opacity-80 group-hover:opacity-100 transition-opacity", children: space.description })
              ] })
            ]
          },
          space.id
        );
      }) })
    ] }),
    activeSpace && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl glass border border-white/10 flex flex-col md:flex-row shadow-[var(--shadow-glow)]",
        onClick: (e) => e.stopPropagation(),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setActiveSpace(null),
              className: "absolute top-5 right-5 z-20 size-10 rounded-full bg-black/50 border border-white/10 text-white flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200",
              "aria-label": "Close details",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-5" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full md:w-1/2 min-h-[300px] md:min-h-[450px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: activeSpace.img,
                alt: activeSpace.title,
                className: "absolute inset-0 size-full object-cover"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-background/90" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-9 rounded-lg bg-primary/20 text-primary flex items-center justify-center border border-primary/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(activeSpace.icon, { className: "size-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest text-primary font-bold", children: "Featured Space" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-bold tracking-tight", children: activeSpace.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-primary font-medium mt-1", children: activeSpace.tagline }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-4 leading-relaxed", children: activeSpace.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold text-white uppercase tracking-wider mb-3", children: "Key Highlights" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5", children: activeSpace.features.map((feature, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid place-items-center size-5 rounded-full bg-primary/15 text-primary shrink-0 mt-0.5 border border-primary/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3", strokeWidth: 3 }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/80", children: feature })
              ] }, i)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 pt-6 border-t border-white/5 flex flex-wrap gap-2", children: activeSpace.equipment.map((eq, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "text-[11px] px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-muted-foreground font-semibold uppercase tracking-wider",
                children: eq
              },
              i
            )) })
          ] })
        ]
      }
    ) })
  ] });
}
const categories = ["All", "HIIT", "Strength", "Yoga", "Boxing", "Functional"];
const schedule = [
  { name: "Sunrise HIIT", category: "HIIT", time: "06:00 — 07:00", day: "Mon", trainer: "Jordan Cole" },
  { name: "Power Lifting", category: "Strength", time: "08:00 — 09:30", day: "Mon", trainer: "Maya Reeves" },
  { name: "Vinyasa Flow", category: "Yoga", time: "10:00 — 11:00", day: "Tue", trainer: "Alex Nguyen" },
  { name: "Boxing Fundamentals", category: "Boxing", time: "17:30 — 18:30", day: "Tue", trainer: "Marcus Vega" },
  { name: "Athletic Conditioning", category: "Functional", time: "18:00 — 19:00", day: "Wed", trainer: "Jordan Cole" },
  { name: "Hypertrophy Lab", category: "Strength", time: "19:00 — 20:30", day: "Wed", trainer: "Maya Reeves" },
  { name: "Tabata Burn", category: "HIIT", time: "06:30 — 07:15", day: "Thu", trainer: "Maya Reeves" },
  { name: "Restore Yoga", category: "Yoga", time: "19:30 — 20:30", day: "Thu", trainer: "Alex Nguyen" },
  { name: "Combat Cardio", category: "Boxing", time: "07:00 — 08:00", day: "Fri", trainer: "Marcus Vega" }
];
function Classes() {
  const [active, setActive] = reactExports.useState("All");
  const filtered = active === "All" ? schedule : schedule.filter((c) => c.category === active);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "classes", className: "py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.2em] text-primary font-semibold", children: "Weekly Schedule" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-4xl sm:text-5xl font-bold", children: "Train like there's no off-day." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Filter by discipline and lock in your spot." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-10", children: categories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => setActive(cat),
        className: `px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${active === cat ? "bg-primary text-primary-foreground shadow-[var(--shadow-glow)]" : "glass hover:border-primary/40"}`,
        children: cat
      },
      cat
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: filtered.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "group glass rounded-2xl p-6 hover:border-primary/40 hover:-translate-y-1 transition-all animate-fade-in",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs px-2.5 py-1 rounded-full bg-primary/15 text-primary font-semibold uppercase tracking-wide", children: c.category }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-medium", children: c.day })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-xl font-bold", children: c.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 space-y-1.5 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "size-4" }),
              c.time
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "size-4" }),
              c.trainer
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", className: "mt-5 w-full rounded-full bg-transparent border-foreground/15 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors", children: "Book Spot" })
        ]
      },
      c.name + c.day
    )) })
  ] }) });
}
const tiers = [
  {
    name: "Basic",
    tagline: "Get moving.",
    monthly: 39,
    annually: 29,
    features: ["Unlimited gym access", "Locker room & showers", "Access to all cardio zones", "Mobile app workouts"]
  },
  {
    name: "Premium",
    tagline: "Train smarter.",
    monthly: 79,
    annually: 59,
    features: ["Everything in Basic", "All 50+ group classes", "2 personal training sessions / mo", "Recovery zone access", "Guest passes (4 / mo)"],
    highlight: true
  },
  {
    name: "VIP",
    tagline: "No limits.",
    monthly: 149,
    annually: 119,
    features: ["Everything in Premium", "Unlimited PT sessions", "Nutrition coaching", "Priority class booking", "Spa & sauna access"]
  }
];
function Pricing() {
  const [annually, setAnnually] = reactExports.useState(true);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "membership", className: "py-24 sm:py-32 bg-card/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.2em] text-primary font-semibold", children: "Membership" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-4xl sm:text-5xl font-bold", children: "Pick your tier. Lock in your gains." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Cancel anytime. No hidden fees. Just results." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 inline-flex items-center gap-1 p-1 rounded-full glass", children: [
        { label: "Monthly", v: false },
        { label: "Annually", v: true, badge: "−25%" }
      ].map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setAnnually(opt.v),
          className: `px-5 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${annually === opt.v ? "bg-primary text-primary-foreground" : "text-foreground/70"}`,
          children: [
            opt.label,
            opt.badge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] px-1.5 py-0.5 rounded-full ${annually === opt.v ? "bg-primary-foreground/15" : "bg-primary/20 text-primary"}`, children: opt.badge })
          ]
        },
        opt.label
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 lg:grid-cols-3 max-w-6xl mx-auto", children: tiers.map((t) => {
      const price = annually ? t.annually : t.monthly;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `relative rounded-3xl p-8 transition-all hover:-translate-y-1 ${t.highlight ? "bg-card border-2 border-primary shadow-[var(--shadow-glow)] lg:scale-105" : "glass hover:border-primary/30"}`,
          children: [
            t.highlight && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider", children: "Most Popular" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold", children: t.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: t.tagline }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-baseline gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-5xl font-bold", children: [
                "$",
                price
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "/mo" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: annually ? "Billed annually" : "Billed monthly" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                className: `mt-6 w-full rounded-full font-semibold ${t.highlight ? "" : "bg-foreground text-background hover:bg-foreground/90"}`,
                children: [
                  "Choose ",
                  t.name
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-8 space-y-3", children: t.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid place-items-center size-5 rounded-full bg-primary/20 text-primary shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3", strokeWidth: 3 }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/85", children: f })
            ] }, f)) })
          ]
        },
        t.name
      );
    }) })
  ] }) });
}
const t1 = "/assets/trainer-1-D5nD2lgH.jpg";
const t2 = "/assets/trainer-2-CD4IqG2g.jpg";
const t3 = "/assets/trainer-3-DXS6iZe6.jpg";
const t4 = "/assets/trainer-4-DoCLtcaz.jpg";
const trainers = [
  { name: "Jordan Cole", role: "Strength & Conditioning", img: t1 },
  { name: "Maya Reeves", role: "Hypertrophy & Powerlifting", img: t2 },
  { name: "Marcus Vega", role: "Boxing & Combat Sports", img: t3 },
  { name: "Alex Nguyen", role: "Yoga & Mobility", img: t4 }
];
function Trainers() {
  const scrollerRef = reactExports.useRef(null);
  const scroll = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "l" ? -340 : 340, behavior: "smooth" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "trainers", className: "py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-6 mb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.2em] text-primary font-semibold", children: "Meet the team" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-4xl sm:text-5xl font-bold", children: "Coaches who've been where you're going." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => scroll("l"),
            className: "size-11 rounded-full glass grid place-items-center hover:border-primary/40 transition-colors",
            "aria-label": "Previous",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "size-5" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => scroll("r"),
            className: "size-11 rounded-full glass grid place-items-center hover:border-primary/40 transition-colors",
            "aria-label": "Next",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-5" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref: scrollerRef,
        className: "flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 -mx-6 px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        children: trainers.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "article",
          {
            className: "snap-start shrink-0 w-[300px] sm:w-[340px] group relative rounded-3xl overflow-hidden glass hover:border-primary/40 transition-all",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/5] overflow-hidden", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: t.img,
                    alt: t.name,
                    width: 768,
                    height: 960,
                    loading: "lazy",
                    className: "size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold", children: t.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-primary font-medium mt-1", children: t.role }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex gap-2", children: [Instagram, Twitter, Youtube].map((Icon, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "#",
                    className: "size-8 rounded-full grid place-items-center bg-foreground/10 hover:bg-primary hover:text-primary-foreground transition-colors",
                    "aria-label": "Social",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-4" })
                  },
                  i
                )) })
              ] })
            ]
          },
          t.name
        ))
      }
    )
  ] }) });
}
const Input = reactExports.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Root, { ref, className: cn(labelVariants(), className), ...props }));
Label.displayName = Root.displayName;
const Select = Select$1;
const SelectValue = SelectValue$1;
const SelectTrigger = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  SelectTrigger$1,
  {
    ref,
    className: cn(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectIcon, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = SelectTrigger$1.displayName;
const SelectScrollUpButton = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  SelectScrollUpButton$1,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
const SelectScrollDownButton = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  SelectScrollDownButton$1,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
const SelectContent = reactExports.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectPortal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
  SelectContent$1,
  {
    ref,
    className: cn(
      "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SelectViewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = SelectContent$1.displayName;
const SelectLabel = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  SelectLabel$1,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = SelectLabel$1.displayName;
const SelectItem = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  SelectItem$1,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItemIndicator, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectItem$1.displayName;
const SelectSeparator = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  SelectSeparator$1,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
SelectSeparator.displayName = SelectSeparator$1.displayName;
const hours = [
  { day: "Mon — Fri", time: "05:00 — 23:00" },
  { day: "Saturday", time: "06:00 — 22:00" },
  { day: "Sunday", time: "07:00 — 21:00" }
];
function Contact() {
  const [submitted, setSubmitted] = reactExports.useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "py-24 sm:py-32 bg-card/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-10 rounded-3xl overflow-hidden glass", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-10 sm:p-12 space-y-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.2em] text-primary font-semibold", children: "Visit us" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-4xl sm:text-5xl font-bold", children: "Drop in. Tour the floor." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Our doors are open. Stop by, meet the team, and try anything you want." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid place-items-center size-11 rounded-xl bg-primary/15 text-primary shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: "Location" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground", children: [
              "240 Vanguard Ave, Suite 12",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Brooklyn, NY 11201"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid place-items-center size-11 rounded-xl bg-primary/15 text-primary shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: "Phone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+18005550199", className: "text-sm text-muted-foreground hover:text-primary", children: "+1 (800) 555-0199" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid place-items-center size-11 rounded-xl bg-primary/15 text-primary shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "size-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: "Hours" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-1 text-sm text-muted-foreground space-y-1", children: hours.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: h.day }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/80", children: h.time })
            ] }, h.day)) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-10 sm:p-12 bg-background/40 border-l border-border", children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full flex flex-col items-center justify-center text-center py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid place-items-center size-16 rounded-full bg-primary/15 text-primary mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-8", strokeWidth: 3 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold", children: "You're in." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: "We'll be in touch within 24 hours with your day pass." })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold", children: "Get a Free Day Pass" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Try anything. No commitment." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "name", children: "Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "name", required: true, placeholder: "Alex Carter", className: "h-12 bg-background/60" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "email", type: "email", required: true, placeholder: "you@email.com", className: "h-12 bg-background/60" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "phone", children: "Phone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "phone", type: "tel", required: true, placeholder: "(555) 010-2030", className: "h-12 bg-background/60" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "goal", children: "Fitness Goal" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "goal", className: "h-12 bg-background/60 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Pick your goal" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "lose", children: "Lose weight" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "build", children: "Build muscle" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "athletic", children: "Athletic performance" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "general", children: "General fitness" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "recovery", children: "Recovery & mobility" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "submit", className: "w-full h-12 rounded-full font-semibold text-base shadow-[var(--shadow-glow)]", children: [
        "Claim My Day Pass",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 size-4" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground text-center", children: "By submitting you agree to our terms. We never share your info." })
    ] }) })
  ] }) }) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 font-bold", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid place-items-center size-8 rounded-lg bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Dumbbell, { className: "size-4" }) }),
      "APEX",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Apex Fitness. All rights reserved."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3", children: [Instagram, Twitter, Youtube].map((Icon, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "size-9 rounded-full grid place-items-center glass hover:border-primary/40 transition-colors", "aria-label": "Social", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-4" }) }, i)) })
  ] }) });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Spaces, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Classes, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Pricing, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Trainers, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Index as component
};
