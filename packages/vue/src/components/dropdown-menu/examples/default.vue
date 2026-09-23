<script lang="ts" setup >
import { PhArchive, PhPaperPlaneTilt } from "@phosphor-icons/vue";
import { Button } from "@pisagor/vue";
import { DropdownMenu } from "..";
</script>

<template>
        <DropdownMenu>
          <DropdownMenu.Trigger as-child>
            <Button variant="outline">Open</Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content class="w-40">
            <DropdownMenu.ItemGroup>
              <DropdownMenu.Item value="forward">
                <PhPaperPlaneTilt /> Forward
                <DropdownMenu.Shortcut>⌘F</DropdownMenu.Shortcut>
              </DropdownMenu.Item>
              <DropdownMenu.Item value="archive">
                <PhArchive /> Archive
              </DropdownMenu.Item>
            </DropdownMenu.ItemGroup>
          </DropdownMenu.Content>
        </DropdownMenu>
  
</template>
