import Nav from "@/components/Nav";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground font-serif">
      <Nav />

      <main className="pt-40 pb-32 px-8 md:px-16 max-w-7xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 font-sans text-sm font-medium uppercase tracking-wide text-muted-foreground hover:text-primary transition-colors mb-16">
          <ArrowLeft className="h-4 w-4" />
          Back home
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          {/* Photo placeholder */}
          <div className="lg:col-span-4">
            <div className="aspect-[3/4] bg-muted rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-accent/20 mix-blend-multiply" />
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground font-sans text-sm uppercase tracking-widest">
                Photo coming soon
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="lg:col-span-8 space-y-10">
            <div>
              <p className="font-sans text-primary text-sm font-semibold tracking-widest uppercase mb-4">About</p>
              <h1 className="font-sans text-5xl md:text-6xl font-bold leading-tight mb-6">
                Christian<br />Butcher
              </h1>
              <p className="text-xl text-muted-foreground font-serif italic">
                Product Manager &amp; Content Creator
              </p>
            </div>

            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed max-w-2xl">
              <p>
                I'm a Product Manager and Content Creator who believes the best learning experiences are built on narrative, curiosity, and play. I work at the intersection of education, learning design, and storytelling — bringing creative teams together to make complex ideas feel accessible and fun.
              </p>
              <p>
                Throughout my career I've designed mastery-based learning platforms, produced edutainment podcasts, and built simulation games. My goal is always the same: make something meaningful that actually works for real people.
              </p>
              <p>
                My approach is rooted in human-centered design and a deep appreciation for the craft of storytelling. I thrive in the messy middle of problem-solving, finding clarity through collaboration and iteration.
              </p>
              <p className="text-muted-foreground italic">
                — More about my background and experience coming soon.
              </p>
            </div>

            {/* Skills */}
            <div className="pt-8 border-t border-border">
              <h2 className="font-sans text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-6">Areas of Expertise</h2>
              <div className="flex flex-wrap gap-3">
                {[
                  "Product Management",
                  "Learning Design",
                  "Content Strategy",
                  "Edutainment",
                  "Narrative Design",
                  "Human-Centered Design",
                  "Podcast Production",
                  "Game Design",
                  "Team Leadership",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-muted font-sans text-sm text-foreground/80 border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
