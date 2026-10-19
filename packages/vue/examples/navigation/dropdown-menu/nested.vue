<script lang="ts" setup>
import { PhCaretRight } from "@phosphor-icons/vue";
import { Button, DropdownMenu } from "@pisagor/vue";
</script>

<template>
  <DropdownMenu.Root>
    <DropdownMenu.Trigger as-child>
      <Button variant="outline">Open</Button>
    </DropdownMenu.Trigger>
    <Teleport to="body">
      <DropdownMenu.Positioner>
        <DropdownMenu.Content class="w-40">
          <DropdownMenu.Item value="item-one">Item one</DropdownMenu.Item>
          <DropdownMenu.Sub>
            <DropdownMenu.TriggerItem>
              More
              <DropdownMenu.Indicator>
                <PhCaretRight />
              </DropdownMenu.Indicator>
            </DropdownMenu.TriggerItem>
            <Teleport to="body">
              <DropdownMenu.Positioner>
                <DropdownMenu.Content>
                  <DropdownMenu.Item value="sub-a">
                    Sub item A
                  </DropdownMenu.Item>
                  <DropdownMenu.Item value="sub-b">
                    Sub item B
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Positioner>
            </Teleport>
          </DropdownMenu.Sub>
          <DropdownMenu.Item value="item-two">Item two</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Positioner>
    </Teleport>
  </DropdownMenu.Root>
</template>
