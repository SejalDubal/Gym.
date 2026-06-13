import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/apex/Navbar";
import { Hero } from "@/components/apex/Hero";
import { Classes } from "@/components/apex/Classes";
import { Pricing } from "@/components/apex/Pricing";
import { Trainers } from "@/components/apex/Trainers";
import { Contact } from "@/components/apex/Contact";
import { Footer } from "@/components/apex/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Apex Fitness — Elevate Your Limits. Define Your Future." },
      { name: "description", content: "Premium fitness center with elite coaching, 50+ weekly classes, 24/7 access, and recovery zone. Start your free 7-day trial." },
      { property: "og:title", content: "Apex Fitness — Elevate Your Limits" },
      { property: "og:description", content: "Premium fitness center with elite coaching and 50+ weekly classes." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Classes />
        <Pricing />
        <Trainers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
