export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Organizations", href: "/organizations" },
  { label: "Events", href: "/events" },
  { label: "Ranking", href: "/ranking" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const STATS_TILES = [
  { href: "/organizations", value: "120+", label: "Organizations" },
  { href: "/events", value: "45+", label: "Events hosted" },
  { href: "/join", value: "8K+", label: "Student members" },
  { href: "/ranking", value: "Top 10", label: "Leaderboards" },
] as const;

export const FUTURE_FEATURES = [
  { id: "dl", title: "Duty Leave Automation", comingSoon: true },
  { id: "reports", title: "Reports & Analytics", comingSoon: true },
  { id: "calendar", title: "Unified Event Calendar", comingSoon: true },
  { id: "badges", title: "Participation Badges", comingSoon: true },
] as const;

export const FACULTY_MENTORS = [
  {
    id: "fm-1",
    name: "Dr. Ananya Rao",
    designation: "Professor • Student Affairs",
    description: "Advises cultural and community organizations.",
  },
  {
    id: "fm-2",
    name: "Dr. Vivek Sharma",
    designation: "Associate Professor • CSE",
    description: "Guides technical clubs and hackathon teams.",
  },
  {
    id: "fm-3",
    name: "Dr. Meera Nair",
    designation: "Assistant Professor • ECE",
    description: "Supports innovation, robotics, and maker groups.",
  },
  {
    id: "fm-4",
    name: "Dr. Arjun Patel",
    designation: "Professor • Management",
    description: "Mentors entrepreneurship and leadership initiatives.",
  },
  {
    id: "fm-5",
    name: "Dr. Sana Khan",
    designation: "Associate Professor • Humanities",
    description: "Advises literary, debate, and outreach societies.",
  },
] as const;