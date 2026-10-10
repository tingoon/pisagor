import { defineComponent, h } from "vue";
import { loginCardCustomSpacingBlock } from "#/recipes/blocks/card";
import { LoginCard } from "./login-card";

const styles = loginCardCustomSpacingBlock();

type ArkPart = Parameters<typeof h>[0];

export const LoginCardCustomSpacing = defineComponent({
  inheritAttrs: false,
  name: "LoginCardCustomSpacing",
  setup() {
    return () =>
      h(LoginCard as ArkPart, {
        class: styles.root(),
        primaryActionLabel: "Login",
      });
  },
});
