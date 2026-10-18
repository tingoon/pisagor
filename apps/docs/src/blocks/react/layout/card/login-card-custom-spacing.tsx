import { loginCardCustomSpacingBlock } from "#/styles/recipes/card";
import { LoginCard } from "./login-card";

const styles = loginCardCustomSpacingBlock();

export function LoginCardCustomSpacing() {
  return <LoginCard className={styles.root()} primaryActionLabel="Login" />;
}
