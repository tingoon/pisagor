import type { ComponentProps } from "react";
import { preventDefaultFormSubmit } from "../field-utils";
import type { AppFormApi } from "../types";

type RootProps = Omit<ComponentProps<"form">, "onSubmit">;

export function createRoot(form: AppFormApi) {
  return function Root({ children, noValidate = true, ...props }: RootProps) {
    return (
      <form
        {...props}
        noValidate={noValidate}
        onSubmit={(event) => {
          preventDefaultFormSubmit(event);
          void form.handleSubmit();
        }}
      >
        <form.AppForm>{children}</form.AppForm>
      </form>
    );
  };
}
