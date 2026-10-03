/** @jsxImportSource solid-js */

import { loginCardCustomSpacingBlock } from "@pisagor/recipes/blocks/card";
import { LoginCard } from "./login-card";

const styles = loginCardCustomSpacingBlock();

export function LoginCardCustomSpacing() {
  return <LoginCard class={styles.root()} primaryActionLabel="Login" />;
}
