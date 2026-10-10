<script lang="ts">
import { createListCollection } from "@ark-ui/svelte/collection";
import { floatingPanelRecipe } from "@pisagor/recipes";
import {
  Button,
  Field,
  FloatingPanel,
  NumberInput,
  Select,
} from "@pisagor/svelte";
import GearSixIcon from "phosphor-svelte/lib/GearSixIcon";
import XIcon from "phosphor-svelte/lib/XIcon";
import { tv } from "tailwind-variants";

const brandFloatingPanelRecipe = tv({
  extend: floatingPanelRecipe,
  slots: {
    content: "border-emerald-500/40",
    header: "bg-emerald-500/5",
    title: "text-emerald-900 dark:text-emerald-100",
  },
  variants: {},
});

const collection = createListCollection({
  items: ["Inter", "Roboto", "Helvetica", "Geist"],
});
</script>

<FloatingPanel
  defaultSize={{ height: 300, width: 360 }}
  recipe={brandFloatingPanelRecipe}
>
  <FloatingPanel.Trigger>
    <Button variant="outline">Open</Button>
  </FloatingPanel.Trigger>
  <FloatingPanel.Content>
    <FloatingPanel.Header>
      <GearSixIcon />
      <FloatingPanel.Title>Settings</FloatingPanel.Title>
      <FloatingPanel.Control>
        <FloatingPanel.Minimize />
        <FloatingPanel.Maximize />
        <FloatingPanel.Restore />
        <FloatingPanel.CloseTrigger>
          <Button aria-label="Close" size="icon-xs">
            <XIcon aria-hidden />
          </Button>
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
        <NumberInput class="w-full" defaultValue="16" />
      </Field>
    </FloatingPanel.Body>
    <FloatingPanel.Footer>
      <Button variant="outline">Save</Button>
    </FloatingPanel.Footer>
  </FloatingPanel.Content>
</FloatingPanel>
