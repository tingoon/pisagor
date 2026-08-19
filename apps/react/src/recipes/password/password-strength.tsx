import { CheckIcon, XIcon } from "@phosphor-icons/react";
import { Field } from "@pisagor/react/field";
import { PasswordInput } from "@pisagor/react/password-input";
import { cn } from "@pisagor/utils";
import { useId, useMemo, useState } from "react";

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
  className?: string;
}

export function PasswordStrength({ className }: PasswordStrengthProps) {
  const id = useId();
  const [password, setPassword] = useState("");
  const requirements = checkPasswordRequirements(password);
  const strengthScore = useMemo(
    () => requirements.filter((requirement) => requirement.met).length,
    [requirements],
  );

  return (
    <div className={cn("w-full max-w-xs", className)}>
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
        className="mt-3 mb-4 flex gap-1"
        role="progressbar"
      >
        {PASSWORD_REQUIREMENTS.map((requirement, index) => (
          <div
            className={cn(
              "h-1 flex-1 rounded-full transition-colors duration-500",
              index < strengthScore ? getStrengthColor(strengthScore) : "bg-border",
            )}
            key={requirement.text}
          />
        ))}
      </div>

      <div className="mb-3 flex items-center justify-between">
        <p className="font-medium text-foreground text-sm" id={`${id}-description`}>
          {getStrengthText(strengthScore)}
        </p>
        <span className="text-muted-foreground text-xs">
          {strengthScore}/{PASSWORD_REQUIREMENTS.length} requirements met
        </span>
      </div>

      <ul aria-label="Password requirements" className="space-y-1.5">
        {requirements.map((requirement) => (
          <li className="flex items-center gap-1.5" key={requirement.text}>
            {requirement.met ? (
              <CheckIcon aria-hidden className="size-3.5 text-emerald-500" />
            ) : (
              <XIcon aria-hidden className="size-3.5 text-muted-foreground/60" />
            )}
            <span
              className={cn(
                "text-xs transition-colors",
                requirement.met ? "text-emerald-600" : "text-muted-foreground",
              )}
            >
              {requirement.text}
              <span className="sr-only">
                {requirement.met ? " — Requirement met" : " — Requirement not met"}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
