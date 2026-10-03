import { PhCheck, PhEye, PhEyeSlash, PhX } from "@phosphor-icons/vue";
import {
  passwordStrengthBlock,
  passwordStrengthTone,
} from "@pisagor/recipes/blocks/password";
import { cn } from "@pisagor/utils";
import { computed, defineComponent, h, ref, useId } from "vue";

const styles = passwordStrengthBlock();

const PASSWORD_REQUIREMENTS = [
  { regex: /.{8,}/, text: "At least 8 characters" },
  { regex: /[0-9]/, text: "At least 1 number" },
  { regex: /[a-z]/, text: "At least 1 lowercase letter" },
  { regex: /[A-Z]/, text: "At least 1 uppercase letter" },
  { regex: /[!@#$%^&*(),.?":{}|<>]/, text: "At least 1 special character" },
] as const;

function checkPasswordRequirements(password: string) {
  return PASSWORD_REQUIREMENTS.map((requirement) => ({
    met: requirement.regex.test(password),
    text: requirement.text,
  }));
}

function getStrengthText(score: number) {
  if (score === 0) return "Enter a password";
  if (score <= 2) return "Weak security";
  if (score <= 4) return "Medium security";
  return "Strong security";
}

export interface PasswordStrengthProps {
  class?: string;
}

export const PasswordStrength = defineComponent({
  name: "PasswordStrength",
  props: {
    class: { default: undefined, type: String },
  },
  setup(props) {
    const id = useId();
    const password = ref("");
    const showPassword = ref(false);

    const requirements = computed(() =>
      checkPasswordRequirements(password.value),
    );
    const strengthScore = computed(
      () => requirements.value.filter((requirement) => requirement.met).length,
    );

    return () =>
      h("div", { class: cn(styles.rootNarrow(), props.class) }, [
        h("div", { class: styles.field() }, [
          h(
            "label",
            {
              class: styles.label(),
              for: id,
            },
            "Secure password",
          ),
          h("div", { class: styles.control() }, [
            h("input", {
              "aria-describedby": `${id}-description`,
              autocomplete: "new-password",
              class: styles.input(),
              id,
              onInput: (event: Event) => {
                password.value = (event.target as HTMLInputElement).value;
              },
              placeholder: "Create a strong password",
              type: showPassword.value ? "text" : "password",
              value: password.value,
            }),
            h(
              "button",
              {
                "aria-label": showPassword.value
                  ? "Hide password"
                  : "Show password",
                class: styles.toggle(),
                onClick: () => {
                  showPassword.value = !showPassword.value;
                },
                type: "button",
              },
              () => [
                showPassword.value
                  ? h(PhEyeSlash, { class: styles.toggleIcon() })
                  : h(PhEye, { class: styles.toggleIcon() }),
              ],
            ),
          ]),
        ]),

        h(
          "div",
          {
            "aria-label": "Password strength",
            "aria-valuemax": PASSWORD_REQUIREMENTS.length,
            "aria-valuemin": 0,
            "aria-valuenow": strengthScore.value,
            class: styles.meter(),
            role: "progressbar",
          },
          PASSWORD_REQUIREMENTS.map((requirement, index) =>
            h("div", {
              class: passwordStrengthBlock({
                tone:
                  index < strengthScore.value
                    ? passwordStrengthTone(strengthScore.value)
                    : "idle",
              }).segment(),
              key: requirement.text,
            }),
          ),
        ),

        h("div", { class: styles.summary() }, [
          h(
            "p",
            {
              class: styles.summaryLabel(),
              id: `${id}-description`,
            },
            getStrengthText(strengthScore.value),
          ),
          h(
            "span",
            { class: styles.count() },
            `${strengthScore.value}/${PASSWORD_REQUIREMENTS.length} requirements met`,
          ),
        ]),

        h(
          "ul",
          {
            "aria-label": "Password requirements",
            class: styles.list(),
          },
          requirements.value.map((requirement) =>
            h("li", { class: styles.item(), key: requirement.text }, [
              requirement.met
                ? h(PhCheck, {
                    "aria-hidden": true,
                    class: styles.metIcon(),
                  })
                : h(PhX, {
                    "aria-hidden": true,
                    class: styles.unmetIcon(),
                  }),
              h(
                "span",
                {
                  class: passwordStrengthBlock({
                    met: requirement.met,
                  }).requirement(),
                },
                [
                  requirement.text,
                  h(
                    "span",
                    { class: styles.srOnly() },
                    requirement.met
                      ? " — Requirement met"
                      : " — Requirement not met",
                  ),
                ],
              ),
            ]),
          ),
        ),
      ]);
  },
});
