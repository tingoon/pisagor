import {
  Clipboard as ClipboardPrimitive,
  type ClipboardRootProps as ClipboardRootPrimitiveProps,
} from "@ark-ui/react";
import { CheckIcon, ClipboardIcon } from "@phosphor-icons/react";
import type {
  ClipboardContract,
  ClipboardRootContract,
} from "@pisagor/contracts";
import { clipboardRecipe } from "@pisagor/recipes";
import type { ComponentProps, ReactNode } from "react";
import { createSlotRecipeContext } from "../internal";
import { Button, type ButtonProps } from "./button";
import { useLocale } from "./provider/context";
import { useFormControlSurface } from "./surface/use-form-control-surface";

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
  copiedIcon?: ReactNode;
  copyIcon?: ReactNode;
  label?: ReactNode;
  /** Extra props forwarded to the label element */
  labelProps?: Omit<
    ComponentProps<typeof ClipboardPrimitive.Label>,
    "children" | "className"
  >;
}
// #endregion

// #region Parts
function Root({
  size = "md",
  valueSize,
  variant,
  surfaceVariant,
  recipe = clipboardRecipe,
  className,
  children,
  ...rest
}: ClipboardRootProps) {
  const surfaceFromContext = useFormControlSurface();
  const resolved = {
    size,
    surfaceVariant: surfaceVariant ?? surfaceFromContext,
    valueSize: valueSize ?? size,
    variant,
  };
  const slots = recipe(resolved);

  return (
    <Context value={{ slots, variants: resolved as never }}>
      <ClipboardPrimitive.Root {...rest} className={className}>
        {children}
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
function ClipboardShorthand({
  size = "md",
  buttonSize = `icon-${size ?? "md"}` as ButtonProps["size"],
  buttonVariant,
  controlVariant,
  valueSize = size ?? "md",
  variant: displayVariant = "input",
  buttonAriaLabel: buttonAriaLabelProp,
  copiedIcon = <CheckIcon />,
  copyIcon = <ClipboardIcon />,
  label,
  labelProps,
  recipe,
  className,
  classNames,
  ...rest
}: ClipboardProps) {
  const { m } = useLocale();
  const buttonAriaLabel = m("clipboard.copy", buttonAriaLabelProp);

  const control = (
    <Control className={classNames?.control}>
      {displayVariant === "input" && (
        <Input className={classNames?.input} readOnly />
      )}

      {displayVariant === "value" && (
        <ValueText className={classNames?.valueText} />
      )}

      <ClipboardPrimitive.Trigger asChild>
        <Button
          aria-label={buttonAriaLabel}
          size={buttonSize}
          type="button"
          variant={buttonVariant}
        >
          <Indicator className={classNames?.indicator} copied={copiedIcon}>
            {copyIcon}
          </Indicator>
        </Button>
      </ClipboardPrimitive.Trigger>
    </Control>
  );

  return (
    <Root
      {...rest}
      className={className}
      recipe={recipe}
      size={size}
      valueSize={valueSize}
      variant={controlVariant}
    >
      {label ? (
        <Field className={classNames?.field}>
          <Label {...labelProps} className={classNames?.label}>
            {label}
          </Label>
          {control}
        </Field>
      ) : (
        control
      )}
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
