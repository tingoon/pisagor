<script lang="ts">
  import type {
    PasswordInputIndicatorProps,
    PasswordInputInputProps,
    PasswordInputRootProps as PasswordInputRootPrimitiveProps,
    PasswordInputVisibilityTriggerProps,
  } from "@ark-ui/svelte";
  import type {
    PasswordInputContract,
    PasswordInputRootContract,
  } from "@pisagor/contracts";
  import {
    inputGroupControlRecipe,
    passwordInputRecipe,
  } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { EyeIcon, EyeSlashIcon, XIcon } from "phosphor-svelte";
  import InputGroupAddon from "../input-group/input-group-addon.svelte";
  import InputGroupButton from "../input-group/input-group-button.svelte";
  import InputGroupRoot from "../input-group/input-group-root.svelte";
  import { useLocale } from "../provider/context";
  import PasswordInputControl from "./password-input-control.svelte";
  import PasswordInputIndicator from "./password-input-indicator.svelte";
  import PasswordInputInput from "./password-input-input.svelte";
  import PasswordInputRoot from "./password-input-root.svelte";
  import PasswordInputVisibilityTrigger from "./password-input-visibility-trigger.svelte";

  const { m } = useLocale();

  type PasswordInputRootProps = Pick<
    PasswordInputRootPrimitiveProps,
    "defaultVisible" | "invalid" | "onVisibilityChange" | "visible"
  >;

  type Props = PasswordInputRootProps &
    Omit<PasswordInputInputProps, "size" | "children"> &
    PasswordInputRootContract &
    PasswordInputContract & {
      clearable?: boolean;
      disabled?: boolean | null;
      indicatorProps?: Omit<PasswordInputIndicatorProps, "class">;
      onValueChange?: (value: string) => void;
      placeholder?: string | null | undefined;
      readonly?: boolean | null;
      value?: string | undefined;
      visibilityTriggerProps?: Omit<
        PasswordInputVisibilityTriggerProps,
        "asChild" | "class"
      >;
    };

  let {
    size = "md",
    variant,
    classNames,
    clearable = false,
    defaultVisible,
    disabled,
    indicatorProps,
    invalid,
    readonly,
    value = $bindable<string | undefined>(undefined),
    visible = $bindable<boolean | undefined>(undefined),
    visibilityTriggerProps,
    placeholder,
    oninput,
    onValueChange,
    onVisibilityChange,
    recipe = passwordInputRecipe,
    class: className,
    // InputGroup reads the surface from context; keep it off the DOM input.
    surfaceVariant: _surfaceVariant,
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

<PasswordInputRoot
  class={className}
  data-size={size}
  {defaultVisible}
  {invalid}
  {onVisibilityChange}
  {recipe}
  bind:visible
>
  <PasswordInputControl class={classNames?.control}>
    {#snippet asChild(props)}
      <InputGroupRoot
        {...props()}
        data-clearable={clearable || undefined}
        {size}
        {variant}
      >
        <PasswordInputInput
          {...inputProps}
          class={cn(inputGroupControlRecipe(), classNames?.input)}
          {disabled}
          oninput={handleInput}
          {placeholder}
          {readonly}
          {value}
        />

        {#if canClear}
          <InputGroupAddon
            align="inline-end"
            class={slots.clearAddon({ class: classNames?.clearAddon })}
          >
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
          <PasswordInputVisibilityTrigger
            {...visibilityTriggerProps}
            class={classNames?.visibilityTrigger}
          >
            {#snippet asChild(triggerProps)}
              <InputGroupButton
                {...triggerProps()}
                size="icon-xs"
                type="button"
                variant="ghost"
              >
                <PasswordInputIndicator
                  {...indicatorProps}
                  class={classNames?.indicator}
                >
                  {#snippet fallback()}
                    <EyeSlashIcon />
                  {/snippet}
                  <EyeIcon />
                </PasswordInputIndicator>
              </InputGroupButton>
            {/snippet}
          </PasswordInputVisibilityTrigger>
        </InputGroupAddon>
      </InputGroupRoot>
    {/snippet}
  </PasswordInputControl>
</PasswordInputRoot>
