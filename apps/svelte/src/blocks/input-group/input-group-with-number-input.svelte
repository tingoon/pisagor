<script lang="ts">
import { InputGroup, NumberInput } from "@pisagor/svelte";
</script>

<InputGroup>
  <NumberInput aria-label="Enter the amount" value="10">
    <NumberInput.Input />
  </NumberInput>
  <InputGroup.Addon>
    <InputGroup.Text>€</InputGroup.Text>
  </InputGroup.Addon>
  <InputGroup.Addon align="inline-end">
    <InputGroup.Text>EUR</InputGroup.Text>
  </InputGroup.Addon>
</InputGroup>
