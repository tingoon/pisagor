import type { ReactNode } from "react";
import type { ButtonProps } from "../../../components";
import { Button } from "../../../components";
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
