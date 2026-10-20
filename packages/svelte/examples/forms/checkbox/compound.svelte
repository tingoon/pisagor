<script lang="ts">
  import { Checkbox } from "@pisagor/svelte";
  import { CheckIcon, MinusIcon } from "phosphor-svelte";
</script>

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
