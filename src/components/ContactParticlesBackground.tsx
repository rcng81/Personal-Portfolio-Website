import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";
import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";

export default function ContactParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log("Initializing aboutParticles...");
    await loadSlim(engine);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full z-0">
      <Particles
        id="contactParticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "#0f172a" },
          particles: {
            number: { value: 60, density: { enable: true, area: 800 } },
            color: { value: "#ffffff" },
            opacity: { value: 0.3 },
            size: { value: 3 },
            move: { enable: true, speed: 0.3 },
            links: { enable: false },
          },
          interactivity: {
            events: {
              onHover: { enable: false },
              onClick: { enable: false },
            },
          },
        }}
        className="w-full h-full"
      />
    </div>
  );
}
