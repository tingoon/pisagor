import {
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldHelper,
  FieldLabel,
  FieldLegend,
  FieldRequiredIndicator,
  FieldRoot,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "./field";

export type { FieldLabelProps } from "@ark-ui/react/field";

export type {
  FieldContentProps,
  FieldDescriptionProps,
  FieldErrorProps,
  FieldGroupProps,
  FieldHelperProps,
  FieldLegendProps,
  FieldProps,
  FieldRequiredIndicatorProps,
  FieldRootProps,
  FieldSeparatorProps,
  FieldSetProps,
  FieldTitleProps,
} from "./field";

export const Field = Object.assign(FieldRoot, {
  Content: FieldContent,
  Description: FieldDescription,
  Error: FieldError,
  Group: FieldGroup,
  Helper: FieldHelper,
  Label: FieldLabel,
  Legend: FieldLegend,
  RequiredIndicator: FieldRequiredIndicator,
  Separator: FieldSeparator,
  Set: FieldSet,
  Title: FieldTitle,
});
