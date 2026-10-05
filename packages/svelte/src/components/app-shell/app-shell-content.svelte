<script lang="ts">
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { useAppShell } from "./app-shell.context";

type Props = HTMLAttributes<HTMLElement> & {
  children?: import("svelte").Snippet;
};

let { class: className, children, ...rest }: Props = $props();
const ctx = useAppShell();
</script>

<main
  {...rest}
  class={ctx.slots.content({ class: cn(className) })}
  data-part="content"
  data-scope="app-shell"
>
  {@render children?.()}
</main>
