import { CalendarIcon, GearIcon, UserIcon } from "@phosphor-icons/react";
import { Command } from "@pisagor/react";

const items = [
  {
    group: "Suggestions",
    icon: <CalendarIcon />,
    label: "Calendar",
    value: "calendar",
  },
  {
    group: "Settings",
    icon: <UserIcon />,
    label: "Profile",
    shortcut: "⌘P",
    value: "profile",
  },
  {
    group: "Settings",
    icon: <GearIcon />,
    label: "Settings",
    shortcut: "⌘S",
    value: "settings",
  },
];

export function Shorthand() {
  return <Command.Shorthand items={items} placeholder="Search…" />;
}
