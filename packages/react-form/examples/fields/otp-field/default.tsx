import { OtpField } from "@pisagor/react-form";

export function Default() {
  return (
    <OtpField
      className="items-center"
      description="Enter the 6-digit code we sent to your phone."
      label="Verification code"
    />
  );
}
