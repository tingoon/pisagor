<script lang="ts">
import type { ComponentProps, Snippet } from "svelte";
import Button from "../button/button.svelte";
import Swap from "../swap/swap.svelte";
import type { AppShellPlacement } from "./app-shell.context";
import { useAppShell } from "./app-shell.context";

type Props = Omit<ComponentProps<typeof Button>, "children" | "size" | "variant"> & {
  "aria-label"?: string | undefined | null;
  children?: Snippet;
  defaultOff: Snippet;
  defaultOn: Snippet;
  off?: Snippet;
  on?: Snippet;
  open: boolean;
  placement: AppShellPlacement;
  toggle: () => void;
  size?: ComponentProps<typeof Button>["size"];
  variant?: ComponentProps<typeof Button>["variant"];
};

let {
  placement,
  open,
  toggle,
  defaultOff,
  defaultOn,
  off: offContent,
  on: onContent,
  children,
  class: className,
  onclick,
  "aria-label": ariaLabel,
  size = "icon-md",
  variant = "ghost",
  ...rest
}: Props = $props();

const ctx = useAppShell();

function handleClick(event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) {
  onclick?.(event);
  toggle();
}
</script>

<Button
  {...rest}
  aria-label={ariaLabel ?? `Toggle ${placement} region`}
  aria-pressed={open}
  class={ctx.slots.inline({ class: className })}
  data-placement={placement}
  data-scope="app-shell"
  data-state={open ? "open" : "closed"}
  onclick={handleClick}
  {size}
  {variant}
>
  {#if children}
    {@render children()}
  {:else}
    <Swap swap={open}>
      {#snippet on()}
        {#if onContent}
          {@render onContent()}
        {:else}
          {@render defaultOn()}
        {/if}
      {/snippet}
      {#snippet off()}
        {#if offContent}
          {@render offContent()}
        {:else}
          {@render defaultOff()}
        {/if}
      {/snippet}
    </Swap>
  {/if}
</Button>
