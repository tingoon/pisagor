<script lang="ts">
  import {
    PasswordInput as PasswordInputPrimitive,
    type PasswordInputInputProps,
    type PasswordInputRootProps as PasswordInputRootPrimitiveProps,
  } from "@ark-ui/svelte";
  import type { PasswordInputRootContract } from "@pisagor/props";
  import {
    inputGroupButtonRecipe,
    inputGroupControlRecipe,
    passwordInputRecipe,
  } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { EyeIcon, EyeSlashIcon, XIcon } from "phosphor-svelte";
  import InputGroupAddon from "../input-group/input-group-addon.svelte";
  import InputGroupButton from "../input-group/input-group-button.svelte";
  import InputGroupRoot from "../input-group/input-group-root.svelte";
  import { useLocale } from "../provider/context";

  const { m } = useLocale();

  type PasswordInputRootProps = Pick<
    PasswordInputRootPrimitiveProps,
    "defaultVisible" | "invalid" | "onVisibilityChange" | "visible"
  >;

  type Props = PasswordInputRootProps &
    Omit<PasswordInputInputProps, "size" | "children"> &
    PasswordInputRootContract & {
      clearable?: boolean;
      disabled?: boolean | null;
      onValueChange?: (value: string) => void;
      placeholder?: string | null | undefined;
      readonly?: boolean | null;
      value?: string | undefined;
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
    oninput,
    onValueChange,
    onVisibilityChange,
    recipe = passwordInputRecipe,
    class: className,
    ...inputProps
  }: Props = $props();

  const slots = $derived(recipe());
  const canClear = $derived(
    clearable && !disabled && !readonly && String(value ?? "").length > 0,
  );

  function handleInput(event: Event & { currentTarget: HTMLInputElement }) {
    const next = event.currentTarget.value;
    value = next;
    onValueChange?.(next);
    oninput?.(event as never);
  }

  function handleClear() {
    value = "";
    onValueChange?.("");
  }
</script>

<PasswordInputPrimitive.Root
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
        {...inputProps}
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
            aria-label={m("passwordInput.clear")}
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
          aria-label={m("passwordInput.togglePasswordVisibility")}
          class={inputGroupButtonRecipe({ size: "icon-xs" })}
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
