<script lang="ts" setup >
import { PhCopy, PhPencil, PhShare } from "@phosphor-icons/vue";
import { Button } from "@pisagor/vue";
import { DropdownMenu } from "..";
</script>

<template>
        <DropdownMenu>
          <DropdownMenu.Trigger as-child>
            <Button variant="outline">Open</Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content class="w-40">
            <DropdownMenu.Item value="edit">
              <PhPencil />
              Edit
            </DropdownMenu.Item>
            <DropdownMenu.Item value="copy">
              <PhCopy />
              Copy
            </DropdownMenu.Item>
            <DropdownMenu.Item value="share">
              <PhShare />
              Share
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu>
  
</template>
