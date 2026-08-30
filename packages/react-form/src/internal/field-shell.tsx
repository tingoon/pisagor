import type { FieldLabelProps, FieldProps } from "@pisagor/react";
import { Field } from "@pisagor/react";
import type { ReactNode } from "react";

export interface FieldPresentationProps {
  orientation?: FieldProps["orientation"];
  id?: string;
  invalid?: boolean;
  description?: ReactNode;
  error?: ReactNode;
  label?: ReactNode;
  labelAccessory?: ReactNode;
  className?: string;
  labelProps?: Omit<FieldLabelProps, "htmlFor" | "children">;
}

interface FieldShellProps extends FieldPresentationProps {
  children: ReactNode;
}

export function FieldShell({
  orientation,
  id,
  invalid,
  children,
  description,
  error,
  label,
  labelAccessory,
  className,
  labelProps,
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
