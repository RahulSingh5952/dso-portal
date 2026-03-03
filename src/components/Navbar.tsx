"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  const NAV_ITEMS = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ] as const;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      setHasMounted(true);
    });
    return () => window.cancelAnimationFrame(id);
  }, []);

  const headerBase =
    "sticky top-0 z-50 w-full border-b border-white/10 transition-all duration-300";
  const headerBg = isScrolled
    ? "bg-black/60 backdrop-blur-lg shadow-[0_6px_18px_rgba(15,23,42,0.55)]"
    : "bg-black/40 backdrop-blur-md";
  const headerAnim = hasMounted
    ? "opacity-100 translate-y-0"
    : "opacity-0 -translate-y-2";

  return (
    <header className={`${headerBase} ${headerBg} ${headerAnim}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6 lg:px-8">
        {/* Left: Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
            <span className="text-[0.7rem] font-extrabold leading-none tracking-tight">
              <span className="text-[#f97316]">D</span>
              <span className="text-black">SO</span>
            </span>
          </div>
          <span className="hidden text-base font-semibold tracking-tight text-slate-100 sm:inline sm:text-lg">
            <span className="text-[#f97316]">D</span>
            <span>epartment of </span>
            <span className="text-[#f97316]">S</span>
            <span>tudent </span>
            <span className="text-[#f97316]">O</span>
            <span>rganisation</span>
          </span>
        </Link>

        {/* Center: Search (desktop / tablet) */}
        <div className="hidden flex-1 items-center justify-center lg:flex">
          <div className="group flex w-full max-w-xl items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white shadow-sm backdrop-blur transition-all duration-300 focus-within:border-violet-400/60 focus-within:bg-white/10 focus-within:shadow-[0_0_0_1px_rgba(129,140,248,0.55)] focus-within:ring-2 focus-within:ring-violet-500/40 focus-within:scale-[1.02]">
            <span className="text-slate-400 transition-colors group-focus-within:text-violet-300">
              <SearchIcon />
            </span>
            <input
              type="search"
              placeholder="Search your organisation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-sm text-white placeholder-slate-400 outline-none"
            />
          </div>
        </div>

        {/* Right: Nav links + Get Started (desktop) */}
        <div
          className={`hidden items-center gap-6 text-sm font-medium text-slate-200 transition-opacity duration-500 ${
            hasMounted ? "opacity-100" : "opacity-0"
          } lg:flex`}
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative inline-flex items-center text-sm font-medium text-slate-200 transition-colors duration-200 hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-violet-400 after:to-blue-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/join"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-violet-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition-transform transition-shadow duration-200 hover:scale-[1.05] hover:shadow-[0_0_18px_rgba(129,140,248,0.65)]"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile: Hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-300 transition-colors hover:bg-white/5 hover:text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-black/80 px-4 py-4 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-4">
            <div className="mt-1">
              <div className="group flex w-full items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white shadow-sm backdrop-blur transition-all duration-300 focus-within:border-violet-400/60 focus-within:bg-white/10 focus-within:shadow-[0_0_0_1px_rgba(129,140,248,0.55)] focus-within:ring-2 focus-within:ring-violet-500/40">
                <span className="text-slate-400 transition-colors group-focus-within:text-violet-300">
                  <SearchIcon />
                </span>
                <input
                  type="search"
                  placeholder="Search your organisation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent text-sm text-white placeholder-slate-400 outline-none"
                />
              </div>
            </div>

            {NAV_ITEMS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-3 pt-2">
              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="flex-1 rounded-lg border border-white/20 py-2.5 text-center text-sm font-medium text-white"
              >
                Login
              </Link>
              <Link
                href="/join"
                onClick={() => setMobileOpen(false)}
                className="flex-1 rounded-full bg-gradient-to-r from-violet-500 to-blue-600 py-2.5 text-center text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition-transform duration-200 hover:scale-[1.03]"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function SearchIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
