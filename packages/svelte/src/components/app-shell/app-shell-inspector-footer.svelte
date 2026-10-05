<script lang="ts">
import type { HTMLAttributes } from "svelte/elements";
import { useAppShell } from "./app-shell.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
};

let { class: className, children, ...rest }: Props = $props();
const ctx = useAppShell();
</script>

<div
  {...rest}
  class={ctx.slots.inspectorFooter({ class: className })}
  data-part="inspector-footer"
  data-scope="app-shell"
>
  {@render children?.()}
</div>
