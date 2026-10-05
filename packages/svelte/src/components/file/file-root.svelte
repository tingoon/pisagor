<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { FileProps as BaseFileProps } from "@pisagor/props";
import { fileRecipe } from "@pisagor/recipes";
import type { HTMLAttributes } from "svelte/elements";
import { setFileContext } from "./file.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> & {
  class?: string | undefined;
} & BaseFileProps;

let {
  children,
  recipe = fileRecipe,
  class: className,
  ...rest
}: Props = $props();
const slots = $derived(recipe());
setFileContext({
  get slots() {
    return slots;
  },
});
</script>

<Ark
  as="div"
  {...rest}
  class={slots.base({ class: className })}
  data-part="root"
  data-scope="file"
>
  {@render children?.()}
</Ark>
