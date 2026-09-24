<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { dropdownMenuRecipe } from "@pisagor/recipes/dropdown-menu";
import { cn } from "@pisagor/utils";
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import { useDropdownMenu } from "./dropdown-menu.context";

type Props = Omit<HTMLAttributes<HTMLSpanElement>, "class"> & {
  children?: Snippet;
  class?: string | undefined;
};

let { class: className, children, ...rest }: Props = $props();
const context = useDropdownMenu();
const slots = $derived(context?.slots ?? dropdownMenuRecipe());
</script>

<Ark
  as="span"
  {...rest}
  class={slots.shortcut({ class: cn(className) })}
  data-part="shortcut"
  data-scope="dropdown-menu"
>
  {@render children?.()}
</Ark>
