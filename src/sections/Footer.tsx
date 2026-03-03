import Link from "next/link";

const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/organizations", label: "Organizations" },
  { href: "/ranking", label: "Ranking" },
  { href: "/join", label: "Join" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-blue-600">
                <span className="text-xs font-bold text-white">DSO</span>
              </div>
              <p className="text-lg font-semibold text-white">DSO Portal</p>
            </div>
            <p className="mt-2 text-sm text-slate-500">
              Division of Student Organizations
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Quick Links</h4>
            <ul className="mt-3 space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 transition-colors hover:text-slate-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-500">
              <li>dso@university.edu</li>
              <li>+1 (555) 123-4567</li>
              <li>Student Affairs Building</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Follow Us</h4>
            <div className="mt-3 flex gap-4">
              <SocialPlaceholder name="Twitter" />
              <SocialPlaceholder name="LinkedIn" />
              <SocialPlaceholder name="Instagram" />
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-center text-sm text-slate-500">
            © {new Date().getFullYear()} DSO Portal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialPlaceholder({ name }: { name: string }) {
  return (
    <a
      href="#"
      className="text-sm text-slate-500 transition-colors hover:text-slate-300"
      aria-label={name}
    >
      {name}
    </a>
  );
}
