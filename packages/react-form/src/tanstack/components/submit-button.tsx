import type { ButtonProps } from "@pisagor/react";
import { Button } from "@pisagor/react";
import type { ReactNode } from "react";
import { useFormContext } from "../contexts";

interface SubmitButtonProps extends Omit<ButtonProps, "type"> {
  children: ReactNode;
}

export function SubmitButton({ loading, children, ...buttonProps }: SubmitButtonProps) {
  const form = useFormContext();

  return (
    <form.Subscribe selector={(state) => state.isSubmitting}>
      {(isSubmitting) => (
        <Button {...buttonProps} loading={loading ?? isSubmitting} type="submit">
          {children}
        </Button>
      )}
    </form.Subscribe>
  );
}
