<script lang="ts" setup>
import { PhCheck, PhEye, PhEyeSlash, PhX } from "@phosphor-icons/vue";
import { cn } from "@pisagor/utils";
import { computed, ref, useId } from "vue";
import {
  passwordStrengthBlock,
  passwordStrengthTone,
} from "#/styles/recipes/password";

const props = defineProps<{ class?: string }>();

const styles = passwordStrengthBlock();

const PASSWORD_REQUIREMENTS = [
  { regex: /.{8,}/, text: "At least 8 characters" },
  { regex: /[0-9]/, text: "At least 1 number" },
  { regex: /[a-z]/, text: "At least 1 lowercase letter" },
  { regex: /[A-Z]/, text: "At least 1 uppercase letter" },
  { regex: /[!@#$%^&*(),.?":{}|<>]/, text: "At least 1 special character" },
] as const;

const id = useId();
const password = ref("");
const showPassword = ref(false);

const requirements = computed(() =>
  PASSWORD_REQUIREMENTS.map((requirement) => ({
    met: requirement.regex.test(password.value),
    text: requirement.text,
  })),
);
const strengthScore = computed(
  () => requirements.value.filter((requirement) => requirement.met).length,
);
const strengthText = computed(() => {
  const score = strengthScore.value;
  if (score === 0) return "Enter a password";
  if (score <= 2) return "Weak security";
  if (score <= 4) return "Medium security";
  return "Strong security";
});

function segmentClass(index: number) {
  return passwordStrengthBlock({
    tone:
      index < strengthScore.value
        ? passwordStrengthTone(strengthScore.value)
        : "idle",
  }).segment();
}
</script>

<template>
  <div :class="cn(styles.rootNarrow(), props.class)">
    <div :class="styles.field()">
      <label :class="styles.label()" :for="id">Secure password</label>
      <div :class="styles.control()">
        <input
          autocomplete="new-password"
          placeholder="Create a strong password"
          v-model="password"
          :aria-describedby="`${id}-description`"
          :class="styles.input()"
          :id="id"
          :type="showPassword ? 'text' : 'password'"
        />
        <button
          type="button"
          :aria-label="showPassword ? 'Hide password' : 'Show password'"
          :class="styles.toggle()"
          @click="showPassword = !showPassword"
        >
          <PhEyeSlash v-if="showPassword" :class="styles.toggleIcon()" />
          <PhEye v-else :class="styles.toggleIcon()" />
        </button>
      </div>
    </div>

    <div
      aria-label="Password strength"
      aria-valuemin="0"
      role="progressbar"
      :aria-valuemax="PASSWORD_REQUIREMENTS.length"
      :aria-valuenow="strengthScore"
      :class="styles.meter()"
    >
      <div
        v-for="(requirement, index) in PASSWORD_REQUIREMENTS"
        :key="requirement.text"
        :class="segmentClass(index)"
      />
    </div>

    <div :class="styles.summary()">
      <p :class="styles.summaryLabel()" :id="`${id}-description`">
        {{ strengthText }}
      </p>
      <span :class="styles.count()">
        {{ strengthScore }}/{{ PASSWORD_REQUIREMENTS.length }}
        requirements met
      </span>
    </div>

    <ul aria-label="Password requirements" :class="styles.list()">
      <li
        v-for="requirement in requirements"
        :key="requirement.text"
        :class="styles.item()"
      >
        <PhCheck
          aria-hidden="true"
          v-if="requirement.met"
          :class="styles.metIcon()"
        />
        <PhX aria-hidden="true" v-else :class="styles.unmetIcon()" />
        <span
          :class="passwordStrengthBlock({ met: requirement.met }).requirement()"
        >
          {{ requirement.text }}
          <span :class="styles.srOnly()">
            {{
              requirement.met ? " — Requirement met" : " — Requirement not met"
            }}
          </span>
        </span>
      </li>
    </ul>
  </div>
</template>
