<script lang="ts">
import source from "./table-row-menu.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { PhEye, PhPencil, PhTrash } from "@phosphor-icons/vue";
import { ContextMenu, Table } from "@pisagor/vue";
import { tableRowMenuBlock } from "#/recipes/blocks/table";

defineOptions({ inheritAttrs: false });

const props = defineProps<{ class?: unknown }>();

const styles = tableRowMenuBlock();

const workspaceUsers = [
  { email: "jane.doe@example.com", id: "1", name: "Jane Doe" },
  { email: "john.doe@example.com", id: "2", name: "John Doe" },
  { email: "alex.morgan@example.com", id: "3", name: "Alex Morgan" },
];
</script>

<template>
  <Table :class="props.class">
    <Table.Caption :class="styles.srOnly()">
      Users with row context menu. Right-click a row to open the menu.
    </Table.Caption>
    <Table.Header>
      <Table.Row>
        <Table.Head>Name</Table.Head>
        <Table.Head>Email</Table.Head>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <ContextMenu v-for="user in workspaceUsers" :key="user.id">
        <ContextMenu.ContextTrigger as-child>
          <Table.Row>
            <Table.Cell :class="styles.name()">{{ user.name }}</Table.Cell>
            <Table.Cell>{{ user.email }}</Table.Cell>
          </Table.Row>
        </ContextMenu.ContextTrigger>
        <ContextMenu.Content :class="styles.menu()">
          <ContextMenu.Item value="view">
            <PhEye aria-hidden="true" />
            View
            <ContextMenu.Shortcut>⌘ V</ContextMenu.Shortcut>
          </ContextMenu.Item>
          <ContextMenu.Item value="edit">
            <PhPencil aria-hidden="true" />
            Edit
            <ContextMenu.Shortcut>⌘ E</ContextMenu.Shortcut>
          </ContextMenu.Item>
          <ContextMenu.Item value="delete" variant="destructive">
            <PhTrash aria-hidden="true" />
            Delete
            <ContextMenu.Shortcut>⌘ ⌫</ContextMenu.Shortcut>
          </ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu>
    </Table.Body>
  </Table>
</template>
