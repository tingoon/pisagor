<script lang="ts">
import { Field, PasswordInput } from "@pisagor/svelte";
import { cn } from "@pisagor/utils";
import CheckIcon from "phosphor-svelte/lib/CheckIcon";
import XIcon from "phosphor-svelte/lib/XIcon";
import {
  passwordStrengthBlock,
  passwordStrengthTone,
} from "#/recipes/blocks/password";

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

interface Props {
  class?: string;
}
let { class: className }: Props = $props();

let password = $state("");
const requirements = $derived(checkPasswordRequirements(password));
const strengthScore = $derived(requirements.filter((r) => r.met).length);
const id = "password-strength";
</script>

<div class={cn(styles.root(), className)}>
  <Field>
    <Field.Label for={id}>Secure password</Field.Label>
    <PasswordInput
      aria-describedby={`${id}-description`}
      autocomplete="new-password"
      {id}
      onValueChange={(value: string) => (password = value)}
      placeholder="Create a strong password"
      value={password}
    />
  </Field>

  <div
    aria-label="Password strength"
    aria-valuemax={PASSWORD_REQUIREMENTS.length}
    aria-valuemin={0}
    aria-valuenow={strengthScore}
    class={styles.meter()}
    role="progressbar"
  >
    {#each PASSWORD_REQUIREMENTS as _requirement, index}
      <div
        class={passwordStrengthBlock({
          tone:
            index < strengthScore
              ? passwordStrengthTone(strengthScore)
              : "idle",
        }).segment()}
      ></div>
    {/each}
  </div>

  <div class={styles.summary()}>
    <p class={styles.summaryLabel()} id={`${id}-description`}>
      {getStrengthText(strengthScore)}
    </p>
    <span class={styles.count()}>
      {strengthScore}/{PASSWORD_REQUIREMENTS.length}
      requirements met
    </span>
  </div>

  <ul aria-label="Password requirements" class={styles.list()}>
    {#each requirements as requirement}
      <li class={styles.item()}>
        {#if requirement.met}
          <CheckIcon aria-hidden class={styles.metIcon()} />
        {:else}
          <XIcon aria-hidden class={styles.unmetIcon()} />
        {/if}
        <span
          class={passwordStrengthBlock({ met: requirement.met }).requirement()}
        >
          {requirement.text}
          <span class={styles.srOnly()}>
            {requirement.met ? " — Requirement met" : " — Requirement not met"}
          </span>
        </span>
      </li>
    {/each}
  </ul>
</div>
