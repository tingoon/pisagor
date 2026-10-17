import { OtpField } from "@pisagor/react-form";

export function Invalid() {
  return (
    <OtpField
      className="items-center"
      error="Enter the 6-digit code from your email."
      invalid
      label="Verification code"
      value="123"
    />
  );
}
