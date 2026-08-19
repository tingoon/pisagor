import { PhCheck, PhEye, PhEyeSlash, PhX } from "@phosphor-icons/vue";
import { cn } from "@pisagor/utils";
import { computed, defineComponent, h, ref, useId } from "vue";

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

function getStrengthColor(score: number) {
  if (score === 0) return "bg-border";
  if (score <= 1) return "bg-red-500";
  if (score <= 2) return "bg-orange-500";
  if (score <= 3) return "bg-amber-500";
  if (score <= 4) return "bg-green-500";
  return "bg-emerald-500";
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

    const requirements = computed(() => checkPasswordRequirements(password.value));
    const strengthScore = computed(
      () => requirements.value.filter((requirement) => requirement.met).length,
    );

    return () =>
      h("div", { class: cn("w-full max-w-xs", props.class) }, [
        h("div", { class: "flex flex-col gap-1.5" }, [
          h(
            "label",
            {
              class: "font-medium text-sm",
              for: id,
            },
            "Secure password",
          ),
          h("div", { class: "relative" }, [
            h("input", {
              "aria-describedby": `${id}-description`,
              autocomplete: "new-password",
              class: cn(
                "h-8 w-full rounded-lg border border-input bg-transparent px-3 pe-9 text-sm shadow-xs/5",
                "outline-hidden focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-ring/32",
              ),
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
                "aria-label": showPassword.value ? "Hide password" : "Show password",
                class: cn(
                  "absolute inset-y-0 end-0 flex items-center px-2.5 text-muted-foreground",
                  "hover:text-foreground",
                ),
                onClick: () => {
                  showPassword.value = !showPassword.value;
                },
                type: "button",
              },
              () => [
                showPassword.value
                  ? h(PhEyeSlash, { class: "size-4" })
                  : h(PhEye, { class: "size-4" }),
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
            class: "mt-3 mb-4 flex gap-1",
            role: "progressbar",
          },
          PASSWORD_REQUIREMENTS.map((requirement, index) =>
            h("div", {
              class: cn(
                "h-1 flex-1 rounded-full transition-colors duration-500",
                index < strengthScore.value ? getStrengthColor(strengthScore.value) : "bg-border",
              ),
              key: requirement.text,
            }),
          ),
        ),

        h("div", { class: "mb-3 flex items-center justify-between" }, [
          h(
            "p",
            {
              class: "font-medium text-foreground text-sm",
              id: `${id}-description`,
            },
            getStrengthText(strengthScore.value),
          ),
          h(
            "span",
            { class: "text-muted-foreground text-xs" },
            `${strengthScore.value}/${PASSWORD_REQUIREMENTS.length} requirements met`,
          ),
        ]),

        h(
          "ul",
          {
            "aria-label": "Password requirements",
            class: "space-y-1.5",
          },
          requirements.value.map((requirement) =>
            h("li", { class: "flex items-center gap-1.5", key: requirement.text }, [
              requirement.met
                ? h(PhCheck, { "aria-hidden": true, class: "size-3.5 text-emerald-500" })
                : h(PhX, { "aria-hidden": true, class: "size-3.5 text-muted-foreground/60" }),
              h(
                "span",
                {
                  class: cn(
                    "text-xs transition-colors",
                    requirement.met ? "text-emerald-600" : "text-muted-foreground",
                  ),
                },
                [
                  requirement.text,
                  h(
                    "span",
                    { class: "sr-only" },
                    requirement.met ? " — Requirement met" : " — Requirement not met",
                  ),
                ],
              ),
            ]),
          ),
        ),
      ]);
  },
});
