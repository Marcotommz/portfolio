import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div id="top" className="relative min-h-screen overflow-x-hidden">
      {/* Animated glassmorphism background */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-slate-950 via-purple-950/30 to-slate-950">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-violet-600/30 blur-3xl animate-blob" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl animate-blob [animation-delay:6s]" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl animate-blob [animation-delay:12s]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
