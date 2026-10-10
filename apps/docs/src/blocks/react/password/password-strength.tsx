import { CheckIcon, XIcon } from "@phosphor-icons/react";
import { Field, PasswordInput } from "@pisagor/react";
import { cn } from "@pisagor/utils";
import { useId, useState } from "react";
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

export interface PasswordStrengthProps {
  className?: string;
}

export function PasswordStrength({ className }: PasswordStrengthProps) {
  const id = useId();
  const [password, setPassword] = useState("");
  const requirements = checkPasswordRequirements(password);
  const strengthScore = requirements.filter(
    (requirement) => requirement.met,
  ).length;

  return (
    <div className={cn(styles.root(), className)}>
      <Field>
        <Field.Label htmlFor={id}>Secure password</Field.Label>
        <PasswordInput
          aria-describedby={`${id}-description`}
          autoComplete="new-password"
          id={id}
          onValueChange={setPassword}
          placeholder="Create a strong password"
          value={password}
        />
      </Field>

      <div
        aria-label="Password strength"
        aria-valuemax={PASSWORD_REQUIREMENTS.length}
        aria-valuemin={0}
        aria-valuenow={strengthScore}
        className={styles.meter()}
        role="progressbar"
      >
        {PASSWORD_REQUIREMENTS.map((requirement, index) => (
          <div
            className={passwordStrengthBlock({
              tone:
                index < strengthScore
                  ? passwordStrengthTone(strengthScore)
                  : "idle",
            }).segment()}
            key={requirement.text}
          />
        ))}
      </div>

      <div className={styles.summary()}>
        <p className={styles.summaryLabel()} id={`${id}-description`}>
          {getStrengthText(strengthScore)}
        </p>
        <span className={styles.count()}>
          {strengthScore}/{PASSWORD_REQUIREMENTS.length} requirements met
        </span>
      </div>

      <ul aria-label="Password requirements" className={styles.list()}>
        {requirements.map((requirement) => (
          <li className={styles.item()} key={requirement.text}>
            {requirement.met ? (
              <CheckIcon aria-hidden className={styles.metIcon()} />
            ) : (
              <XIcon aria-hidden className={styles.unmetIcon()} />
            )}
            <span
              className={passwordStrengthBlock({
                met: requirement.met,
              }).requirement()}
            >
              {requirement.text}
              <span className={styles.srOnly()}>
                {requirement.met
                  ? " — Requirement met"
                  : " — Requirement not met"}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
