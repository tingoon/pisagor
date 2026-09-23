<script lang="ts" setup >
import { Button } from "@pisagor/vue";
import { DropdownMenu } from "..";
</script>

<template>
        <DropdownMenu>
          <DropdownMenu.Trigger as-child>
            <Button variant="outline">Open</Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content class="w-40">
            <DropdownMenu.RadioItemGroup value="dark">
              <DropdownMenu.RadioItem value="light">Light</DropdownMenu.RadioItem>
              <DropdownMenu.RadioItem value="dark">Dark</DropdownMenu.RadioItem>
              <DropdownMenu.RadioItem value="system">System</DropdownMenu.RadioItem>
            </DropdownMenu.RadioItemGroup>
          </DropdownMenu.Content>
        </DropdownMenu>
  
</template>
