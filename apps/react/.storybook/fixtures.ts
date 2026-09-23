export const cityOptions = [
  { label: "Amsterdam", value: "amsterdam" },
  { label: "Berlin", value: "berlin" },
  { label: "Istanbul", value: "istanbul" },
  { label: "London", value: "london" },
  { label: "New York", value: "new-york" },
  { label: "Paris", value: "paris" },
];

export const countryOptions = [
  { label: "Germany", value: "de" },
  { label: "Netherlands", value: "nl" },
  { label: "Turkey", value: "tr" },
  { label: "United Kingdom", value: "gb" },
  { label: "United States", value: "us" },
];

export const planOptions = [
  {
    description: "For individuals getting started.",
    label: "Starter",
    value: "starter",
  },
  {
    description: "For growing teams that need more control.",
    label: "Pro",
    value: "pro",
  },
  {
    description: "For organizations with advanced needs.",
    label: "Enterprise",
    value: "enterprise",
  },
];

export const marqueeItems = ["Pisagor", "Design", "Systems", "React", "Vue", "Astro"];

export const segmentItems = [
  { label: "Profile", value: "profile" },
  { label: "Billing", value: "billing" },
  { label: "Team", value: "team" },
];

export function profileTabs() {
  return [
    { content: "Make changes to your account here.", label: "Account", value: "tab-1" },
    { content: "Change your password here.", label: "Password", value: "tab-2" },
    { content: "Update your notification preferences.", label: "Notifications", value: "tab-3" },
  ];
}
