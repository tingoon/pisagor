<script lang="ts">
  import {
    Clipboard as ClipboardPrimitive,
    type ClipboardLabelProps,
    type ClipboardRootProps,
  } from "@ark-ui/svelte";
  import type {
    ButtonRootContract,
    ClipboardContract,
    ClipboardRootContract,
  } from "@pisagor/props";
  import { clipboardRecipe, formControlShellRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { CheckIcon, ClipboardIcon } from "phosphor-svelte";
  import type { Snippet } from "svelte";
  import Button from "../button.svelte";
  import { useLocale } from "../provider/context";
  import { useFormControlSurface } from "../surface/use-form-control-surface";
  import { Context } from "./clipboard.context";
  import ClipboardControl from "./clipboard-control.svelte";
  import ClipboardField from "./clipboard-field.svelte";
  import ClipboardIndicator from "./clipboard-indicator.svelte";
  import ClipboardInput from "./clipboard-input.svelte";
  import ClipboardLabel from "./clipboard-label.svelte";
  import ClipboardRoot from "./clipboard-root.svelte";
  import ClipboardValue from "./clipboard-value.svelte";

  const { m } = useLocale();

  type FormControlVariant = "primary" | "secondary";

  type Props = Omit<ClipboardRootProps, "children"> &
    ClipboardRootContract & {
      copiedIcon?: Snippet;
      copyIcon?: Snippet;
      label?: string;
      /** Extra props forwarded to the label element */
      labelProps?: Omit<ClipboardLabelProps, "children" | "class">;
    } & ClipboardContract;

  let {
    size = "md",
    buttonSize: buttonSizeProp,
    buttonVariant,
    controlVariant: controlVariantProp,
    valueSize: valueSizeProp,
    variant = "input",
    buttonAriaLabel = m("clipboard.copy"),
    copiedIcon,
    copyIcon,
    label,
    labelProps,
    recipe = clipboardRecipe,
    classNames,
    ...rest
  }: Props = $props();

  const buttonSize = $derived(
    buttonSizeProp ?? (`icon-${size}` as ButtonRootContract["size"]),
  );
  const valueSize = $derived(valueSizeProp ?? size);
  const slots = $derived(recipe({ size, valueSize }));
  Context.set({
    get slots() {
      return slots;
    },
    get variants() {
      return { size, valueSize };
    },
  });

  const surfaceVariant = useFormControlSurface();
  const controlVariant = $derived(
    controlVariantProp ?? ("primary" as FormControlVariant),
  );
  const shellClassName = $derived(
    formControlShellRecipe({
      size,
      surfaceVariant,
      variant: controlVariant,
    }),
  );
</script>

{#snippet control()}
  <ClipboardControl class={classNames?.control}>
    {#if variant === "input"}
      <ClipboardInput
        class={cn(shellClassName, classNames?.input)}
        data-variant={controlVariant}
        readonly
      />
    {/if}
    {#if variant === "value"}
      <ClipboardValue
        class={cn(shellClassName, classNames?.value)}
        data-variant={controlVariant}
      />
    {/if}
    <ClipboardPrimitive.Trigger>
      {#snippet asChild(props)}
        <Button
          {...props()}
          aria-label={buttonAriaLabel}
          size={buttonSize}
          type="button"
          variant={buttonVariant}
        >
          <ClipboardIndicator class={classNames?.indicator}>
            {#snippet copied()}
              {#if copiedIcon}
                {@render copiedIcon()}
              {:else}
                <CheckIcon />
              {/if}
            {/snippet}
            {#if copyIcon}
              {@render copyIcon()}
            {:else}
              <ClipboardIcon />
            {/if}
          </ClipboardIndicator>
        </Button>
      {/snippet}
    </ClipboardPrimitive.Trigger>
  </ClipboardControl>
{/snippet}

<ClipboardRoot {...rest}>
  {#if label}
    <ClipboardField class={classNames?.field}>
      <ClipboardLabel {...labelProps} class={classNames?.label}>
        {label}
      </ClipboardLabel>
      {@render control()}
    </ClipboardField>
  {:else}
    {@render control()}
  {/if}
</ClipboardRoot>
