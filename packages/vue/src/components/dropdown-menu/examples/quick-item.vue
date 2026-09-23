<script lang="ts" setup >
import {
  PhArrowClockwise,
  PhChatCircle,
  PhCopy,
  PhHand,
  PhPencil,
  PhShare,
} from "@phosphor-icons/vue";
import { Button } from "@pisagor/vue";
import { DropdownMenu } from "..";
</script>

<template>
        <DropdownMenu>
          <DropdownMenu.Trigger as-child>
            <Button variant="outline">Open</Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content class="w-44">
            <DropdownMenu.ItemGroup heading="Actions">
              <DropdownMenu.Item value="edit">
                <PhPencil />
                Edit
              </DropdownMenu.Item>
              <DropdownMenu.Item value="add-action">
                <PhArrowClockwise />
                Add Action
              </DropdownMenu.Item>
              <DropdownMenu.Item value="key-point">
                <PhHand />
                Key Point
              </DropdownMenu.Item>
              <DropdownMenu.Item value="comment">
                <PhChatCircle />
                Comment
              </DropdownMenu.Item>
            </DropdownMenu.ItemGroup>
            <DropdownMenu.Separator />
            <div class="flex w-full gap-1">
              <DropdownMenu.QuickItem class="min-w-0 flex-1" value="copy">
                <PhCopy />
                Copy
              </DropdownMenu.QuickItem>
              <DropdownMenu.QuickItem class="min-w-0 flex-1" value="share">
                <PhShare />
                Share
              </DropdownMenu.QuickItem>
            </div>
          </DropdownMenu.Content>
        </DropdownMenu>
  
</template>
