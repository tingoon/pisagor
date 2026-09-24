<script lang="ts">
import type { PasswordInputRootProps } from "@ark-ui/svelte/password-input";
import { PasswordInput as PasswordInputPrimitive } from "@ark-ui/svelte/password-input";
import { inputGroupButtonRecipe, inputGroupControlRecipe } from "@pisagor/recipes/input-group";
import { passwordInputRecipe } from "@pisagor/recipes/password-input";
import { cn } from "@pisagor/utils";
import EyeIcon from "phosphor-svelte/lib/EyeIcon";
import EyeSlashIcon from "phosphor-svelte/lib/EyeSlashIcon";
import XIcon from "phosphor-svelte/lib/XIcon";
import InputGroupAddon from "../input-group/input-group-addon.svelte";
import InputGroupButton from "../input-group/input-group-button.svelte";
import InputGroupRoot from "../input-group/input-group-root.svelte";

type FormControlVariant = "primary" | "secondary";

type Props = Omit<PasswordInputRootProps, "class" | "children"> & {
  clearable?: boolean;
  class?: string | undefined;
  disabled?: boolean | null;
  onValueChange?: (value: string) => void;
  placeholder?: string | null | undefined;
  readonly?: boolean | null;
  recipe?: typeof passwordInputRecipe;
  size?: "sm" | "md" | "lg";
  value?: string | undefined;
  variant?: FormControlVariant;
};

let {
  size = "md",
  variant,
  clearable = false,
  defaultVisible,
  disabled,
  invalid,
  readonly,
  value = $bindable<string | undefined>(undefined),
  visible = $bindable<boolean | undefined>(undefined),
  placeholder,
  onValueChange,
  onVisibilityChange,
  recipe = passwordInputRecipe,
  class: className,
  ...rest
}: Props = $props();

const slots = $derived(recipe());
const canClear = $derived(clearable && !disabled && !readonly && String(value ?? "").length > 0);

function handleInput(event: Event & { currentTarget: HTMLInputElement }) {
  value = event.currentTarget.value;
  onValueChange?.(event.currentTarget.value);
}

function handleClear() {
  value = "";
  onValueChange?.("");
}
</script>

<PasswordInputPrimitive.Root
  {...rest}
  class={slots.base({ class: cn(className) })}
  data-size={size}
  {defaultVisible}
  {invalid}
  {onVisibilityChange}
  bind:visible
>
  <PasswordInputPrimitive.Control class="contents">
    <InputGroupRoot
      class={slots.control()}
      data-clearable={clearable || undefined}
      {size}
      {variant}
    >
      <PasswordInputPrimitive.Input
        class={inputGroupControlRecipe()}
        {disabled}
        oninput={handleInput}
        {placeholder}
        {readonly}
        bind:value
      />

      {#if canClear}
        <InputGroupAddon align="inline-end" class={slots.clearAddon()}>
          <InputGroupButton
            aria-label="Clear"
            data-part="clear-trigger"
            data-scope="password-input"
            onclick={handleClear}
            size="icon-xs"
            type="button"
            variant="ghost"
          >
            <XIcon />
          </InputGroupButton>
        </InputGroupAddon>
      {/if}

      <InputGroupAddon align="inline-end">
        <PasswordInputPrimitive.VisibilityTrigger
          aria-label="Toggle password visibility"
          class={cn(inputGroupButtonRecipe({ size: "icon-xs" }))}
          type="button"
        >
          <PasswordInputPrimitive.Indicator>
            {#snippet fallback()}
              <EyeSlashIcon />
            {/snippet}
            <EyeIcon />
          </PasswordInputPrimitive.Indicator>
        </PasswordInputPrimitive.VisibilityTrigger>
      </InputGroupAddon>
    </InputGroupRoot>
  </PasswordInputPrimitive.Control>
</PasswordInputPrimitive.Root>
