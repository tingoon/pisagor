import { ark } from "@ark-ui/react/factory";
import { Field as FieldPrimitive } from "@ark-ui/react/field";
import { Fieldset as FieldsetPrimitive } from "@ark-ui/react/fieldset";
import { type FieldVariantProps, fieldRecipe } from "@pisagor/recipes/field";
import { formControlSeparatorRecipe } from "@pisagor/recipes/form-control";
import type { ComponentProps } from "react";
import { useMemo } from "react";
import { Separator } from "../separator";
import { FieldContext, useField } from "./field.context";

// #region Types
export type FieldRootProps = ComponentProps<typeof FieldPrimitive.Root> & FieldVariantProps;

export type FieldProps = FieldRootProps;

export interface FieldLegendProps extends ComponentProps<typeof FieldsetPrimitive.Legend> {
  /** The variant of the legend. */
  variant?: "legend" | "label";
}

export type FieldSetProps = ComponentProps<typeof FieldsetPrimitive.Root>;

export type FieldLabelProps = ComponentProps<typeof FieldPrimitive.Label>;

export type FieldHelperProps = ComponentProps<typeof FieldPrimitive.HelperText>;

export type FieldErrorProps = ComponentProps<typeof FieldPrimitive.ErrorText>;

export type FieldGroupProps = ComponentProps<typeof ark.div>;

export type FieldContentProps = ComponentProps<typeof ark.div>;

export type FieldRequiredIndicatorProps = ComponentProps<typeof ark.span>;

export type FieldTitleProps = ComponentProps<typeof ark.div>;

export type FieldDescriptionProps = ComponentProps<typeof ark.p>;

export type FieldSeparatorProps = ComponentProps<typeof ark.div>;
// #endregion

// #region Parts
export function FieldRoot({
  orientation = "vertical",
  children,
  reverse = false,
  className,
  ...rest
}: FieldRootProps) {
  const slots = useMemo(() => fieldRecipe({ orientation, reverse }), [orientation, reverse]);

  return (
    <FieldContext value={{ slots }}>
      <FieldPrimitive.Root
        {...rest}
        className={slots.base({ className })}
        data-orientation={orientation}
      >
        {children}
      </FieldPrimitive.Root>
    </FieldContext>
  );
}

export function FieldSet({ children, className, ...rest }: FieldSetProps) {
  const slots = fieldRecipe();

  return (
    <FieldContext value={{ slots }}>
      <FieldsetPrimitive.Root {...rest} className={slots.set({ className })}>
        {children}
      </FieldsetPrimitive.Root>
    </FieldContext>
  );
}

export function FieldLegend({ variant = "legend", className, ...rest }: FieldLegendProps) {
  const { slots } = useField();

  return (
    <FieldsetPrimitive.Legend
      {...rest}
      className={slots.legend({ className })}
      data-variant={variant}
    />
  );
}

export function FieldGroup({ children, className, ...rest }: FieldGroupProps) {
  const slots = fieldRecipe();

  return (
    <FieldContext value={{ slots }}>
      <ark.div
        {...rest}
        className={slots.group({ className })}
        data-part="group"
        data-scope="field"
      >
        {children}
      </ark.div>
    </FieldContext>
  );
}

export function FieldContent({ className, ...rest }: FieldContentProps) {
  const { slots } = useField();

  return (
    <ark.div
      {...rest}
      className={slots.content({ className })}
      data-part="content"
      data-scope="field"
    />
  );
}

export function FieldLabel({ className, ...rest }: FieldLabelProps) {
  const { slots } = useField();

  return <FieldPrimitive.Label {...rest} className={slots.label({ className })} />;
}

export function FieldRequiredIndicator({
  children,
  className,
  ...rest
}: FieldRequiredIndicatorProps) {
  const { slots } = useField();

  return (
    <FieldPrimitive.RequiredIndicator
      {...rest}
      aria-hidden
      className={slots.requiredIndicator({ className })}
    >
      {children ?? "*"}
    </FieldPrimitive.RequiredIndicator>
  );
}

export function FieldTitle({ className, ...rest }: FieldTitleProps) {
  const { slots } = useField();

  return (
    <ark.div
      {...rest}
      className={slots.title({ className })}
      data-part="title"
      data-scope="field"
    />
  );
}

export function FieldDescription({ className, ...rest }: FieldDescriptionProps) {
  const { slots } = useField();

  return (
    <ark.p
      {...rest}
      className={slots.description({ className })}
      data-part="description"
      data-scope="field"
    />
  );
}

export function FieldSeparator({ children, className, ...rest }: FieldSeparatorProps) {
  const { slots } = useField();

  return (
    <ark.div
      {...rest}
      className={slots.separator({ className })}
      data-content={!!children}
      data-part="separator"
      data-scope="field"
    >
      <Separator className={slots.inline()} />

      {!!children && (
        <span className={formControlSeparatorRecipe({ variant: "primary" })}>{children}</span>
      )}
    </ark.div>
  );
}

export function FieldHelper({ className, ...rest }: FieldHelperProps) {
  const { slots } = useField();

  return <FieldPrimitive.HelperText {...rest} className={slots.helper({ className })} />;
}

export function FieldError({ className, ...rest }: FieldErrorProps) {
  const { slots } = useField();

  return <FieldPrimitive.ErrorText {...rest} className={slots.error({ className })} />;
}
// #endregion

// #region Display Names
FieldRoot.displayName = "Field";
FieldSet.displayName = "Field.Set";
FieldLegend.displayName = "Field.Legend";
FieldGroup.displayName = "Field.Group";
FieldContent.displayName = "Field.Content";
FieldLabel.displayName = "Field.Label";
FieldRequiredIndicator.displayName = "Field.RequiredIndicator";
FieldTitle.displayName = "Field.Title";
FieldDescription.displayName = "Field.Description";
FieldSeparator.displayName = "Field.Separator";
FieldHelper.displayName = "Field.Helper";
FieldError.displayName = "Field.Error";
// #endregion
