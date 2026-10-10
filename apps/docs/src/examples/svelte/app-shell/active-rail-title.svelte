<script lang="ts">
import { useAppShell } from "@pisagor/svelte";
import GearIcon from "phosphor-svelte/lib/GearIcon";
import HouseIcon from "phosphor-svelte/lib/HouseIcon";
import MagnifyingGlassIcon from "phosphor-svelte/lib/MagnifyingGlassIcon";
import SquaresFourIcon from "phosphor-svelte/lib/SquaresFourIcon";
import UsersIcon from "phosphor-svelte/lib/UsersIcon";
import { standardAppShellBlock } from "#/recipes/blocks/app-shell";

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
