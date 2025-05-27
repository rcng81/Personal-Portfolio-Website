// src/components/ParticlesBackground.tsx

import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";
import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full z-0">
      <Particles
        id="introParticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: {
            color: "#0f172a",
          },
          particles: {
            number: {
              value: 60,
              density: {
                enable: true,
                area: 800,
              },
            },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.2 },
            size: { value: 3 },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              outModes: { default: "bounce" },
            },
            links: {
              enable: true,
              color: "#ffffff",
              opacity: 0.2,
              distance: 130,
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              repulse: { distance: 100 },
              push: { quantity: 4 },
            },
          },
        }}
        className="w-full h-full"
      />
    </div>
  );
}
