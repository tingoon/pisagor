<script lang="ts">
  import { useAppShell } from "@pisagor/svelte";
  import {
    GearIcon,
    HouseIcon,
    MagnifyingGlassIcon,
    SquaresFourIcon,
    UsersIcon,
  } from "phosphor-svelte";
  import { standardAppShellBlock } from "#/styles/recipes/app-shell";

  const styles = standardAppShellBlock();

  const RAIL_ITEMS = [
    { icon: HouseIcon, id: "home", label: "Home" },
    { icon: SquaresFourIcon, id: "projects", label: "Projects" },
    { icon: UsersIcon, id: "team", label: "Team" },
    { icon: MagnifyingGlassIcon, id: "search", label: "Search" },
    { icon: GearIcon, id: "settings", label: "Settings" },
  ] as const;

  const { railStates } = useAppShell();
  const activeRailId = $derived(railStates.start?.activeRailId);
  const activeItem = $derived(
    RAIL_ITEMS.find((item) => item.id === activeRailId),
  );
</script>

<h2 class={styles.railTitle()}>
  {activeItem?.label ?? "Navigation"}
</h2>
