<script lang="ts" setup>
import { Field } from "@pisagor/vue";
import { Checkbox } from "..";
</script>

<template>
  <Field.Set>
    <Field.Legend variant="label"
      >Show these items on the desktop:</Field.Legend
    >
    <Field.Description
      >Select the items you want to show on the desktop.</Field.Description
    >
    <Field.Group>
      <Checkbox.Group
        class="gap-3"
        :default-value="['hard-disks', 'external-disks']"
      >
        <Field orientation="horizontal">
          <Checkbox default-checked value="hard-disks" />
          <Field.Label class="font-normal">Hard disks</Field.Label>
        </Field>
        <Field orientation="horizontal">
          <Checkbox default-checked value="external-disks" />
          <Field.Label class="font-normal">External disks</Field.Label>
        </Field>
        <Field orientation="horizontal">
          <Checkbox value="cds-dvds-ipods" />
          <Field.Label class="font-normal">CDs, DVDs, and iPods</Field.Label>
        </Field>
        <Field orientation="horizontal">
          <Checkbox value="connected-servers" />
          <Field.Label class="font-normal">Connected servers</Field.Label>
        </Field>
      </Checkbox.Group>
    </Field.Group>
  </Field.Set>
</template>
