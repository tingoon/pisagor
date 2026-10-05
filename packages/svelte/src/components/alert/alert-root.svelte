<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { AlertProps as BaseAlertProps } from "@pisagor/props";
import { alertRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { setAlertContext } from "./alert.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "title"> & {
  children?: import("svelte").Snippet;
} & BaseAlertProps;

let {
  variant,
  children,
  recipe = alertRecipe,
  class: className,
  ...rest
}: Props = $props();

const slots = $derived(recipe({ variant }));

setAlertContext({
  get slots() {
    return slots;
  },
});
</script>

<Ark
  as="div"
  {...rest}
  class={slots.base({ class: cn(className) })}
  data-part="root"
  data-scope="alert"
>
  {@render children?.()}
</Ark>
