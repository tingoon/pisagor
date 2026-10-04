<script lang="ts">
import { createListCollection } from "@ark-ui/svelte/collection";
import { Button, Field, NumberInput, Select } from "@pisagor/svelte";
import { FloatingPanel } from "@pisagor/svelte/floating-panel";
import GearSixIcon from "phosphor-svelte/lib/GearSixIcon";
import XIcon from "phosphor-svelte/lib/XIcon";

const collection = createListCollection({
  items: ["Inter", "Roboto", "Helvetica", "Geist"],
});
</script>

<FloatingPanel defaultSize={{ height: 300, width: 360 }}>
  <FloatingPanel.Trigger>
    {#snippet asChild(props)}
      <Button {...props()} variant="outline">Open</Button>
    {/snippet}
  </FloatingPanel.Trigger>
  <FloatingPanel.Content class="[--space:--spacing(3)] sm:[--space:--spacing(6)]">
    <FloatingPanel.Header>
      <GearSixIcon />
      <FloatingPanel.Title>Settings</FloatingPanel.Title>
      <FloatingPanel.Control>
        <FloatingPanel.Minimize />
        <FloatingPanel.Maximize />
        <FloatingPanel.Restore />
        <FloatingPanel.CloseTrigger>
          {#snippet asChild(props)}
            <Button {...props()} aria-label="Close" size="icon-xs">
              <XIcon aria-hidden />
            </Button>
          {/snippet}
        </FloatingPanel.CloseTrigger>
      </FloatingPanel.Control>
    </FloatingPanel.Header>
    <FloatingPanel.Body>
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
        <NumberInput class="w-full" defaultValue="16">
          <NumberInput.Control>
            <NumberInput.DecrementTrigger />
            <NumberInput.Input />
            <NumberInput.IncrementTrigger />
          </NumberInput.Control>
        </NumberInput>
      </Field>
    </FloatingPanel.Body>
    <FloatingPanel.Footer>
      <Button variant="outline">Save</Button>
    </FloatingPanel.Footer>
  </FloatingPanel.Content>
</FloatingPanel>
