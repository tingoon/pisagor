<script lang="ts">
  import {
    PasswordInput as PasswordInputPrimitive,
    type PasswordInputVisibilityTriggerProps,
  } from "@ark-ui/svelte/password-input";
  import { inputGroupButtonRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import EyeIcon from "phosphor-svelte/lib/EyeIcon";
  import EyeSlashIcon from "phosphor-svelte/lib/EyeSlashIcon";
  import InputGroupAddon from "../input-group/input-group-addon.svelte";
  import { useMessageResolver } from "../provider/context";

  const t = useMessageResolver();

  let {
    children,
    class: className,
    ...rest
  }: PasswordInputVisibilityTriggerProps = $props();
</script>

<InputGroupAddon align="inline-end">
  <PasswordInputPrimitive.VisibilityTrigger
    aria-label={t("passwordInput.togglePasswordVisibility")}
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
