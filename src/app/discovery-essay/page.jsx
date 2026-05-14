"use client"

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function DiscoveryEssay() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container-custom py-5 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
          <span className="text-xs uppercase tracking-wider text-muted-foreground">
            Discovery Essay
          </span>
        </div>
      </header>

      <main className="container-custom py-12 md:py-16 max-w-3xl">
        {/* Title block */}
        <section className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
            {/* TODO: Essay title */}
            Discovery Essay
          </h1>
          <p className="text-sm text-muted-foreground">
            {/* TODO: Course / Professor / Date — e.g. ENG 214 · Prof. Smith · Spring 2026 */}
            Course &middot; Professor &middot; Date
          </p>
        </section>

        {/* About me */}
        <section className="mb-14 grid md:grid-cols-[160px,1fr] gap-6 md:gap-8 items-start">
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-1 ring-border">
            <Image
              src="/profile.jpg"
              alt="Avinh Huynh"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              About me
            </h2>
            <p className="text-base leading-relaxed text-foreground/85">
              {/* TODO: Replace with your about-me paragraph. A few sentences on who you are,
                  where you're from, what you study, and what brought you to this class. */}
              I&apos;m Avinh Huynh &mdash; [add a couple of sentences here about your
              background, your major, where you grew up, and any context about who you
              are that frames the essay below].
            </p>
          </div>
        </section>

        {/* Essay */}
        <section className="mb-14">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
            Essay
          </h2>
          <article className="prose-essay">
            {/* TODO: Paste your essay below. Each <p> is one paragraph. Add or remove
                <p> tags as needed. */}
            <p>
              [First paragraph of your essay goes here.]
            </p>
            <p>
              [Second paragraph &mdash; replace with your content.]
            </p>
            <p>
              [Third paragraph &mdash; replace with your content.]
            </p>
            <p>
              [Continue adding paragraphs as needed.]
            </p>
          </article>
        </section>

        {/* Reflection */}
        <section className="mb-12 pt-10 border-t border-border">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
            Reflection
          </h2>
          <article className="prose-essay">
            {/* TODO: Your reflection on the class. How your thinking changed, what
                you took away, what surprised you. */}
            <p>
              [Opening of your reflection &mdash; what this class meant to you or how
              your thinking changed over the semester.]
            </p>
            <p>
              [Continue with specific moments, readings, or discussions that stood out.]
            </p>
            <p>
              [Closing thoughts &mdash; what you&apos;re taking with you.]
            </p>
          </article>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="container-custom py-6 text-xs text-muted-foreground">
          Avinh Huynh
        </div>
      </footer>
    </div>
  );
}
