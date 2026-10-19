<script lang="ts">
  import { cn } from "@pisagor/utils";
  import type { Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { useFieldSlots } from "./field.context";

  type Props = HTMLAttributes<HTMLParagraphElement> & {
    children?: Snippet;
  };

  let { class: className, children, ...rest }: Props = $props();
  const slots = useFieldSlots();
</script>

<p
  {...rest}
  class={slots.description({ class: cn(className) })}
  data-part="description"
  data-scope="field"
>
  {@render children?.()}
</p>
