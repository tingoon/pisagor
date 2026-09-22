<script setup lang="ts">
import { PhInfo } from "@phosphor-icons/vue";
import { Button, Popover } from "@pisagor/vue";
import { DataList } from "..";

const data = [
  {
    info: "Total new user signups this month",
    label: "New users",
    value: "234",
  },
  { info: "Revenue from product sales", label: "Sales", value: "£12,340" },
  {
    info: "Total revenue in the last quarter",
    label: "Revenue",
    value: "3,450",
  },
];
</script>

<template>
        <div class="w-96 rounded-xl border bg-card p-4">
          <DataList.Root>
            <DataList.Item
              v-for="item in data"
              :classNames="{ label: 'inline-flex items-center gap-1.5' }"
              :key="item.label"
              :value="item.value"
            >
              {{ item.label }}
              <Popover :modal="false" :positioning="{ placement: 'top' }">
                <Popover.Trigger :asChild="true">
                  <Button :aria-label="'Info about ' + item.label" size="icon-sm" variant="ghost">
                    <PhInfo />
                  </Button>
                </Popover.Trigger>
                <Popover.Content class="w-max text-sm">{{ item.info }}</Popover.Content>
              </Popover>
            </DataList.Item>
          </DataList.Root>
        </div>
  
</template>
