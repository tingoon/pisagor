<script lang="ts">
  import { createListCollection } from "@ark-ui/svelte";
  import {
    Button,
    Field,
    FloatingPanel,
    NumberInput,
    Select,
  } from "@pisagor/svelte";
  import { GearSixIcon } from "phosphor-svelte";

  const collection = createListCollection({
    items: ["Inter", "Roboto", "Helvetica", "Geist"],
  });
</script>

<FloatingPanel defaultSize={{ height: 300, width: 360 }} title="Settings">
  {#snippet trigger(props)}
    <Button {...props()} variant="outline">Open</Button>
  {/snippet}
  {#snippet icon()}
    <GearSixIcon />
  {/snippet}
  {#snippet actions()}
    <Button variant="outline">Save</Button>
  {/snippet}

  <Field>
    <Field.Label>Font family</Field.Label>
    <Select.Root {collection} defaultValue={["Inter"]}>
      <Select.Trigger class="w-full">
        <Select.ValueText />
      </Select.Trigger>
      <Select.Content>
        {#each collection.items as item}
          <Select.Item {item}>{item}</Select.Item>
        {/each}
      </Select.Content>
    </Select.Root>
  </Field>
  <Field>
    <Field.Label>Font size</Field.Label>
    <NumberInput class="w-full" defaultValue="16" />
  </Field>
</FloatingPanel>
