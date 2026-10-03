import type { InputOTPProps } from "@pisagor/solid";
import { InputOTP } from "@pisagor/solid";
import { createMemo, For, Show, splitProps } from "solid-js";
import {
  type FieldPresentationProps,
  FieldShell,
} from "../../internal/field-shell";

// #region Types
export interface OtpFieldProps
  extends FieldPresentationProps,
    Omit<
      InputOTPProps,
      "children" | "invalid" | "onValueChange" | "value" | "name" | "onBlur"
    > {
  /**
   * Number of OTP digits.
   *
   * @defaultValue 6
   */
  length?: number;
  name?: string;
  value?: string;
  onBlur?: () => void;
  onValueChange?: (value: string) => void;
}
// #endregion

// #region Component
export function OtpField(props: OtpFieldProps) {
  const [local, inputOtpProps] = splitProps(props, [
    "orientation",
    "invalid",
    "name",
    "value",
    "description",
    "error",
    "id",
    "label",
    "labelAccessory",
    "labelProps",
    "length",
    "onBlur",
    "onValueChange",
    "class",
  ]);

  const length = () => local.length ?? 6;
  const separatorAt = createMemo(() =>
    length() > 1 ? Math.floor(length() / 2) : -1,
  );
  const indices = createMemo(() =>
    Array.from({ length: length() }, (_, index) => index),
  );

  return (
    <FieldShell
      class={local.class}
      description={local.description}
      error={local.error}
      id={local.id}
      invalid={local.invalid}
      label={local.label}
      labelAccessory={local.labelAccessory}
      labelProps={local.labelProps}
      orientation={local.orientation}
    >
      <InputOTP
        {...inputOtpProps}
        {...(local.value !== undefined
          ? { value: local.value ? local.value.split("") : [] }
          : {})}
        id={local.id}
        invalid={local.invalid}
        name={local.name}
        onBlur={local.onBlur}
        onValueChange={(nextValue) => local.onValueChange?.(nextValue.join(""))}
      >
        <For each={indices()}>
          {(index) => (
            <>
              <Show when={index === separatorAt()}>
                <InputOTP.Separator />
              </Show>
              <InputOTP.Slot index={index} />
            </>
          )}
        </For>
      </InputOTP>
    </FieldShell>
  );
}
// #endregion
