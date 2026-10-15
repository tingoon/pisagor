<script lang="ts">
import { Command } from "@pisagor/svelte";
import CalendarIcon from "phosphor-svelte/lib/CalendarIcon";
import GearIcon from "phosphor-svelte/lib/GearIcon";
import UserIcon from "phosphor-svelte/lib/UserIcon";

const items = [
  {
    group: "Suggestions",
    icon: CalendarIcon,
    label: "Calendar",
    value: "calendar",
  },
  {
    group: "Settings",
    icon: UserIcon,
    label: "Profile",
    shortcut: "⌘P",
    value: "profile",
  },
  {
    group: "Settings",
    icon: GearIcon,
    label: "Settings",
    shortcut: "⌘S",
    value: "settings",
  },
];
</script>

<Command.Shorthand {items} placeholder="Search…" />
