import { ark } from "@ark-ui/react/factory";
import { Field as FieldPrimitive } from "@ark-ui/react/field";
import { Fieldset as FieldsetPrimitive } from "@ark-ui/react/fieldset";
import {
  type FieldVariantProps,
  fieldContentVariants,
  fieldDescriptionVariants,
  fieldErrorVariants,
  fieldGroupVariants,
  fieldHelperVariants,
  fieldInlineVariants,
  fieldLabelVariants,
  fieldLegendVariants,
  fieldRequiredIndicatorVariants,
  fieldSeparatorVariants,
  fieldSetVariants,
  fieldTitleVariants,
  fieldVariants,
} from "@pisagor/styles/ui/field";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import {
  formControlSeparatorVariants,
  shellVariantArgs,
} from "../../internal/form-control/form-control-variants";
import { useFormControlVariant } from "../../internal/form-control/use-form-control-variant";
import type { WithTestId } from "../../internal/types";
import { Separator } from "../separator";

// #region Variants

// #endregion

// #region Types
export interface FieldProps
  extends ComponentProps<typeof FieldPrimitive.Root>,
    FieldVariantProps,
    WithTestId {}

interface FieldLegendProps extends ComponentProps<typeof FieldsetPrimitive.Legend> {
  /** The variant of the legend. */
  variant?: "legend" | "label";
}

// #endregion

// #region Components
export function FieldRoot({
  orientation = "vertical",
  reverse = false,
  className,
  testId,
  ...rest
}: FieldProps) {
  return (
    <FieldPrimitive.Root
      {...rest}
      className={cn(fieldVariants({ orientation, reverse }), className)}
      data-orientation={orientation}
      data-testid={testId}
    />
  );
}
FieldRoot.displayName = "Field";

export function FieldSet({ className, ...rest }: ComponentProps<typeof FieldsetPrimitive.Root>) {
  return <FieldsetPrimitive.Root {...rest} className={cn(fieldSetVariants(), className)} />;
}
FieldSet.displayName = "Field.Set";

export function FieldLegend({ variant = "legend", className, ...rest }: FieldLegendProps) {
  return (
    <FieldsetPrimitive.Legend
      {...rest}
      className={cn(fieldLegendVariants(), className)}
      data-variant={variant}
    />
  );
}
FieldLegend.displayName = "Field.Legend";

export function FieldGroup({ className, ...rest }: ComponentProps<typeof ark.div>) {
  return (
    <ark.div
      {...rest}
      className={cn(fieldGroupVariants(), className)}
      data-part="group"
      data-scope="field"
    />
  );
}
FieldGroup.displayName = "Field.Group";

export function FieldContent({ className, ...rest }: ComponentProps<typeof ark.div>) {
  return (
    <ark.div
      {...rest}
      className={cn(fieldContentVariants(), className)}
      data-part="content"
      data-scope="field"
    />
  );
}
FieldContent.displayName = "Field.Content";

export type FieldLabelProps = ComponentProps<typeof FieldPrimitive.Label>;

export function FieldLabel({ className, ...rest }: FieldLabelProps) {
  return <FieldPrimitive.Label {...rest} className={cn(fieldLabelVariants(), className)} />;
}
FieldLabel.displayName = "Field.Label";

export function FieldRequiredIndicator({
  className,
  children,
  ...rest
}: ComponentProps<typeof ark.span>) {
  return (
    <FieldPrimitive.RequiredIndicator
      {...rest}
      aria-hidden
      className={cn(fieldRequiredIndicatorVariants(), className)}
    >
      {children ?? "*"}
    </FieldPrimitive.RequiredIndicator>
  );
}
FieldRequiredIndicator.displayName = "Field.RequiredIndicator";

export function FieldTitle({ className, ...rest }: ComponentProps<typeof ark.div>) {
  return (
    <ark.div
      {...rest}
      className={cn(fieldTitleVariants(), className)}
      data-part="title"
      data-scope="field"
    />
  );
}
FieldTitle.displayName = "Field.Title";

export function FieldDescription({ className, ...rest }: ComponentProps<typeof ark.p>) {
  return (
    <ark.p
      {...rest}
      className={cn(fieldDescriptionVariants(), className)}
      data-part="description"
      data-scope="field"
    />
  );
}
FieldDescription.displayName = "Field.Description";

export function FieldSeparator({ children, className, ...rest }: ComponentProps<typeof ark.div>) {
  const resolved = useFormControlVariant();
  const shellArgs = shellVariantArgs(resolved);

  return (
    <ark.div
      {...rest}
      className={cn(fieldSeparatorVariants(), className)}
      data-content={!!children}
      data-part="separator"
      data-scope="field"
    >
      <Separator className={fieldInlineVariants()} />

      {!!children && (
        <span className={cn(formControlSeparatorVariants({ ...shellArgs }))}>{children}</span>
      )}
    </ark.div>
  );
}
FieldSeparator.displayName = "Field.Separator";

export function FieldHelper({
  className,
  ...rest
}: ComponentProps<typeof FieldPrimitive.HelperText>) {
  return <FieldPrimitive.HelperText {...rest} className={cn(fieldHelperVariants(), className)} />;
}
FieldHelper.displayName = "Field.Helper";

export function FieldError({
  className,
  ...rest
}: ComponentProps<typeof FieldPrimitive.ErrorText>) {
  return <FieldPrimitive.ErrorText {...rest} className={cn(fieldErrorVariants(), className)} />;
}
FieldError.displayName = "Field.Error";

// #endregion
