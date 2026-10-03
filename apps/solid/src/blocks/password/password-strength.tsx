/** @jsxImportSource solid-js */

import {
  passwordStrengthBlock,
  passwordStrengthTone,
} from "@pisagor/recipes/blocks/password";
import { Field, PasswordInput } from "@pisagor/solid";
import { CheckIcon, XIcon } from "@pisagor/solid/icons";
import { cn } from "@pisagor/utils";
import { createSignal, createUniqueId, For, Show } from "solid-js";

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

export function PasswordStrength(props: PasswordStrengthProps) {
  const id = createUniqueId();
  const [password, setPassword] = createSignal("");
  const requirements = () => checkPasswordRequirements(password());
  const strengthScore = () =>
    requirements().filter((requirement) => requirement.met).length;

  return (
    <div class={cn(styles.root(), props.class)}>
      <Field>
        <Field.Label for={id}>Secure password</Field.Label>
        <PasswordInput
          aria-describedby={`${id}-description`}
          autocomplete="new-password"
          id={id}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Create a strong password"
          value={password()}
        />
      </Field>

      <div
        aria-label="Password strength"
        aria-valuemax={PASSWORD_REQUIREMENTS.length}
        aria-valuemin={0}
        aria-valuenow={strengthScore()}
        class={styles.meter()}
        role="progressbar"
      >
        <For each={PASSWORD_REQUIREMENTS}>
          {(_requirement, index) => (
            <div
              class={passwordStrengthBlock({
                tone:
                  index() < strengthScore()
                    ? passwordStrengthTone(strengthScore())
                    : "idle",
              }).segment()}
            />
          )}
        </For>
      </div>

      <div class={styles.summary()}>
        <p class={styles.summaryLabel()} id={`${id}-description`}>
          {getStrengthText(strengthScore())}
        </p>
        <span class={styles.count()}>
          {strengthScore()}/{PASSWORD_REQUIREMENTS.length} requirements met
        </span>
      </div>

      <ul aria-label="Password requirements" class={styles.list()}>
        <For each={requirements()}>
          {(requirement) => (
            <li class={styles.item()}>
              <Show
                fallback={<XIcon aria-hidden class={styles.unmetIcon()} />}
                when={requirement.met}
              >
                <CheckIcon aria-hidden class={styles.metIcon()} />
              </Show>
              <span
                class={passwordStrengthBlock({
                  met: requirement.met,
                }).requirement()}
              >
                {requirement.text}
                <span class={styles.srOnly()}>
                  {requirement.met
                    ? " — Requirement met"
                    : " — Requirement not met"}
                </span>
              </span>
            </li>
          )}
        </For>
      </ul>
    </div>
  );
}
