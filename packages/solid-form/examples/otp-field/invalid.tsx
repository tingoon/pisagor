import { OtpField } from "@pisagor/solid-form";

export function Invalid() {
  return (
    <OtpField
      class="items-center"
      error="Enter the 6-digit code from your email."
      invalid
      label="Verification code"
      value="123"
    />
  );
}
