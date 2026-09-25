import type {
  ClipboardControlProps,
  ClipboardIndicatorProps,
  ClipboardInputProps,
  ClipboardRootProps,
  ClipboardValueTextProps,
} from "@ark-ui/solid/clipboard";
import { Clipboard as ClipboardPrimitive } from "@ark-ui/solid/clipboard";
import {
  type ClipboardRecipeSlot,
  type ClipboardVariantProps,
  clipboardRecipe,
} from "@pisagor/recipes/clipboard";
import { formControlShellRecipe } from "@pisagor/recipes/form-control";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import { CheckIcon, ClipboardIcon } from "../../internal/icons";
import type { VariantClassNames } from "../../internal/types";
import { Button, type ButtonProps } from "../button";
import { useFormControlSurface } from "../surface/use-form-control-surface";
import { ClipboardContext, useClipboard } from "./clipboard.context";

type FormControlVariant = "primary" | "secondary";
type ClipboardClassNames = VariantClassNames<ClipboardRecipeSlot>;

export interface ClipboardProps
  extends Omit<ClipboardRootProps, "children">,
    ClipboardVariantProps {
  buttonSize?: ButtonProps["size"];
  buttonVariant?: ButtonProps["variant"];
  controlVariant?: FormControlVariant;
  variant?: "button" | "input" | "value";
  buttonAriaLabel?: string;
  copiedIcon?: JSX.Element;
  copyIcon?: JSX.Element;
  label?: string;
  recipe?: typeof clipboardRecipe;
  classNames?: ClipboardClassNames;
  labelProps?: Omit<ComponentProps<"span">, "children" | "class">;
}

function ClipboardProvider(props: {
  children: JSX.Element;
  valueSize?: ClipboardVariantProps["valueSize"];
  recipe?: typeof clipboardRecipe;
}): JSX.Element {
  const [local] = splitProps(props, ["children", "valueSize", "recipe"]);
  const slots = () =>
    (local.recipe ?? clipboardRecipe)({ valueSize: local.valueSize });
  return (
    <ClipboardContext value={{ slots: slots() }}>
      {local.children}
    </ClipboardContext>
  );
}

function ClipboardRoot(props: ClipboardRootProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  return (
    <ClipboardPrimitive.Root {...rest} class={local.class}>
      {local.children}
    </ClipboardPrimitive.Root>
  );
}

function ClipboardControl(props: ClipboardControlProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const { slots } = useClipboard();
  return (
    <ClipboardPrimitive.Control
      {...rest}
      class={slots.control({ class: local.class })}
    >
      {local.children}
    </ClipboardPrimitive.Control>
  );
}

function ClipboardInput(props: ClipboardInputProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useClipboard();
  return (
    <ClipboardPrimitive.Input
      {...rest}
      class={slots.input({ class: local.class })}
    />
  );
}

function ClipboardValue(props: ClipboardValueTextProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useClipboard();
  return (
    <ClipboardPrimitive.ValueText
      {...rest}
      class={slots.value({ class: local.class })}
    />
  );
}

function ClipboardIndicator(props: ClipboardIndicatorProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useClipboard();
  return (
    <ClipboardPrimitive.Indicator
      {...rest}
      class={slots.indicator({ class: local.class })}
    />
  );
}

function ClipboardField(props: ComponentProps<"div">): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const { slots } = useClipboard();
  return (
    <div {...rest} class={slots.field({ class: local.class })}>
      {local.children}
    </div>
  );
}

function ClipboardLabel(props: ComponentProps<"span">): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const { slots } = useClipboard();
  return (
    <span {...rest} class={slots.label({ class: local.class })}>
      {local.children}
    </span>
  );
}

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
    "class",
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
    <ClipboardRoot {...rest} class={local.class}>
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
