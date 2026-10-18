import { OtpField } from "@pisagor/solid-form";

export function Default() {
  return (
    <OtpField
      class="items-center"
      description="Enter the 6-digit code we sent to your phone."
      label="Verification code"
    />
  );
}
