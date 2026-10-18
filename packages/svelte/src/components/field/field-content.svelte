<script lang="ts">
  import { cn } from "@pisagor/utils";
  import type { Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { useFieldSlots } from "./field.context";

  type Props = HTMLAttributes<HTMLDivElement> & {
    children?: Snippet;
  };

  let { class: className, children, ...rest }: Props = $props();
  const slots = useFieldSlots();
</script>

<div
  {...rest}
  class={slots.content({ class: cn(className) })}
  data-part="content"
  data-scope="field"
>
  {@render children?.()}
</div>
