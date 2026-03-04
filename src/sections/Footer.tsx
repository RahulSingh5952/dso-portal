import Link from "next/link";

const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/join", label: "Join" },
];

const SOCIALS = [
  { label: "Twitter", href: "https://twitter.com/", icon: XIcon },
  { label: "Instagram", href: "https://instagram.com/", icon: InstagramIcon },
  { label: "YouTube", href: "https://youtube.com/", icon: YouTubeIcon },
  { label: "LinkedIn", href: "https://linkedin.com/", icon: LinkedInIcon },
];

export default function Footer() {
  return (
    <footer className="relative mt-16 border-t border-white/10 bg-gradient-to-b from-black via-indigo-950 to-slate-950">
      {/* Subtle gradient divider */}
      <div className="pointer-events-none absolute inset-x-0 -top-px">
        <div className="mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-indigo-900/40 to-transparent" />
      </div>

      {/* Gradient blobs */}
      <div className="footer-blob footer-blob--left -left-32 top-0 h-72 w-72 sm:-left-24 sm:top-4 sm:h-80 sm:w-80" />
      <div className="footer-blob footer-blob--right -bottom-24 right-[-4rem] h-80 w-80 sm:-bottom-16 sm:right-0 sm:h-96 sm:w-96" />

      <div className="relative footer-fade-up">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Branding + tagline */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/95 shadow-sm shadow-indigo-500/30">
                  <span className="text-[0.7rem] font-extrabold leading-none tracking-tight">
                    <span className="text-[#f97316]">D</span>
                    <span className="text-black">SO</span>
                  </span>
                </div>
                <p className="text-base font-semibold text-slate-100 sm:text-lg">
                  <span className="text-[#f97316]">D</span>
                  <span>epartment of </span>
                  <span className="text-[#f97316]">S</span>
                  <span>tudent </span>
                  <span className="text-[#f97316]">O</span>
                  <span>rganisation</span>
                </p>
              </div>
              <p className="text-sm font-medium text-slate-300">
                Where campus energy comes alive.
              </p>
              <p className="text-sm text-slate-400">
                A vibrant home for music, sports, technology, cultural nights, and
                every student-led initiative in between.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-sm font-semibold text-white">Quick Links</h4>
              <ul className="mt-4 space-y-2.5">
                {QUICK_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center justify-between text-sm text-slate-300 transition-all duration-300 hover:text-white"
                    >
                      <span>{link.label}</span>
                      <span className="translate-x-1 opacity-0 text-base text-violet-300 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold text-white">Contact</h4>
              <ul className="mt-4 space-y-3 text-sm text-slate-400">
                <li className="flex items-center gap-3">
                  <MailIcon />
                  <a
                    href="mailto:dso@university.edu"
                    className="transition-colors hover:text-violet-300"
                  >
                    dso@university.edu
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <PhoneIcon />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-3">
                  <LocationIcon />
                  <span>Student Affairs Building</span>
                </li>
              </ul>
            </div>

            {/* Social links */}
            <div>
              <h4 className="text-sm font-semibold text-white">Follow Us</h4>
              <div className="mt-3 flex flex-wrap gap-3">
                {SOCIALS.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-sm font-medium text-slate-200 shadow-sm shadow-slate-900/40 backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-400/60 hover:bg-gradient-to-br hover:from-violet-500/20 hover:to-blue-500/20 hover:text-white hover:shadow-[0_0_18px_rgba(129,140,248,0.55)]"
                  >
                    <Icon />
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 border-t border-white/10 pt-8">
            <div className="mx-auto max-w-3xl text-center">
              <h3 className="text-base font-semibold text-slate-100 sm:text-lg">
                Ready to be part of the next big event?
              </h3>
              <div className="mt-4 flex justify-center">
                <Link
                  href="/events"
                  className="footer-cta-pulse inline-flex items-center rounded-full bg-gradient-to-r from-violet-500 to-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/40 transition-transform duration-200 hover:scale-[1.04]"
                >
                  Explore Events
                </Link>
              </div>
            </div>
            <p className="mt-6 text-center text-xs text-slate-500 sm:text-sm">
              © {new Date().getFullYear()} DSO Portal. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function MailIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-slate-400"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M5 7L11.2 11.2C11.68 11.54 12.32 11.54 12.8 11.2L19 7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-slate-400"
    >
      <path
        d="M6.5 4.5L8.5 4L10 7L8.5 8.5C9.2 10.6 10.9 12.3 13 13L14.5 11.5L17.5 13.5L17 15.5C16.9 16 16.6 16.4 16.2 16.7C15.8 17 15.3 17.2 14.8 17.2C11.3 17 8.1 14.8 6.3 11.7C5.3 10.1 4.8 8.3 4.8 6.6C4.8 6.1 5 5.6 5.3 5.2C5.6 4.8 6 4.6 6.5 4.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-slate-400"
    >
      <path
        d="M12 21C12 21 6 14.97 6 10.5C6 7.42 8.23858 5 12 5C15.7614 5 18 7.42 18 10.5C18 14.97 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="10.5"
        r="2.3"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}
function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" className="text-slate-300">
      <path
        d="M18 5H15.5L6 19H8.5L18 5Z"
        fill="currentColor"
      />
      <path
        d="M6 5H8.5L18 19H15.5L6 5Z"
        fill="currentColor"
      />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" className="text-slate-300">
      <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}
function YouTubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" className="text-slate-300">
      <rect x="3" y="7" width="18" height="10" rx="3" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="M10 9L15 12L10 15V9Z" fill="currentColor" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" className="text-slate-300">
      <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <rect x="7" y="10" width="2.5" height="7" fill="currentColor" />
      <circle cx="8.25" cy="7.5" r="1.2" fill="currentColor" />
      <path d="M12 10H14.8C16.4 10 17 11.1 17 12.5V17H14.5V13.4C14.5 12.7 14.2 12.2 13.4 12.2H12V17H9.5V10H12Z" fill="currentColor" />
    </svg>
  );
}
