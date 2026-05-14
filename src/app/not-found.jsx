import Link from "next/link";

export const metadata = {
  title: "Page not found — Avinh Huynh",
};

export default function NotFound() {
  return (
    <main className="min-h-[100svh] flex items-center justify-center bg-gradient-to-b from-[hsl(28_90%_92%)] via-[hsl(30_75%_94%)] to-[hsl(30_60%_97%)] px-6">
      <div className="max-w-md text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
          404
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-4">
          Page not found.
        </h1>
        <p className="text-base text-foreground/75 leading-relaxed mb-8">
          Either you mistyped, I never built this page, or I took it down. Try heading back home.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-sm hover:shadow-md"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
