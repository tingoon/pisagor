import {
  Clipboard as ClipboardPrimitive,
  type ClipboardRootProps as ClipboardRootPrimitiveProps,
} from "@ark-ui/solid";
import type {
  ClipboardContract,
  ClipboardRootContract,
} from "@pisagor/contracts";
import { clipboardRecipe } from "@pisagor/recipes";
import type { ComponentProps, JSX } from "solid-js";
import { createMemo, Show, splitProps } from "solid-js";
import { CheckIcon, ClipboardIcon, createSlotRecipeContext } from "../internal";
import { Button, type ButtonProps } from "./button";
import { useLocale } from "./provider/context";

// #region Context
const { Context, withContext } = createSlotRecipeContext({
  name: "Clipboard",
  recipe: clipboardRecipe,
});
// #endregion

// #region Types
type ClipboardRootProps = ClipboardRootPrimitiveProps & ClipboardRootContract;

export interface ClipboardProps
  extends
    Omit<ClipboardRootProps, "children" | "variant">,
    Omit<ClipboardRootContract, "variant">,
    ClipboardContract {
  copiedIcon?: JSX.Element;
  copyIcon?: JSX.Element;
  label?: JSX.Element;
  /** Extra props forwarded to the label element */
  labelProps?: Omit<
    ComponentProps<typeof ClipboardPrimitive.Label>,
    "children" | "class"
  >;
}
// #endregion

// #region Parts
function Root(props: ClipboardRootProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "size",
    "valueSize",
    "variant",
    "surfaceVariant",
    "recipe",
    "class",
    "children",
  ]);
  const recipe = () => local.recipe ?? clipboardRecipe;
  const resolved = () => ({
    size: local.size ?? "md",
    surfaceVariant: local.surfaceVariant,
    valueSize: local.valueSize ?? local.size ?? "md",
    variant: local.variant,
  });
  const slots = createMemo(() => recipe()(resolved()));

  return (
    <Context
      value={{
        get slots() {
          return slots();
        },
        get variants() {
          return resolved() as never;
        },
      }}
    >
      <ClipboardPrimitive.Root {...rest} class={local.class}>
        {local.children}
      </ClipboardPrimitive.Root>
    </Context>
  );
}

const Control = withContext<ComponentProps<typeof ClipboardPrimitive.Control>>(
  ClipboardPrimitive.Control,
  {
    name: "Control",
  },
);

const Input = withContext<ComponentProps<typeof ClipboardPrimitive.Input>>(
  ClipboardPrimitive.Input,
  {
    name: "Input",
  },
);

const ValueText = withContext<
  ComponentProps<typeof ClipboardPrimitive.ValueText>
>(ClipboardPrimitive.ValueText, { name: "ValueText" });

const Indicator = withContext<
  ComponentProps<typeof ClipboardPrimitive.Indicator>
>(ClipboardPrimitive.Indicator, {
  name: "Indicator",
});

const Field = withContext<ComponentProps<"div">>("div", {
  name: "Field",
});

const Label = withContext<ComponentProps<typeof ClipboardPrimitive.Label>>(
  ClipboardPrimitive.Label,
  {
    name: "Label",
  },
);
// #endregion

// #region Closed
function ClipboardShorthand(props: ClipboardProps): JSX.Element {
  const { m } = useLocale();
  const [local, rest] = splitProps(props, [
    "size",
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

  const size = () => local.size ?? "md";
  const displayVariant = () => local.variant ?? "input";
  const buttonSize = () =>
    local.buttonSize ?? (`icon-${size()}` as ButtonProps["size"]);
  const buttonAriaLabel = () => m("clipboard.copy", local.buttonAriaLabel);
  const copyIcon = () => local.copyIcon ?? <ClipboardIcon />;
  const copiedIcon = () => local.copiedIcon ?? <CheckIcon />;

  const control = () => (
    <Control class={local.classNames?.control}>
      <Show when={displayVariant() === "input"}>
        <Input class={local.classNames?.input} readOnly />
      </Show>

      <Show when={displayVariant() === "value"}>
        <ValueText class={local.classNames?.valueText} />
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
            <Indicator
              class={local.classNames?.indicator}
              copied={copiedIcon()}
            >
              {copyIcon()}
            </Indicator>
          </Button>
        )}
      />
    </Control>
  );

  return (
    <Root
      {...rest}
      class={local.class}
      recipe={local.recipe}
      size={size()}
      valueSize={local.valueSize ?? size()}
      variant={local.controlVariant}
    >
      <Show fallback={control()} when={local.label}>
        <Field class={local.classNames?.field}>
          <Label {...local.labelProps} class={local.classNames?.label}>
            {local.label}
          </Label>
          {control()}
        </Field>
      </Show>
    </Root>
  );
}
// #endregion

export const Clipboard = Object.assign(ClipboardShorthand, {
  Control,
  Field,
  Indicator,
  Input,
  Label,
  Root,
  ValueText,
});
