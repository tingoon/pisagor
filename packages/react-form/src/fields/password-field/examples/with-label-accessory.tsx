import { PasswordField } from "..";

export function WithLabelAccessory() {
  return (
    <PasswordField
      autoComplete="current-password"
      id="password-field-accessory"
      label="Password"
      labelAccessory={
        <a
          className="ml-auto text-sm underline-offset-4 hover:underline"
          href="https://example.com/forgot-password"
        >
          Forgot password?
        </a>
      }
      labelProps={{
        className: "w-full",
      }}
      placeholder="Enter your password"
    />
  );
}
