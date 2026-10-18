<script lang="ts">
  import {
    PasswordInput as PasswordInputPrimitive,
    type PasswordInputVisibilityTriggerProps,
  } from "@ark-ui/svelte";
  import { inputGroupButtonRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { EyeIcon, EyeSlashIcon } from "phosphor-svelte";
  import InputGroupAddon from "../input-group/input-group-addon.svelte";
  import { useLocale } from "../provider/context";

  const { m } = useLocale();

  let {
    children,
    class: className,
    ...rest
  }: PasswordInputVisibilityTriggerProps = $props();
</script>

<InputGroupAddon align="inline-end">
  <PasswordInputPrimitive.VisibilityTrigger
    aria-label={m("passwordInput.togglePasswordVisibility")}
    {...rest}
    class={cn(inputGroupButtonRecipe({ size: "icon-xs" }), className)}
    type="button"
  >
    {#if children}
      {@render children()}
    {:else}
      <PasswordInputPrimitive.Indicator>
        {#snippet fallback()}
          <EyeSlashIcon />
        {/snippet}
        <EyeIcon />
      </PasswordInputPrimitive.Indicator>
    {/if}
  </PasswordInputPrimitive.VisibilityTrigger>
</InputGroupAddon>
