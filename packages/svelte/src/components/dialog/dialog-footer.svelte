<script lang="ts">
  import { cn } from "@pisagor/utils";
  import type { HTMLAttributes } from "svelte/elements";
  import { useDialog } from "./dialog.context";

  type Props = HTMLAttributes<HTMLDivElement> & {
    children?: import("svelte").Snippet;
  };

  let { children, class: className, ...rest }: Props = $props();
  const { slots } = useDialog();
</script>

<div
  {...rest}
  class={slots.footer({ class: cn(className) })}
  data-part="footer"
  data-scope="dialog"
>
  {@render children?.()}
</div>
