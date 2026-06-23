import Nav from "@/components/Nav";
import { Link } from "wouter";
import { ArrowLeft, Mail, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ReachOut() {
  return (
    <div className="min-h-screen bg-background text-foreground font-serif">
      <Nav />

      <main className="pt-40 pb-32 px-8 md:px-16 max-w-5xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 font-sans text-sm font-medium uppercase tracking-wide text-muted-foreground hover:text-primary transition-colors mb-16">
          <ArrowLeft className="h-4 w-4" />
          Back home
        </Link>

        <div className="max-w-2xl">
          <p className="font-sans text-primary text-sm font-semibold tracking-widest uppercase mb-6">Reach Out</p>
          <h1 className="font-sans text-5xl md:text-6xl font-bold leading-tight mb-8">
            Let's build something{" "}
            <span className="text-secondary italic font-serif font-normal">meaningful</span>{" "}
            together.
          </h1>

          <p className="text-xl text-foreground/70 leading-relaxed mb-16">
            Whether you have a messy problem to solve, a creative project in mind, or just want to talk about learning design — I'd love to hear from you.
          </p>

          <div className="space-y-6">
            <a
              href="mailto:hello@christianbutcher.com"
              className="flex items-center gap-5 p-6 rounded-2xl border border-border bg-card hover:border-primary hover:bg-muted transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-colors">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="font-sans font-semibold text-foreground">Send an email</p>
                <p className="text-muted-foreground text-sm font-sans mt-0.5">hello@christianbutcher.com</p>
              </div>
            </a>

            <a
              href="#"
              className="flex items-center gap-5 p-6 rounded-2xl border border-border bg-card hover:border-primary hover:bg-muted transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-colors">
                <Linkedin className="h-5 w-5" />
              </div>
              <div>
                <p className="font-sans font-semibold text-foreground">Connect on LinkedIn</p>
                <p className="text-muted-foreground text-sm font-sans mt-0.5">Link coming soon</p>
              </div>
            </a>

            <a
              href="#"
              className="flex items-center gap-5 p-6 rounded-2xl border border-border bg-card hover:border-primary hover:bg-muted transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-colors">
                <Twitter className="h-5 w-5" />
              </div>
              <div>
                <p className="font-sans font-semibold text-foreground">Find me on X / Twitter</p>
                <p className="text-muted-foreground text-sm font-sans mt-0.5">Link coming soon</p>
              </div>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
