import type { AnyFieldApi } from "@tanstack/solid-form";
import type { Component, JSX } from "solid-js";
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
  Component: Component<TControlProps>,
  mapFieldToProps: (connection: FieldConnection) => TConnectedProps,
) {
  type OuterProps = Omit<TControlProps, keyof TConnectedProps>;

  return function ConnectedField(props: OuterProps): JSX.Element {
    const field = useFieldContext<TValue>();
    const invalid = useFieldInvalid(field);
    const connectedProps = mapFieldToProps({
      error: invalid() ? getFieldErrorMessage(field()) : undefined,
      field: field(),
      invalid: invalid(),
    });

    return (
      <Component
        {...({
          ...props,
          ...connectedProps,
          id: field().name,
        } as unknown as TControlProps)}
      />
    );
  };
}
