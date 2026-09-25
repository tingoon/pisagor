<script lang="ts">
import { inputGroupTextareaControlRecipe } from "@pisagor/recipes/input-group";
import { cn } from "@pisagor/utils";
import Textarea from "../textarea/textarea.svelte";

type Props = import("svelte").ComponentProps<typeof Textarea>;

let { classNames, ...rest }: Props = $props();
</script>

<Textarea
  {...rest}
  classNames={{
  ...classNames,
  clearableRoot: cn(inputGroupTextareaControlRecipe(), classNames?.clearableRoot),
  rootLayout: cn(inputGroupTextareaControlRecipe(), classNames?.rootLayout),
}}
/>
