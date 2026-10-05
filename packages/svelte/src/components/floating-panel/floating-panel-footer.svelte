<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { floatingPanelRecipe } from "@pisagor/recipes";
import type { HTMLAttributes } from "svelte/elements";
import { useFloatingPanel } from "./floating-panel.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> & {
  class?: string | undefined;
};
let { children, class: className, ...rest }: Props = $props();
const ctx = useFloatingPanel();
const slots = $derived(ctx?.slots ?? floatingPanelRecipe());
</script>

<Ark
  as="div"
  {...rest}
  class={slots.footer({ class: className })}
  data-part="footer"
  data-scope="floating-panel"
>
  {@render children?.()}
</Ark>
