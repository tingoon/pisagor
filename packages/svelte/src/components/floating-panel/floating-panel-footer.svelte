<script lang="ts">
  import { Ark } from "@ark-ui/svelte";
  import { floatingPanelRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import type { HTMLAttributes } from "svelte/elements";
  import { useStyles } from "./floating-panel.context";

  let {
    children,
    class: className,
    ...rest
  }: HTMLAttributes<HTMLDivElement> = $props();
  const ctx = useStyles();
  const slots = $derived(ctx?.slots ?? floatingPanelRecipe());
</script>

<Ark
  as="div"
  {...rest}
  class={slots.footer({ class: cn(className) })}
  data-part="footer"
  data-scope="floating-panel"
>
  {@render children?.()}
</Ark>
