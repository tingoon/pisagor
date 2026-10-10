import type {
  ClipboardControlProps,
  ClipboardIndicatorProps,
  ClipboardInputProps,
  ClipboardRootProps,
  ClipboardValueTextProps,
} from "@ark-ui/solid/clipboard";
import { Clipboard as ClipboardPrimitive } from "@ark-ui/solid/clipboard";
import type { ClipboardProps as BaseClipboardProps } from "@pisagor/props";
import {
  type ClipboardRecipeSlot,
  type ClipboardVariantProps,
  clipboardRecipe,
  formControlShellRecipe,
} from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { Component, ComponentProps, JSX } from "solid-js";
import { createMemo, Show, splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import { CheckIcon, ClipboardIcon } from "../internal/icons";
import type { VariantClassNames } from "../internal/types";
import { Button, type ButtonProps } from "./button";
import { useFormControlSurface } from "./surface/use-form-control-surface";

// #region Context
const { Context: ClipboardStylesContext, withContext } =
  createSlotRecipeContext({
    name: "Clipboard",
    recipe: clipboardRecipe,
  });
// #endregion

type FormControlVariant = "primary" | "secondary";
type ClipboardClassNames = VariantClassNames<ClipboardRecipeSlot>;

export interface ClipboardProps
  extends Omit<ClipboardRootProps, "children">,
    BaseClipboardProps {
  buttonSize?: ButtonProps["size"];
  buttonVariant?: ButtonProps["variant"];
  controlVariant?: FormControlVariant;
  variant?: "button" | "input" | "value";
  buttonAriaLabel?: string;
  copiedIcon?: JSX.Element;
  copyIcon?: JSX.Element;
  label?: string;
  classNames?: ClipboardClassNames;
  labelProps?: Omit<ComponentProps<"span">, "children" | "class">;
}

// #region Parts
function ClipboardProvider(props: {
  children: JSX.Element;
  valueSize?: ClipboardVariantProps["valueSize"];
  /**
   * Style recipe. Defaults to `clipboardRecipe` from `@pisagor/recipes/clipboard`.
   *
   * @defaultValue clipboardRecipe
   */
  recipe?: typeof clipboardRecipe;
}): JSX.Element {
  const valueSize = () => props.valueSize ?? "md";
  const slots = createMemo(() =>
    (props.recipe ?? clipboardRecipe)({ valueSize: valueSize() }),
  );

  return (
    <ClipboardStylesContext
      value={{
        get slots() {
          return slots();
        },
        get variants() {
          return { valueSize: valueSize() };
        },
      }}
    >
      {props.children}
    </ClipboardStylesContext>
  );
}

function ClipboardRoot(props: ClipboardRootProps): JSX.Element {
  return <ClipboardPrimitive.Root {...props} />;
}

const ClipboardControl: Component<ClipboardControlProps> = withContext(
  ClipboardPrimitive.Control,
  { name: "Control" },
);

const ClipboardInput: Component<ClipboardInputProps> = withContext(
  ClipboardPrimitive.Input,
  { name: "Input" },
);

const ClipboardValue: Component<ClipboardValueTextProps> = withContext(
  ClipboardPrimitive.ValueText,
  { name: "Value" },
);

const ClipboardIndicator: Component<ClipboardIndicatorProps> = withContext(
  ClipboardPrimitive.Indicator,
  { name: "Indicator" },
);

const ClipboardField = withContext("div", { name: "Field" });

const ClipboardLabel = withContext("span", { name: "Label" });
// #endregion

// #region Shorthand
export function Clipboard(props: ClipboardProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "buttonSize",
    "buttonVariant",
    "controlVariant",
    "valueSize",
    "variant",
    "buttonAriaLabel",
    "copiedIcon",
    "copyIcon",
    "label",
    "labelProps",
    "recipe",
    "classNames",
  ]);

  const surfaceVariant = useFormControlSurface();
  const controlVariant = () =>
    local.controlVariant ?? ("primary" as FormControlVariant);
  const variant = () => local.variant ?? "input";
  const buttonSize = () => local.buttonSize ?? "icon-md";
  const buttonAriaLabel = () => local.buttonAriaLabel ?? "Copy to clipboard";
  const copyIcon = () => local.copyIcon ?? <ClipboardIcon />;
  const copiedIcon = () => local.copiedIcon ?? <CheckIcon />;
  const shellClassName = () =>
    formControlShellRecipe({
      size: "md",
      surfaceVariant,
      variant: controlVariant(),
    });

  const control = (
    <ClipboardRoot {...rest}>
      <ClipboardControl class={local.classNames?.control}>
        <Show when={variant() === "input"}>
          <ClipboardInput
            class={cn(shellClassName(), local.classNames?.input)}
            data-variant={controlVariant()}
            readOnly
          />
        </Show>
        <Show when={variant() === "value"}>
          <ClipboardValue
            class={cn(shellClassName(), local.classNames?.value)}
            data-variant={controlVariant()}
          />
        </Show>
        <ClipboardPrimitive.Trigger
          asChild={(triggerProps) => (
            <Button
              {...triggerProps()}
              aria-label={buttonAriaLabel()}
              size={buttonSize()}
              type="button"
              variant={local.buttonVariant}
            >
              <ClipboardIndicator
                class={local.classNames?.indicator}
                copied={copiedIcon()}
              >
                {copyIcon()}
              </ClipboardIndicator>
            </Button>
          )}
        />
      </ClipboardControl>
    </ClipboardRoot>
  );

  return (
    <ClipboardProvider recipe={local.recipe} valueSize={local.valueSize}>
      <Show fallback={control} when={local.label}>
        <ClipboardField class={local.classNames?.field}>
          <ClipboardLabel {...local.labelProps} class={local.classNames?.label}>
            {local.label}
          </ClipboardLabel>
          {control}
        </ClipboardField>
      </Show>
    </ClipboardProvider>
  );
}
// #endregion
