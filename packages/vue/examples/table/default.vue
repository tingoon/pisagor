<script lang="ts">
import source from "./default.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Badge, type BadgeVariant, Table } from "@pisagor/vue";
import { workspaceUsers } from "./helpers";

const statusVariants: Record<string, BadgeVariant> = {
  active: "success",
  inactive: "destructive",
  invited: "info",
};
</script>

<template>
  <Table>
    <Table.Caption>A list of users in your workspace.</Table.Caption>
    <Table.Header>
      <Table.Row>
        <Table.Head>Name</Table.Head>
        <Table.Head>Email</Table.Head>
        <Table.Head>Role</Table.Head>
        <Table.Head class="text-center">Status</Table.Head>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row v-for="user in workspaceUsers" :key="user.id">
        <Table.Cell>{{ user.name }}</Table.Cell>
        <Table.Cell>{{ user.email }}</Table.Cell>
        <Table.Cell>{{ user.role }}</Table.Cell>
        <Table.Cell class="text-center">
          <Badge class="capitalize" :variant="statusVariants[user.status]">
            {{ user.status }}
          </Badge>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
</template>
