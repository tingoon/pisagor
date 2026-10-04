import { PasswordInput } from "@pisagor/react/password-input";

export function Sizes() {
  return (
    <div className="flex flex-col gap-2">
      <PasswordInput placeholder="Small" size="sm" />
      <PasswordInput placeholder="Medium" size="md" />
      <PasswordInput placeholder="Large" size="lg" />
    </div>
  );
}
