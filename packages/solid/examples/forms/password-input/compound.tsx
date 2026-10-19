import { InputGroup, PasswordInput } from "@pisagor/solid";
import { EyeIcon, EyeSlashIcon } from "@squidlab/phosphor-solid/icons";

export function Compound() {
  return (
    <PasswordInput.Root class="w-64">
      <PasswordInput.Control
        asChild={(controlProps) => (
          <InputGroup {...controlProps()}>
            <PasswordInput.Input
              asChild={(inputProps) => (
                <InputGroup.Input {...inputProps()} placeholder="Password" />
              )}
            />
            <InputGroup.Addon align="inline-end">
              <PasswordInput.VisibilityTrigger
                asChild={(triggerProps) => (
                  <InputGroup.Button
                    {...triggerProps()}
                    size="icon-xs"
                    variant="ghost"
                  >
                    <PasswordInput.Indicator fallback={<EyeSlashIcon />}>
                      <EyeIcon />
                    </PasswordInput.Indicator>
                  </InputGroup.Button>
                )}
              />
            </InputGroup.Addon>
          </InputGroup>
        )}
      />
    </PasswordInput.Root>
  );
}
