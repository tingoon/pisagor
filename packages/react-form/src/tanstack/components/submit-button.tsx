import type { ButtonProps } from "@pisagor/react";
import { Button } from "@pisagor/react";
import type { ReactNode } from "react";
import { useFormContext } from "../contexts";

interface SubmitButtonProps extends Omit<ButtonProps, "type"> {
  children: ReactNode;
  isLoading?: boolean;
}

export function SubmitButton({ children, isLoading, ...buttonProps }: SubmitButtonProps) {
  const form = useFormContext();

  return (
    <form.Subscribe selector={(state) => state.isSubmitting}>
      {(isSubmitting) => (
        <Button isLoading={isLoading ?? isSubmitting} type="submit" {...buttonProps}>
          {children}
        </Button>
      )}
    </form.Subscribe>
  );
}
