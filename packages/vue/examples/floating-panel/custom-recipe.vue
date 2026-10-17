<script lang="ts" setup>
import { createListCollection } from "@ark-ui/vue/collection";
import { PhGearSix, PhX } from "@phosphor-icons/vue";
import { floatingPanelRecipe } from "@pisagor/recipes";
import {
  Button,
  Field,
  FloatingPanel,
  NumberInput,
  Select,
} from "@pisagor/vue";
import { tv } from "tailwind-variants";

const collection = createListCollection({
  items: ["Inter", "Roboto", "Helvetica", "Geist"],
});

const brandFloatingPanelRecipe = tv({
  extend: floatingPanelRecipe,
  slots: {
    content: "border-emerald-500/40",
    header: "bg-emerald-500/5",
    title: "text-emerald-900 dark:text-emerald-100",
  },
  variants: {},
});
</script>

<template>
  <FloatingPanel
    :default-size="{ height: 300, width: 360 }"
    :recipe="brandFloatingPanelRecipe"
  >
    <FloatingPanel.Trigger as-child>
      <Button variant="outline">Open</Button>
    </FloatingPanel.Trigger>
    <FloatingPanel.Content>
      <FloatingPanel.Header>
        <PhGearSix />
        <FloatingPanel.Title>Settings</FloatingPanel.Title>
        <FloatingPanel.Control>
          <FloatingPanel.Minimize />
          <FloatingPanel.Maximize />
          <FloatingPanel.Restore />
          <FloatingPanel.CloseTrigger as-child>
            <Button aria-label="Close" size="icon-xs">
              <PhX aria-hidden="true" />
            </Button>
          </FloatingPanel.CloseTrigger>
        </FloatingPanel.Control>
      </FloatingPanel.Header>
      <FloatingPanel.Body>
        <Field>
          <Field.Label>Font family</Field.Label>
          <Select.Root :collection="collection" :default-value="['Inter']">
            <Select.Trigger class="w-full">
              <Select.ValueText />
            </Select.Trigger>
            <Select.Content>
              <Select.Item
                v-for="item in collection.items"
                :key="item"
                :item="item"
              >
                {{ item }}
              </Select.Item>
            </Select.Content>
          </Select.Root>
        </Field>
        <Field>
          <Field.Label>Font size</Field.Label>
          <NumberInput class="w-full" default-value="16">
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
</template>
