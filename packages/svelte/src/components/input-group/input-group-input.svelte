<script lang="ts">
import { inputGroupControlRecipe } from "@pisagor/recipes/input-group";
import { cn } from "@pisagor/utils";
import Input from "../input/input.svelte";

type Props = import("svelte").ComponentProps<typeof Input>;

let { class: className, classNames, ...rest }: Props = $props();
</script>

<Input
  {...rest}
  class={inputGroupControlRecipe({ class: cn(className) })}
  classNames={{
  ...classNames,
  clearableRoot: cn(inputGroupControlRecipe(), classNames?.clearableRoot),
}}
/>
