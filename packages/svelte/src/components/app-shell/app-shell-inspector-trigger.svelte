<script lang="ts">
import ArrowsInLineHorizontalIcon from "phosphor-svelte/lib/ArrowsInLineHorizontalIcon";
import ArrowsOutLineHorizontalIcon from "phosphor-svelte/lib/ArrowsOutLineHorizontalIcon";
import type { ComponentProps, Snippet } from "svelte";
import type { AppShellPlacement } from "./app-shell.context";
import { useAppShell } from "./app-shell.context";
import AppShellSideTrigger from "./app-shell-side-trigger.svelte";

type Props = Omit<
  ComponentProps<typeof AppShellSideTrigger>,
  "defaultOff" | "defaultOn" | "open" | "placement" | "toggle"
> & {
  /**
   * Inspector side to toggle.
   * @defaultValue "end"
   */
  placement?: AppShellPlacement;
  children?: Snippet;
  off?: Snippet;
  on?: Snippet;
};

let { placement = "end", children, off, on, class: className, ...rest }: Props = $props();

const ctx = useAppShell();
const open = $derived(
  (() => {
    void ctx.regionRevision;
    return ctx.inspectorStates[placement]?.open ?? false;
  })(),
);
</script>

<AppShellSideTrigger
  {...rest}
  class={className}
  data-part="inspector-trigger"
  {off}
  {on}
  {open}
  {placement}
  toggle={() => {
  ctx.inspectorStates[placement]?.toggle();
}}
>
  {#snippet defaultOff()}
    <ArrowsOutLineHorizontalIcon />
  {/snippet}
  {#snippet defaultOn()}
    <ArrowsInLineHorizontalIcon />
  {/snippet}
  {#if children}
    {@render children()}
  {/if}
</AppShellSideTrigger>
