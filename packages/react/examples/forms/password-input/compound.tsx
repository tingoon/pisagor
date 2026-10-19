import { EyeIcon, EyeSlashIcon } from "@phosphor-icons/react";
import { InputGroup, PasswordInput } from "@pisagor/react";

export function Compound() {
  return (
    <PasswordInput.Root className="w-64">
      <PasswordInput.Control asChild>
        <InputGroup>
          <PasswordInput.Input asChild>
            <InputGroup.Input placeholder="Password" />
          </PasswordInput.Input>
          <InputGroup.Addon align="inline-end">
            <PasswordInput.VisibilityTrigger asChild>
              <InputGroup.Button size="icon-xs" variant="ghost">
                <PasswordInput.Indicator fallback={<EyeSlashIcon />}>
                  <EyeIcon />
                </PasswordInput.Indicator>
              </InputGroup.Button>
            </PasswordInput.VisibilityTrigger>
          </InputGroup.Addon>
        </InputGroup>
      </PasswordInput.Control>
    </PasswordInput.Root>
  );
}
