import type { AnyFieldApi } from "@tanstack/react-form";
import type { ComponentType } from "react";
import { useFieldContext } from "./contexts";
import { getFieldErrorMessage } from "./field-utils";
import { useFieldInvalid } from "./hooks";

interface FieldConnection {
  error: string | undefined;
  field: AnyFieldApi;
  invalid: boolean;
}

export function createFieldComponent<
  TValue,
  TControlProps extends object,
  TConnectedProps extends Partial<TControlProps>,
>(
  Component: ComponentType<TControlProps>,
  mapFieldToProps: (connection: FieldConnection) => TConnectedProps,
) {
  return function ConnectedField(props: Omit<TControlProps, keyof TConnectedProps>) {
    const field = useFieldContext<TValue>();
    const invalid = useFieldInvalid(field);
    const fieldProps = mapFieldToProps({
      error: invalid ? getFieldErrorMessage(field) : undefined,
      field,
      invalid,
    });

    return (
      <Component
        {...({
          id: field.name,
          ...fieldProps,
          ...props,
        } as unknown as TControlProps)}
      />
    );
  };
}
