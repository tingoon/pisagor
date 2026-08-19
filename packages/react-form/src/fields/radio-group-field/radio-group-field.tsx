import { Field } from "@pisagor/react/field";
import { RadioGroup, type RadioGroupRootProps } from "@pisagor/react/radio-group";
import type { ReactNode } from "react";
import type { FieldPresentationProps } from "../../internal/field-shell";

// #region Types
interface RadioGroupOption {
  description?: ReactNode;
  label: ReactNode;
  value: string;
}

export interface RadioGroupFieldProps
  extends Omit<FieldPresentationProps, "orientation">,
    Omit<RadioGroupRootProps, "invalid" | "name" | "onValueChange" | "value"> {
  name?: string;
  onBlur?: () => void;
  onValueChange: (value: string) => void;
  options: Array<RadioGroupOption | string>;
  value?: string;
}
// #endregion

// #region Component
export function RadioGroupField({
  className,
  description,
  error,
  id,
  invalid,
  label,
  labelAccessory,
  labelProps,
  name,
  onBlur,
  onValueChange,
  options,
  orientation,
  value,
  ...radioGroupProps
}: RadioGroupFieldProps) {
  const normalizedOptions = options.map((option) =>
    typeof option === "string" ? { label: option, value: option } : option,
  );
  const hasLabel = Boolean(label ?? labelAccessory);

  return (
    <Field.Set className={className} data-invalid={invalid || undefined} invalid={invalid}>
      {hasLabel ? (
        <Field.Legend className={labelProps?.className} id={id} variant="label">
          {label}
          {labelAccessory}
        </Field.Legend>
      ) : null}
      {description ? <Field.Description>{description}</Field.Description> : null}
      <RadioGroup.Root
        {...radioGroupProps}
        aria-labelledby={hasLabel && id ? id : undefined}
        invalid={invalid}
        name={name}
        onBlur={onBlur}
        onValueChange={(nextValue) => onValueChange(nextValue ?? "")}
        orientation={orientation}
        {...(value !== undefined ? { value: value || null } : {})}
      >
        {normalizedOptions.map((option) => {
          const optionId = id ? `${id}-${option.value}` : undefined;

          if (option.description) {
            return (
              <Field key={option.value}>
                <RadioGroup.Item id={optionId} value={option.value}>
                  {option.label}
                </RadioGroup.Item>
                <Field.Description>{option.description}</Field.Description>
              </Field>
            );
          }

          return (
            <RadioGroup.Item id={optionId} key={option.value} value={option.value}>
              {option.label}
            </RadioGroup.Item>
          );
        })}
      </RadioGroup.Root>
      {error ? (
        <Field invalid={invalid}>
          <Field.Error>{error}</Field.Error>
        </Field>
      ) : null}
    </Field.Set>
  );
}
// #endregion
