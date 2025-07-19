import ProjectParticlesBackground from "@/components/ProjectParticlesBackground";
import gigHopImage from "@/assets/gighop.png";
import precisionSyncImage from "@/assets/precision_sync.png";
import boostBuddyImage from "@/assets/boostbuddy.png";
import sportsdleImage from "@/assets/sportsdle.png";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative min-h-screen w-full flex flex-col bg-[#0f172a] text-white overflow-hidden"
    >
      <ProjectParticlesBackground />

      {/* Title */}
      <div className="z-10 w-full text-center pt-10">
        <h2 className="text-6xl font-extrabold relative inline-block text-white">
          Projects
          <span className="block h-4 w-full bg-sky-400 absolute -bottom-0.5 left-[2rem] -z-10"></span>
        </h2>
      </div>

      {/* New Project (Text Left, Image Right) */}
      <div className="z-10 flex-grow flex items-center justify-center w-full py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full items-center">
          {/* Left: Project Details */}
          <div className="text-left md:text-left space-y-6 px-4">
            <h3 className="text-3xl font-bold">[Sportsdle]</h3>
            <h4 className="text-2xl font-semibold text-gray-300">[NBA Wordle-style Guessing Game]</h4>
            <p className="text-lg text-white max-w-xl">
              [NBA guessing game built with React, Flask, and Tailwind for real-time player data, smart search, and interactive game modes.]
            </p>
            <div className="flex flex-col items-start space-y-4 pt-4">
              <a
                href="https://sportsdle.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-semibold border-b-2 border-sky-400 hover:text-sky-400 hover:border-white"
              >
                LIVE APP
              </a>
              <a
                href="https://github.com/rcng81/sportsdle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-semibold border-b-2 border-sky-400 hover:text-sky-400 hover:border-white"
              >
                LEARN MORE
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex justify-end w-full h-auto relative">
            <img
              src={sportsdleImage}
              alt="[New Project Name]"
              className="rounded-lg shadow-lg w-[100%] max-w-[1200px] h-auto object-contain transition-transform duration-300 hover:scale-95"
            />
          </div>
        </div>
      </div>


      {/* First Project */}
      <div className="z-10 flex-grow flex items-center justify-center w-full py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full items-center">
          {/* Left: Full-size Image */}
          <div className="flex justify-start w-full h-auto relative">
            <img
              src={gigHopImage}
              alt="Gig Hop App"
              className="rounded-lg shadow-lg w-[100%] max-w-[1200px] h-auto object-contain transition-transform duration-300 hover:scale-95"
            />
          </div>

          {/* Right: Project Details */}
          <div className="text-left md:text-left space-y-6 px-4">
            <h3 className="text-3xl font-bold">Gig Hop</h3>
            <h4 className="text-2xl font-semibold text-gray-300">Community Gig Platform</h4>
            <p className="text-lg text-white max-w-xl">
              Gig marketplace built with React, Firebase, and Bootstrap for real-time job listings and user interactions.
            </p>
            <div className="flex flex-col items-start space-y-4 pt-4">
              <a
                href="https://gighop.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-semibold border-b-2 border-sky-400 hover:text-sky-400 hover:border-white"
              >
                LIVE APP
              </a>
              <a
                href="https://github.com/rcng81/Gig-Hop"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-semibold border-b-2 border-sky-400 hover:text-sky-400 hover:border-white"
              >
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Second Project (Reversed Layout) */}
      <div className="z-10 flex-grow flex items-center justify-center w-full py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full items-center">
          {/* Left: Project Details */}
          <div className="text-left md:text-left space-y-6 px-4">
            <h3 className="text-3xl font-bold">Precision Sync</h3>
            <h4 className="text-2xl font-semibold text-gray-300">Gaming Sensitivity Converter</h4>
            <p className="text-lg text-white max-w-xl">
              Web application built with React, HTML, and CSS to convert mouse sensitivity between different games with precision and ease.
            </p>
            <div className="flex flex-col items-start space-y-4 pt-4">
              <a
                href="https://sensitivity-converter-three.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-semibold border-b-2 border-sky-400 hover:text-sky-400 hover:border-white"
              >
                LIVE APP
              </a>
              <a
                href="https://github.com/rcng81/Precision-Sync"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-semibold border-b-2 border-sky-400 hover:text-sky-400 hover:border-white"
              >
                LEARN MORE
              </a>
            </div>
          </div>

          {/* Right: Full-size Image */}
          <div className="flex justify-end w-full h-auto relative">
            <img
              src={precisionSyncImage}
              alt="Precision Sync"
              className="rounded-lg shadow-lg w-[100%] max-w-[1200px] h-auto object-contain transition-transform duration-300 hover:scale-95"
            />
          </div>
        </div>
      </div>

      {/* Third Project (Boost Buddy) */}
      <div className="z-10 flex-grow flex items-center justify-center w-full py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full items-center">
          {/* Left: Full-size Image */}
          <div className="flex justify-start w-full h-auto relative">
            <img
              src={boostBuddyImage}
              alt="Boost Buddy Bot"
              className="rounded-lg shadow-lg w-[100%] max-w-[1200px] h-auto object-contain transition-transform duration-300 hover:scale-95"
            />
          </div>

          {/* Right: Project Details */}
          <div className="text-left md:text-left space-y-6 px-4">
            <h3 className="text-3xl font-bold">Boost Buddy</h3>
            <h4 className="text-2xl font-semibold text-gray-300">Motivational Discord Bot</h4>
            <p className="text-lg text-white max-w-xl">
              Discord bot built with Python and Flask that sends daily motivational quotes using scheduled tasks and API integration.
            </p>
            <div className="flex flex-col items-start space-y-4 pt-4">
              <a
                href="https://github.com/rcng81/BoostBuddy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-semibold border-b-2 border-sky-400 hover:text-sky-400 hover:border-white"
              >
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
