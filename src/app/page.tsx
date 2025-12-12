import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen font-sans selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
