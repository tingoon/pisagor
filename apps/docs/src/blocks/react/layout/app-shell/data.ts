import type { Icon } from "@phosphor-icons/react";
import {
  BookOpenIcon,
  ChartBarIcon,
  FolderIcon,
  GearIcon,
  HouseIcon,
  LifebuoyIcon,
  PaperPlaneTiltIcon,
  UsersIcon,
} from "@phosphor-icons/react";

export interface NavLink {
  href: string;
  title: string;
}

export interface NavItem extends NavLink {
  icon: Icon;
  badge?: string;
  isActive?: boolean;
  items?: NavLink[];
}

export const user = {
  email: "aras@acme.dev",
  initials: "AE",
  name: "Aras Ekinci",
};

export const workspaces = [
  { id: "acme", initials: "AC", name: "Acme Inc", plan: "Enterprise" },
  { id: "globex", initials: "GL", name: "Globex", plan: "Startup" },
  { id: "initech", initials: "IN", name: "Initech", plan: "Free" },
];

export const mainNav: NavItem[] = [
  { href: "#dashboard", icon: HouseIcon, isActive: true, title: "Dashboard" },
  {
    href: "#projects",
    icon: FolderIcon,
    items: [
      { href: "#projects-active", title: "Active" },
      { href: "#projects-archived", title: "Archived" },
      { href: "#projects-templates", title: "Templates" },
    ],
    title: "Projects",
  },
  {
    href: "#analytics",
    icon: ChartBarIcon,
    items: [
      { href: "#analytics-overview", title: "Overview" },
      { href: "#analytics-reports", title: "Reports" },
    ],
    title: "Analytics",
  },
  { badge: "3", href: "#team", icon: UsersIcon, title: "Team" },
  {
    href: "#docs",
    icon: BookOpenIcon,
    items: [
      { href: "#docs-guides", title: "Guides" },
      { href: "#docs-api", title: "API reference" },
    ],
    title: "Documentation",
  },
];

export const secondaryNav: NavItem[] = [
  { href: "#settings", icon: GearIcon, title: "Settings" },
  { href: "#support", icon: LifebuoyIcon, title: "Support" },
  { href: "#feedback", icon: PaperPlaneTiltIcon, title: "Feedback" },
];

export const projects = [
  { id: "web", name: "Website redesign", progress: 72 },
  { id: "mobile", name: "Mobile app", progress: 45 },
  { id: "billing", name: "Billing migration", progress: 18 },
];

export const notifications = [
  {
    id: "n1",
    initials: "JD",
    text: "Jane Doe commented on Website redesign",
    time: "2m ago",
  },
  {
    id: "n2",
    initials: "MK",
    text: "Mert Kaya invited you to Mobile app",
    time: "1h ago",
  },
  {
    id: "n3",
    initials: "SL",
    text: "Billing migration moved to review",
    time: "Yesterday",
  },
];

export const members = [
  { id: "jane", initials: "JD", name: "Jane Doe", status: "online" },
  { id: "mert", initials: "MK", name: "Mert Kaya", status: "away" },
  { id: "sara", initials: "SL", name: "Sara Lin", status: "offline" },
] as const;
