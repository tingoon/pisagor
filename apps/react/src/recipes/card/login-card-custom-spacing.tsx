import { LoginCard } from "./login-card";

export function LoginCardCustomSpacing() {
  return (
    <LoginCard
      className="[--space:--spacing(2)] md:[--space:--spacing(8)]"
      primaryActionLabel="Login"
    />
  );
}
