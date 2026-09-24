<script lang="ts">
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { useAppShell } from "./app-shell.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class" | "style"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
  style?: string | undefined;
};

let { class: className, style, children, ...rest }: Props = $props();
const ctx = useAppShell();
</script>

<div
  {...rest}
  class={ctx.slots.main({ class: cn(className) })}
  data-part="main"
  data-scope="app-shell"
  style={`grid-area: main; ${style ?? ""}`}
>
  {@render children?.()}
</div>
