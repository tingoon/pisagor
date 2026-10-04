import { Button, type ButtonProps } from "@pisagor/solid";
import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import { useFormContext } from "../contexts";

interface SubmitButtonProps extends Omit<ButtonProps, "type"> {
  children: JSX.Element;
}

export function SubmitButton(props: SubmitButtonProps) {
  const [local, buttonProps] = splitProps(props, ["loading", "children"]);
  const form = useFormContext();

  return (
    <form.Subscribe selector={(state) => state.isSubmitting}>
      {(isSubmitting) => (
        <Button
          {...buttonProps}
          loading={local.loading ?? isSubmitting()}
          type="submit"
        >
          {local.children}
        </Button>
      )}
    </form.Subscribe>
  );
}
