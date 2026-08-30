import type { RadioGroupRootProps } from "@pisagor/react";
import { Field, RadioGroup } from "@pisagor/react";
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
  value?: string;
  options: Array<RadioGroupOption | string>;
  onBlur?: () => void;
  onValueChange: (value: string) => void;
}
// #endregion

// #region Component
export function RadioGroupField({
  orientation,
  invalid,
  name,
  value,
  description,
  error,
  id,
  label,
  labelAccessory,
  labelProps,
  options,
  onBlur,
  onValueChange,
  className,
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
        {...(value !== undefined ? { value: value || null } : {})}
        aria-labelledby={hasLabel && id ? id : undefined}
        invalid={invalid}
        name={name}
        onBlur={onBlur}
        onValueChange={(nextValue) => onValueChange(nextValue ?? "")}
        orientation={orientation}
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
