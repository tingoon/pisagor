<script lang="ts">
import { useHotkey } from "@ark-ui/svelte/hotkeys";
import { actionBarRecipe } from "@pisagor/recipes/action-bar";
import { buttonRecipe } from "@pisagor/recipes/button";
import { cn } from "@pisagor/utils";
import type { Snippet } from "svelte";
import { setActionBarContext } from "./action-bar.context";
import ActionBarBody from "./action-bar-body.svelte";
import ActionBarClose from "./action-bar-close.svelte";
import ActionBarContent from "./action-bar-content.svelte";
import ActionBarSeparator from "./action-bar-separator.svelte";
import ActionBarValue from "./action-bar-value.svelte";

type ActionItem = {
  disabled?: boolean;
  label: string;
  onClick: () => void;
};

type Props = {
  actions?: ActionItem[];
  children?: Snippet;
  closeOnEscape?: boolean;
  count?: number;
  defaultOpen?: boolean;
  lazyMount?: boolean;
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
  positioning?: { gutter?: string; placement?: "bottom" | "bottom-start" | "bottom-end" };
  recipe?: typeof actionBarRecipe;
  unmountOnExit?: boolean;
};

let {
  closeOnEscape = true,
  count,
  defaultOpen = false,
  lazyMount,
  open = $bindable(defaultOpen),
  positioning: positioningProp,
  unmountOnExit,
  actions,
  children,
  onOpenChange,
  recipe = actionBarRecipe,
}: Props = $props();

const defaultPositioning = { gutter: "16px", placement: "bottom" as const };
const positioning = $derived({ ...defaultPositioning, ...positioningProp });
const slots = $derived(recipe({ placement: positioning.placement }));

function handleClose() {
  open = false;
  onOpenChange?.(false);
}
function handleOpen() {
  open = true;
  onOpenChange?.(true);
}

useHotkey(() => ({
  action: (event: KeyboardEvent) => {
    if (event.defaultPrevented) return;
    handleClose();
  },
  enabled: Boolean(open && closeOnEscape),
  hotkey: "Escape",
}));

setActionBarContext({
  get isOpen() {
    return open;
  },
  get lazyMount() {
    return lazyMount;
  },
  get onClose() {
    return handleClose;
  },
  get onOpen() {
    return handleOpen;
  },
  get positioning() {
    return positioning;
  },
  get slots() {
    return slots;
  },
  get unmountOnExit() {
    return unmountOnExit;
  },
});

const hasPreset = $derived(count !== undefined || (actions && actions.length > 0));
</script>

{@render children?.()}
{#if hasPreset}
  <ActionBarContent>
    {#if count !== undefined}
      <ActionBarValue {count} />
    {/if}
    {#if count !== undefined && actions}
      <ActionBarSeparator />
    {/if}
    {#if actions}
      <ActionBarBody>
        {#each actions as action (action.label)}
          <button
            class={cn(buttonRecipe({ size: "sm", variant: "ghost" }).base())}
            disabled={action.disabled}
            onclick={action.onClick}
            type="button"
          >
            {action.label}
          </button>
        {/each}
      </ActionBarBody>
    {/if}
    {#if actions}
      <ActionBarSeparator />
    {/if}
    <ActionBarClose>✕</ActionBarClose>
  </ActionBarContent>
{/if}
