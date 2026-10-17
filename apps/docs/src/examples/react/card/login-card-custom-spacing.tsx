import source from "./login-card-custom-spacing.tsx?raw";
import { loginCardCustomSpacingBlock } from "#/recipes/blocks/card";
import { LoginCard } from "./login-card";

const styles = loginCardCustomSpacingBlock();

export function LoginCardCustomSpacing() {
  return <LoginCard className={styles.root()} primaryActionLabel="Login" />;
}

export { source as LoginCardCustomSpacingSource };
