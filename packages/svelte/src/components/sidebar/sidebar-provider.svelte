<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { useHotkey } from "@ark-ui/svelte/hotkeys";
import { sidebarRecipe } from "@pisagor/recipes/sidebar";
import { cn } from "@pisagor/utils";
import { onMount } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import {
  MOBILE_BREAKPOINT,
  SIDEBAR_STORAGE_KEY,
  SIDEBAR_WIDTH,
  SIDEBAR_WIDTH_ICON,
} from "./constants";
import { setSidebarContext } from "./sidebar.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class" | "style"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
  /**
   * The default open state of the sidebar.
   * @defaultValue true
   */
  defaultOpen?: boolean;
  /**
   * The open state of the sidebar.
   */
  open?: boolean;
  /**
   * Called when the open state of the sidebar changes.
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * Style recipe. Defaults to `sidebarRecipe` from `@pisagor/recipes/sidebar`.
   * @defaultValue sidebarRecipe
   */
  recipe?: typeof sidebarRecipe;
  style?: string | undefined;
};

let {
  defaultOpen = true,
  open = $bindable(defaultOpen),
  onOpenChange,
  recipe = sidebarRecipe,
  class: className,
  style,
  children,
  ...rest
}: Props = $props();

let isMobile = $state(false);
let openMobile = $state(false);

onMount(() => {
  const query = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
  const update = () => {
    isMobile = query.matches;
  };
  update();
  query.addEventListener("change", update);
  return () => query.removeEventListener("change", update);
});

const slots = $derived(recipe());
const sidebarState = $derived(open ? ("expanded" as const) : ("collapsed" as const));

function setOpen(value: boolean) {
  open = value;
  onOpenChange?.(value);
  if (typeof localStorage !== "undefined") {
    localStorage.setItem(SIDEBAR_STORAGE_KEY, String(value));
  }
}

function setOpenMobile(value: boolean) {
  openMobile = value;
}

function toggleSidebar() {
  if (isMobile) {
    openMobile = !openMobile;
  } else {
    setOpen(!open);
  }
}

useHotkey(() => ({
  action: () => {
    toggleSidebar();
  },
  hotkey: "mod+B",
}));

setSidebarContext({
  get isMobile() {
    return isMobile;
  },
  get open() {
    return open;
  },
  get openMobile() {
    return openMobile;
  },
  setOpen,
  setOpenMobile,
  get slots() {
    return slots;
  },
  get state() {
    return sidebarState;
  },
  toggleSidebar,
});

const wrapperStyle = $derived(
  [`--sidebar-width: ${SIDEBAR_WIDTH}`, `--sidebar-width-icon: ${SIDEBAR_WIDTH_ICON}`, style ?? ""]
    .filter(Boolean)
    .join("; "),
);
</script>

<Ark
  as="div"
  {...rest}
  class={slots.wrapper({ class: cn(className) })}
  data-part="wrapper"
  data-scope="sidebar"
  style={wrapperStyle}
>
  {@render children?.()}
</Ark>
