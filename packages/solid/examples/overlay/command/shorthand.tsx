import {
  CalendarIcon,
  GearIcon,
  UserIcon,
} from "@squidlab/phosphor-solid/icons";
import { Command } from "@pisagor/solid";

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
  return <Command items={items} placeholder="Search…" />;
}
