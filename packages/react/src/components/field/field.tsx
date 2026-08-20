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
import type { ComponentProps } from "react";
import {
  formControlSeparatorVariants,
  shellVariantArgs,
} from "../../internal/form-control/form-control-variants";
import { useFormControlVariant } from "../../internal/form-control/use-form-control-variant";
import type { WithTestId } from "../../internal/types";
import { Separator } from "../separator";

// #region Types
export type FieldRootProps = ComponentProps<typeof FieldPrimitive.Root> &
  FieldVariantProps &
  WithTestId;

export type FieldProps = FieldRootProps;

export interface FieldLegendProps extends ComponentProps<typeof FieldsetPrimitive.Legend> {
  /** The variant of the legend. */
  variant?: "legend" | "label";
}

export type FieldSetProps = ComponentProps<typeof FieldsetPrimitive.Root>;

export type FieldLabelProps = ComponentProps<typeof FieldPrimitive.Label>;

export type FieldHelperProps = ComponentProps<typeof FieldPrimitive.HelperText>;

export type FieldErrorProps = ComponentProps<typeof FieldPrimitive.ErrorText>;
// #endregion

// #region Parts
export function FieldRoot({
  orientation = "vertical",
  reverse = false,
  className,
  testId,
  ...rest
}: FieldRootProps) {
  return (
    <FieldPrimitive.Root
      {...rest}
      className={fieldVariants({ className, orientation, reverse })}
      data-orientation={orientation}
      data-testid={testId}
    />
  );
}

export function FieldSet({ className, ...rest }: FieldSetProps) {
  return <FieldsetPrimitive.Root {...rest} className={fieldSetVariants({ className })} />;
}

export function FieldLegend({ variant = "legend", className, ...rest }: FieldLegendProps) {
  return (
    <FieldsetPrimitive.Legend
      {...rest}
      className={fieldLegendVariants({ className })}
      data-variant={variant}
    />
  );
}

export function FieldGroup({ className, ...rest }: ComponentProps<typeof ark.div>) {
  return (
    <ark.div
      {...rest}
      className={fieldGroupVariants({ className })}
      data-part="group"
      data-scope="field"
    />
  );
}

export function FieldContent({ className, ...rest }: ComponentProps<typeof ark.div>) {
  return (
    <ark.div
      {...rest}
      className={fieldContentVariants({ className })}
      data-part="content"
      data-scope="field"
    />
  );
}

export function FieldLabel({ className, ...rest }: FieldLabelProps) {
  return <FieldPrimitive.Label {...rest} className={fieldLabelVariants({ className })} />;
}

export function FieldRequiredIndicator({
  className,
  children,
  ...rest
}: ComponentProps<typeof ark.span>) {
  return (
    <FieldPrimitive.RequiredIndicator
      {...rest}
      aria-hidden
      className={fieldRequiredIndicatorVariants({ className })}
    >
      {children ?? "*"}
    </FieldPrimitive.RequiredIndicator>
  );
}

export function FieldTitle({ className, ...rest }: ComponentProps<typeof ark.div>) {
  return (
    <ark.div
      {...rest}
      className={fieldTitleVariants({ className })}
      data-part="title"
      data-scope="field"
    />
  );
}

export function FieldDescription({ className, ...rest }: ComponentProps<typeof ark.p>) {
  return (
    <ark.p
      {...rest}
      className={fieldDescriptionVariants({ className })}
      data-part="description"
      data-scope="field"
    />
  );
}

export function FieldSeparator({ children, className, ...rest }: ComponentProps<typeof ark.div>) {
  const resolved = useFormControlVariant();
  const shellArgs = shellVariantArgs(resolved);

  return (
    <ark.div
      {...rest}
      className={fieldSeparatorVariants({ className })}
      data-content={!!children}
      data-part="separator"
      data-scope="field"
    >
      <Separator className={fieldInlineVariants()} />

      {!!children && (
        <span className={formControlSeparatorVariants({ ...shellArgs })}>{children}</span>
      )}
    </ark.div>
  );
}

export function FieldHelper({ className, ...rest }: FieldHelperProps) {
  return <FieldPrimitive.HelperText {...rest} className={fieldHelperVariants({ className })} />;
}

export function FieldError({ className, ...rest }: FieldErrorProps) {
  return <FieldPrimitive.ErrorText {...rest} className={fieldErrorVariants({ className })} />;
}

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
