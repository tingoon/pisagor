<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { fileRecipe } from "@pisagor/recipes/file";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { setFileContext } from "./file.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> & {
  class?: string | undefined;
  recipe?: typeof fileRecipe;
};

let { children, recipe = fileRecipe, class: className, ...rest }: Props = $props();
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
  class={slots.base({ class: cn(className) })}
  data-part="root"
  data-scope="file"
>
  {@render children?.()}
</Ark>
