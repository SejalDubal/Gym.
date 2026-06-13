import { useEffect, useState } from "react";
import { Dumbbell, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Home", href: "#home" },
  { label: "Spaces", href: "#spaces" },
  { label: "Classes", href: "#classes" },
  { label: "Membership", href: "#membership" },
  { label: "Trainers", href: "#trainers" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "py-5"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-2 font-bold text-lg tracking-tight">
          <span className="grid place-items-center size-9 rounded-lg bg-primary text-primary-foreground">
            <Dumbbell className="size-5" />
          </span>
          <span>APEX<span className="text-primary">.</span></span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-foreground/80 hover:text-primary transition-colors story-link"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button asChild className="rounded-full font-semibold shadow-[var(--shadow-glow)]">
            <a href="#membership">Join Now</a>
          </Button>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass mt-3 mx-4 rounded-2xl p-6 animate-fade-in">
          <ul className="flex flex-col gap-4 text-base font-medium">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
              </li>
            ))}
            <li>
              <Button asChild className="w-full rounded-full">
                <a href="#membership" onClick={() => setOpen(false)}>Join Now</a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}