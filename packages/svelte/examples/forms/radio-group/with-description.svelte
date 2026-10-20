<script lang="ts">
  import { Field, RadioGroup } from "@pisagor/svelte";
</script>

<RadioGroup.Root defaultValue="all">
  <Field>
    <RadioGroup.Item value="all">
      <RadioGroup.ItemControl />
      <RadioGroup.ItemText>Default</RadioGroup.ItemText>
      <RadioGroup.ItemHiddenInput />
    </RadioGroup.Item>
    <Field.Description>Standard spacing for most use cases.</Field.Description>
  </Field>
  <Field>
    <RadioGroup.Item value="mentions">
      <RadioGroup.ItemControl />
      <RadioGroup.ItemText>Comfortable</RadioGroup.ItemText>
      <RadioGroup.ItemHiddenInput />
    </RadioGroup.Item>
    <Field.Description>More space between elements.</Field.Description>
  </Field>
  <Field>
    <RadioGroup.Item value="none">
      <RadioGroup.ItemControl />
      <RadioGroup.ItemText>Compact</RadioGroup.ItemText>
      <RadioGroup.ItemHiddenInput />
    </RadioGroup.Item>
    <Field.Description>Minimal spacing for dense layouts.</Field.Description>
  </Field>
</RadioGroup.Root>
