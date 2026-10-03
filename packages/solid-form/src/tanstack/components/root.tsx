import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import { preventDefaultFormSubmit } from "../field-utils";
import type { AppFormApi } from "../types";

type RootProps = Omit<JSX.FormHTMLAttributes<HTMLFormElement>, "onSubmit">;

export function createRoot(form: AppFormApi) {
  return function Root(props: RootProps) {
    const [local, rest] = splitProps(props, ["children", "noValidate"]);

    return (
      <form
        {...rest}
        noValidate={local.noValidate ?? true}
        onSubmit={(event) => {
          preventDefaultFormSubmit(event);
          void form.handleSubmit();
        }}
      >
        <form.AppForm>{local.children}</form.AppForm>
      </form>
    );
  };
}
