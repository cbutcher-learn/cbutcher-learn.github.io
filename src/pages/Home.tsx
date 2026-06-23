import React from "react";
import logo from "@assets/CB_Logo_(1)_1778781521551.png";
import { Link } from "wouter";
import { ArrowRight, Mail, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Nav from "@/components/Nav";
import { PROJECTS } from "@/data/projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-serif selection:bg-accent/30 selection:text-foreground">
      <Nav />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-[90vh] flex items-center pt-32 pb-20 px-8 md:px-16 max-w-7xl mx-auto">
        <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000 relative">
          <img
            src={logo}
            alt=""
            aria-hidden="true"
            className="absolute pointer-events-none select-none"
            style={{
              opacity: 0.12,
              mixBlendMode: "multiply",
              zIndex: 0,
              width: "100%",
              top: "-10%",
              left: "-5%",
              transform: "scale(1.15)",
            }}
          />
          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 className="font-sans text-primary text-sm md:text-base font-semibold tracking-widest uppercase mb-6">HI, I'm Christian</h2>
            <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight text-foreground">
              I bring creative people together to <span className="text-secondary italic font-serif font-normal">solve messy problems</span>, build meaningful things, and make complicated ideas <span className="text-accent">easier to understand</span>.
            </h1>
          </div>
          <div className="mt-12 flex items-center gap-6">
            <a href="#work">
              <Button size="lg" className="bg-foreground text-background hover:bg-primary rounded-full px-8 h-14 text-base font-sans font-medium transition-all group">
                View my work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Work Showcase Section */}
      <section id="work" className="py-32 px-8 md:px-16 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h2 className="font-sans text-4xl md:text-5xl font-bold mb-4">Selected Work</h2>
              <p className="text-xl text-muted-foreground max-w-2xl font-serif">
                A collection of projects spanning product management, learning design, and interactive storytelling.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
            {PROJECTS.map((project, index) => (
              <div
                key={project.id}
                className={`group relative ${index === 2 ? 'md:col-span-2' : ''} ${index === 2 ? 'max-w-4xl mx-auto' : ''}`}
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-8 bg-muted">
                  <div className="absolute inset-0 bg-foreground/5 group-hover:bg-transparent transition-colors z-10 duration-500" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <div>
                  <h3 className="font-sans text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground text-lg mb-6 max-w-xl">{project.description}</p>
                  <a href={project.link} className="inline-flex items-center font-sans font-semibold text-foreground hover:text-primary transition-colors uppercase tracking-wider text-sm">
                    Explore Project <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-8 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <div className="aspect-[3/4] bg-muted rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-accent/20 mix-blend-multiply" />
              <div className="absolute inset-0 flex items-center justify-center p-12 text-primary opacity-20">
                <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
                  <circle cx="50" cy="50" r="40" />
                </svg>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-secondary rounded-full -z-10 blur-2xl opacity-60" />
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-primary rounded-full -z-10 blur-3xl opacity-40" />
          </div>

          <div className="lg:col-span-7 space-y-8">
            <h2 className="font-sans text-4xl md:text-5xl font-bold">The intersection of <br /><span className="text-primary italic font-serif font-normal">learning</span> & <span className="text-secondary italic font-serif font-normal">storytelling</span></h2>
            <div className="text-xl text-foreground/80 space-y-6 max-w-2xl leading-relaxed">
              <p>
                I'm a Product Manager and Content Creator who believes that the best learning experiences are built on narrative, curiosity, and play.
              </p>
              <p>
                Throughout my career, I've worked to make complex ideas feel accessible and fun. Whether it's designing a mastery-based learning platform, producing an edutainment podcast, or creating simulation games, my goal is always to bring creative teams together to build something meaningful.
              </p>
              <p>
                My approach is rooted in human-centered design and a deep appreciation for the craft of storytelling. I thrive in the messy middle of problem-solving, finding clarity through collaboration and iteration.
              </p>
            </div>
            <Link href="/about">
              <Button variant="outline" className="rounded-full px-8 h-12 font-sans font-medium mt-4">
                More about me <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-8 md:px-16 bg-foreground text-background">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="font-sans text-4xl md:text-6xl font-bold">Let's build something <span className="text-accent italic font-serif font-normal">meaningful</span> together.</h2>
          <p className="text-xl text-background/80 font-serif max-w-2xl mx-auto">
            Whether you have a messy problem to solve or just want to chat about learning design, I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Link href="/reach-out">
              <Button size="lg" className="bg-background text-foreground hover:bg-accent hover:text-foreground rounded-full px-8 h-14 text-base font-sans font-medium transition-all w-full sm:w-auto">
                <Mail className="mr-2 h-5 w-5" />
                Reach Out
              </Button>
            </Link>
            <div className="flex items-center gap-4">
              <a href="#" className="p-4 rounded-full bg-background/10 hover:bg-background/20 hover:text-accent transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="p-4 rounded-full bg-background/10 hover:bg-background/20 hover:text-accent transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 md:px-16 bg-foreground text-background/60 border-t border-background/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-sm tracking-wide">
          <p>© {new Date().getFullYear()} Christian Butcher. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-background transition-colors">Dribbble</a>
            <a href="#" className="hover:text-background transition-colors">ReadCV</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
