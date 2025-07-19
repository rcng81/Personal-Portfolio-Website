import AboutParticlesBackground from "@/components/AboutParticlesBackground";
import profilePic from "@/assets/profile2.jpg";
import cssIcon from "@/assets/css3.png";


export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative h-screen w-full flex flex-col bg-[#0f172a] text-white overflow-hidden"
    >
      <AboutParticlesBackground />

      {/* Title with underline */}
      <div className="z-10 w-full text-center pt-10">
        <h2 className="text-6xl font-extrabold relative inline-block text-white">
          About
          <span className="block h-4 w-full bg-sky-400 absolute -bottom-0.5 left-[2rem] -z-10"></span>
        </h2>
      </div>

      {/* Content */}
      <div className="z-10 flex-grow flex items-center justify-center w-full px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full items-center">
          {/* Left column*/}
          <div className="flex flex-col items-center text-center gap-6">
            <img
              src={profilePic}
              alt="Profile"
              className="w-52 h-52 object-cover rounded-full border-4 border-sky-400 shadow-lg"
            />
            <p className="text-lg text-white max-w-xl leading-relaxed">
              I'm Russell Ng, a recent Computer Science graduate from Pace University with a strong focus on modern web development using React, TypeScript, and Python. I’ve built full-stack applications that span from data dashboards to real-time gig platforms, and during my internship at S&P Global, I engineered a Dash-based interface to analyze over 26,000 product components. My technical strengths lie in building fast, maintainable frontends with React and Tailwind, and crafting clean, scalable APIs with Python and Flask. I’m actively seeking full-time roles where I can build impactful products, work in collaborative environments, and continue growing as a developer.
            </p>
          </div>

          {/* Right column*/}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
            {[
              { name: "JavaScript", icon: "javascript" },
              { name: "TypeScript", icon: "typescript" },
              { name: "React", icon: "react" },
              { name: "HTML", icon: "html5" },
              { name: "CSS", icon: "css3", local: true },
              { name: "Python", icon: "python" },
              { name: "Flask", icon: "flask" },
              { name: "Dash", icon: "plotly" },
              { name: "Tailwind", icon: "tailwindcss" },
            ].map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center justify-center border border-sky-400 rounded-lg p-4 hover:scale-105 transition-transform"
              >
                <img
                  src={skill.local ? cssIcon : `https://cdn.simpleicons.org/${skill.icon}`}
                  alt={skill.name}
                  className="w-10 h-10 mb-2"
                />
                <span className="text-sm">{skill.name.toUpperCase()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
