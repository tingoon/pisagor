import source from "./login-card-custom-spacing.tsx?raw";
/** @jsxImportSource solid-js */

import { loginCardCustomSpacingBlock } from "#/recipes/blocks/card";
import { LoginCard } from "./login-card";

const styles = loginCardCustomSpacingBlock();

export function LoginCardCustomSpacing() {
  return <LoginCard class={styles.root()} primaryActionLabel="Login" />;
}

export { source as LoginCardCustomSpacingSource };
