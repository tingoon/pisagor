import { Checkbox } from "@pisagor/solid";
import { CheckIcon, MinusIcon } from "@squidlab/phosphor-solid/icons";

export function Compound() {
  return (
    <Checkbox.Root defaultChecked>
      <Checkbox.Control>
        <Checkbox.Indicator>
          <CheckIcon />
        </Checkbox.Indicator>
        <Checkbox.Indicator indeterminate>
          <MinusIcon />
        </Checkbox.Indicator>
      </Checkbox.Control>
      <Checkbox.Label>Accept terms and conditions</Checkbox.Label>
      <Checkbox.HiddenInput />
    </Checkbox.Root>
  );
}
