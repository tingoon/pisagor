<script lang="ts">
  import { RadioGroup } from "@pisagor/svelte";
</script>

<RadioGroup.Root defaultValue="1">
  <RadioGroup.Item value="1">
    <RadioGroup.ItemControl />
    <RadioGroup.ItemText>Default</RadioGroup.ItemText>
    <RadioGroup.ItemHiddenInput />
  </RadioGroup.Item>
  <RadioGroup.Item value="2">
    <RadioGroup.ItemControl />
    <RadioGroup.ItemText>Comfortable</RadioGroup.ItemText>
    <RadioGroup.ItemHiddenInput />
  </RadioGroup.Item>
  <RadioGroup.Item value="3">
    <RadioGroup.ItemControl />
    <RadioGroup.ItemText>Compact</RadioGroup.ItemText>
    <RadioGroup.ItemHiddenInput />
  </RadioGroup.Item>
</RadioGroup.Root>
