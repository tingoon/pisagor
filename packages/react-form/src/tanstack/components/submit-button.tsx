import type { ButtonProps } from "@pisagor/react";
import { Button } from "@pisagor/react";
import type { ReactNode } from "react";
import { useFormContext } from "../contexts";

interface SubmitButtonProps extends Omit<ButtonProps, "type"> {
  children: ReactNode;
  isLoading?: boolean;
}

export function SubmitButton({ isLoading, children, ...buttonProps }: SubmitButtonProps) {
  const form = useFormContext();

  return (
    <form.Subscribe selector={(state) => state.isSubmitting}>
      {(isSubmitting) => (
        <Button {...buttonProps} isLoading={isLoading ?? isSubmitting} type="submit">
          {children}
        </Button>
      )}
    </form.Subscribe>
  );
}
