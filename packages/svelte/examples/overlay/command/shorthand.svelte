<script lang="ts">
  import { Command } from "@pisagor/svelte";
  import { CalendarIcon, GearIcon, UserIcon } from "phosphor-svelte";

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

<Command {items} placeholder="Search…" />
