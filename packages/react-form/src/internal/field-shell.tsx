import type { FieldLabelProps, FieldProps } from "@pisagor/react";
import { Field } from "@pisagor/react";
import type { ReactNode } from "react";

export interface FieldPresentationProps {
  className?: string;
  description?: ReactNode;
  error?: ReactNode;
  id?: string;
  invalid?: boolean;
  label?: ReactNode;
  labelAccessory?: ReactNode;
  labelProps?: Omit<FieldLabelProps, "htmlFor" | "children">;
  orientation?: FieldProps["orientation"];
}

interface FieldShellProps extends FieldPresentationProps {
  children: ReactNode;
}

export function FieldShell({
  children,
  className,
  description,
  error,
  id,
  invalid,
  label,
  labelAccessory,
  labelProps,
  orientation,
}: FieldShellProps) {
  const hasLabel = label || labelAccessory;

  return (
    <Field className={className} invalid={invalid} orientation={orientation}>
      {hasLabel ? (
        <Field.Label {...labelProps} {...(id != null ? { htmlFor: id } : {})}>
          {label}
          {labelAccessory}
        </Field.Label>
      ) : null}
      {description ? <Field.Description>{description}</Field.Description> : null}
      {children}
      {error ? <Field.Error>{error}</Field.Error> : null}
    </Field>
  );
}
