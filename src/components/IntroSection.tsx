import { Button } from "@/components/ui/button";
import ParticlesBackground from "@/components/ParticlesBackground";

function scrollToId(id: string, offset: number = 0) {
  const el = document.getElementById(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: "smooth" })
  }
}

export default function IntroSection() {
  return (
    <section id="intro" className="h-screen w-full flex items-center justify-center bg-[#0f172a]">
      {/* Particle Background */}
      <ParticlesBackground />

      {/* Foreground Content */}
      <div className="z-10 text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Russell</h1>
        <p className="text-lg text-muted-foreground mb-6">
          Full-Stack | React Enthusiast | Open to Opportunities
        </p>
        <Button size="lg" onClick={() => scrollToId("about", 100)}>
          View Work
        </Button>

      </div>
    </section>
  );
}
