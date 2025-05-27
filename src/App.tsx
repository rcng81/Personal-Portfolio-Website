import './App.css'
import IntroSection from "@/components/IntroSection";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/Navbar";

function App() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-[#0f172a]">
      <Navbar />
      <IntroSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </div>
  );
}

export default App;
