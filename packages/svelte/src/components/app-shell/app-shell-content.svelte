<script lang="ts">
import type { HTMLAttributes } from "svelte/elements";
import { useAppShell } from "./app-shell.context";

type Props = Omit<HTMLAttributes<HTMLElement>, "class"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
};

let { class: className, children, ...rest }: Props = $props();
const ctx = useAppShell();
</script>

<main
  {...rest}
  class={ctx.slots.content({ class: className })}
  data-part="content"
  data-scope="app-shell"
>
  {@render children?.()}
</main>
