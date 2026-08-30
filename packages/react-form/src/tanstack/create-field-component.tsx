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
  type OuterProps = Omit<TControlProps, keyof TConnectedProps>;

  return function ConnectedField(props: OuterProps) {
    const field = useFieldContext<TValue>();
    const invalid = useFieldInvalid(field);
    const connectedProps = mapFieldToProps({
      error: invalid ? getFieldErrorMessage(field) : undefined,
      field,
      invalid,
    });

    return (
      <Component
        {...({
          ...props,
          ...connectedProps,
          id: field.name,
        } as unknown as TControlProps)}
      />
    );
  };
}
