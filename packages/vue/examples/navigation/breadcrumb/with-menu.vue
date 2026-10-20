<script lang="ts" setup>
import { PhCaretRight, PhDotsThree } from "@phosphor-icons/vue";
import { Breadcrumb, Button, DropdownMenu } from "@pisagor/vue";
</script>

<template>
  <Breadcrumb.Root>
    <Breadcrumb.List>
      <Breadcrumb.Item>
        <Breadcrumb.Link href="https://example.com/">Home</Breadcrumb.Link>
      </Breadcrumb.Item>
      <Breadcrumb.Separator>
        <PhCaretRight />
      </Breadcrumb.Separator>
      <Breadcrumb.Item>
        <DropdownMenu.Root :positioning="{ placement: 'bottom-start' }">
          <DropdownMenu.Trigger as-child>
            <Button
              aria-label="Open menu to view more breadcrumb items"
              size="icon-sm"
              variant="ghost"
            >
              <Breadcrumb.Ellipsis>
                <PhDotsThree aria-hidden="true" />
              </Breadcrumb.Ellipsis>
            </Button>
          </DropdownMenu.Trigger>
          <Teleport to="body">
            <DropdownMenu.Positioner>
              <DropdownMenu.Content class="w-40">
                <DropdownMenu.Item as-child value="docs">
                  <a href="https://example.com/documentation">Documentation</a>
                </DropdownMenu.Item>
                <DropdownMenu.Item as-child value="components">
                  <a href="https://example.com/components">Components</a>
                </DropdownMenu.Item>
                <DropdownMenu.Item as-child value="hooks">
                  <a href="https://example.com/hooks">Hooks</a>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Positioner>
          </Teleport>
        </DropdownMenu.Root>
      </Breadcrumb.Item>
      <Breadcrumb.Separator>
        <PhCaretRight />
      </Breadcrumb.Separator>
      <Breadcrumb.Item>
        <Breadcrumb.Link href="https://example.com/">Products</Breadcrumb.Link>
      </Breadcrumb.Item>
      <Breadcrumb.Separator>
        <PhCaretRight />
      </Breadcrumb.Separator>
      <Breadcrumb.Item>
        <Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
      </Breadcrumb.Item>
    </Breadcrumb.List>
  </Breadcrumb.Root>
</template>
