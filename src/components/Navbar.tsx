import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const sections = [
  { id: "intro", label: "Home", offset: 0 },
  { id: "about", label: "About", offset: 100 },
  { id: "projects", label: "Projects", offset: 100 },
  { id: "contact", label: "Contact", offset: 100 },
];

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      const top = aboutSection.getBoundingClientRect().top;
      setVisible(top <= 100);
    }

    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.body.scrollHeight;

    let foundActive = false;

    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (!el) continue;

      const top = el.offsetTop;
      const bottom = top + el.offsetHeight;

      if (scrollY + 200 >= top && scrollY + 200 < bottom) {
        setActiveSection(section.id);
        foundActive = true;
        break;
      }
    }

    const atBottom = Math.abs(scrollY + windowHeight - docHeight) < 5;
    if (atBottom) {
      setActiveSection("contact");
    }
  };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-opacity duration-300",
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="backdrop-blur-md bg-[#0f172a]/80 border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <div className="text-white font-bold text-lg">Russell Ng</div>
        <div className="space-x-6 text-white text-lg font-medium">
          {sections.map((section) => (
            <span
              key={section.id}
              className={cn(
                "cursor-pointer transition-colors",
                activeSection === section.id
                  ? "text-sky-400"
                  : "hover:text-sky-400"
              )}
              onClick={() => scrollToId(section.id, section.offset)}
            >
              {section.label}
            </span>
          ))}
        </div>
      </div>
    </nav>
  );
}

function scrollToId(id: string, offset: number = 0) {
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
}
