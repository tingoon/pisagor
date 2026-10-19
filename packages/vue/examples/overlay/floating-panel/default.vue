<script lang="ts" setup>
import { createListCollection } from "@ark-ui/vue";
import { PhGearSix, PhMinus, PhPlus } from "@phosphor-icons/vue";
import {
  Button,
  Field,
  FloatingPanel,
  Input,
  NumberInput,
  Select,
} from "@pisagor/vue";

const collection = createListCollection({
  items: ["Inter", "Roboto", "Helvetica", "Geist"],
});
</script>

<template>
  <FloatingPanel :default-size="{ height: 300, width: 360 }" title="Settings">
    <template #trigger><Button variant="outline">Open</Button></template>
    <template #icon><PhGearSix /></template>
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
      <NumberInput.Root class="w-full" default-value="16">
        <NumberInput.Control>
          <NumberInput.DecrementTrigger as-child>
            <Button variant="ghost">
              <PhMinus aria-hidden />
            </Button>
          </NumberInput.DecrementTrigger>
          <NumberInput.Input as-child>
            <Input />
          </NumberInput.Input>
          <NumberInput.IncrementTrigger as-child>
            <Button variant="ghost">
              <PhPlus aria-hidden />
            </Button>
          </NumberInput.IncrementTrigger>
        </NumberInput.Control>
      </NumberInput.Root>
    </Field>
    <template #actions><Button variant="outline">Save</Button></template>
  </FloatingPanel>
</template>
