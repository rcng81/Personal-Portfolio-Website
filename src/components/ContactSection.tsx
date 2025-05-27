import ContactParticlesBackground from "@/components/ContactParticlesBackground";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative w-full flex flex-col bg-[#0f172a] text-white overflow-hidden"
    >
      <ContactParticlesBackground />
      <div className="z-10 w-full flex flex-col items-center text-center px-4 py-20">
        <h2 className="text-5xl font-extrabold mb-4 relative inline-block">
          Contact
          <span className="block h-4 w-full bg-sky-400 absolute -bottom-0.5 left-[2rem] -z-10"></span>
        </h2>
        <p className="text-white text-lg max-w-xl mb-4">
          I'd love to hear from you! Feel free to reach out with questions, opportunities, or just to say hello.
        </p>

        <p className="text-lg font-medium mb-8">
          Email: <a href="mailto:rcng81@gmail.com" className="text-sky-400 hover:underline">rcng81@gmail.com</a>
        </p>

        {/* Footer Icons */}
        <div className="flex space-x-6 mb-6">
          <a href="https://www.linkedin.com/in/russell-cng/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white hover:text-sky-400 transition text-3xl" />
          </a>
          <a href="https://github.com/rcng81" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white hover:text-sky-400 transition text-3xl" />
          </a>
        </div>

        <span className="text-sm text-muted-foreground">Russell Ng</span>
      </div>
    </section>
  );
}
