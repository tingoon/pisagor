<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { floatingPanelRecipe } from "@pisagor/recipes/floating-panel";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { useFloatingPanel } from "./floating-panel.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> & { class?: string | undefined };
let { children, class: className, ...rest }: Props = $props();
const ctx = useFloatingPanel();
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
