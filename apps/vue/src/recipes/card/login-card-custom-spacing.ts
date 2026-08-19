import { defineComponent, h } from "vue";
import { LoginCard } from "./login-card";

type ArkPart = Parameters<typeof h>[0];

export const LoginCardCustomSpacing = defineComponent({
  inheritAttrs: false,
  name: "LoginCardCustomSpacing",
  setup() {
    return () =>
      h(LoginCard as ArkPart, {
        class: "[--space:--spacing(2)] md:[--space:--spacing(8)]",
        primaryActionLabel: "Login",
      });
  },
});
