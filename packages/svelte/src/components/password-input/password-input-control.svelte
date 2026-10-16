<script lang="ts">
  import { PasswordInput as PasswordInputPrimitive } from "@ark-ui/svelte/password-input";
  import { passwordInputRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import type { ComponentProps } from "svelte";
  import InputGroupRoot from "../input-group/input-group-root.svelte";

  let {
    children,
    class: className,
    ...rest
  }: ComponentProps<typeof InputGroupRoot> = $props();
</script>

<PasswordInputPrimitive.Control class="contents">
  <InputGroupRoot
    {...rest}
    class={passwordInputRecipe().control({ class: cn(className) })}
  >
    {@render children?.()}
  </InputGroupRoot>
</PasswordInputPrimitive.Control>
