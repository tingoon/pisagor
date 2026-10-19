<script lang="ts" setup>
import { PhCopy, PhDotsThree, PhFile, PhFolder } from "@phosphor-icons/vue";
import { DropdownMenu, InputGroup } from "@pisagor/vue";
import { inputGroupWithMenuBlock } from "#/styles/recipes/input-group";

const styles = inputGroupWithMenuBlock();
</script>

<template>
  <InputGroup>
    <InputGroup.Input placeholder="Select file..." />
    <InputGroup.Addon align="inline-end">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger as-child>
          <InputGroup.Button
            aria-label="Open menu"
            size="icon-xs"
            type="button"
            variant="ghost"
          >
            <PhDotsThree aria-hidden="true" />
          </InputGroup.Button>
        </DropdownMenu.Trigger>
        <Teleport to="body">
          <DropdownMenu.Positioner>
            <DropdownMenu.Content :class="styles.menu()">
              <DropdownMenu.Item value="file">
                <PhFile aria-hidden="true" />
                Select file
              </DropdownMenu.Item>
              <DropdownMenu.Item value="folder">
                <PhFolder aria-hidden="true" />
                Select folder
              </DropdownMenu.Item>
              <DropdownMenu.Item value="copy-path">
                <PhCopy aria-hidden="true" />
                Copy path
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Positioner>
        </Teleport>
      </DropdownMenu.Root>
    </InputGroup.Addon>
  </InputGroup>
</template>
