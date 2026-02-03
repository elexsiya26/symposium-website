import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-sm font-bold text-primary-foreground">T</span>
            </div>
            <span className="text-lg font-bold text-foreground">TechSymposium</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            <Link
              href="/"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Home
            </Link>
            <Link
              href="/register"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Register
            </Link>
            <Link
              href="/dashboard"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Dashboard
            </Link>
          </nav>

          <p className="text-sm text-muted-foreground">
            2026 TechSymposium. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
