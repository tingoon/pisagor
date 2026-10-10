<script lang="ts">
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { useRating } from "./rating.context";

let {
  class: className,
  children,
  ...rest
}: HTMLAttributes<HTMLSpanElement> = $props();
const styles = useRating();
</script>

<span
  {...rest}
  class={styles.slots.indicator({ class: cn(className) })}
  data-part="item-indicator"
  data-scope="rating"
>
  {@render children?.()}
</span>
