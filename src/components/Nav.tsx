import { useState } from "react";
import { Link } from "wouter";
import logo from "@assets/CB_Logo_(1)_1778781521551.png";
import { ChevronDown } from "lucide-react";
import { PROJECTS } from "@/data/projects";

export default function Nav() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-6 px-8 md:px-16 flex items-center justify-between bg-background/80 backdrop-blur-sm border-b border-border/40">
      <Link href="/" className="flex items-center gap-3 group">
        <img src={logo} alt="Christian Butcher Logo" className="h-10 w-auto object-contain" style={{ mixBlendMode: "multiply" }} />
      </Link>

      <div className="hidden md:flex items-center gap-2 font-sans text-sm font-medium tracking-wide uppercase">
        {/* Projects dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button
            className="flex items-center gap-1 px-4 py-2 rounded-full hover:bg-muted transition-colors text-foreground"
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
          >
            Projects
            <ChevronDown
              className={`h-3.5 w-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
            />
          </button>

          {dropdownOpen && (
            <div className="absolute top-full left-0 mt-1 w-56 bg-background border border-border rounded-2xl shadow-lg overflow-hidden py-2 animate-in fade-in slide-in-from-top-2 duration-150">
              {PROJECTS.map((project) => (
                <a
                  key={project.id}
                  href="#"
                  className="block px-5 py-3 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors font-sans normal-case tracking-normal"
                >
                  {project.title}
                </a>
              ))}
            </div>
          )}
        </div>

        <Link
          href="/about"
          className="px-4 py-2 rounded-full hover:bg-muted transition-colors text-foreground"
        >
          About
        </Link>

        <Link
          href="/reach-out"
          className="ml-2 px-5 py-2 rounded-full bg-foreground text-background hover:bg-primary transition-colors"
        >
          Reach Out
        </Link>
      </div>

      {/* Mobile menu */}
      <div className="flex md:hidden items-center gap-4 font-sans text-sm font-medium">
        <Link href="/about" className="hover:text-primary transition-colors uppercase tracking-wide">About</Link>
        <Link href="/reach-out" className="px-4 py-2 rounded-full bg-foreground text-background text-xs uppercase tracking-wide hover:bg-primary transition-colors">Reach Out</Link>
      </div>
    </nav>
  );
}
