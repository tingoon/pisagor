<script lang="ts" setup>
import { Table } from "@pisagor/vue";
import { workspaceUsers } from "./helpers";

const sizes = ["sm", "md", "lg"] as const;
const users = workspaceUsers.slice(0, 2);
</script>

<template>
  <div class="flex flex-col gap-4">
    <Table v-for="size in sizes" :key="size" :size="size">
      <Table.Header>
        <Table.Row>
          <Table.Head>Name</Table.Head>
          <Table.Head>Email</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row v-for="user in users" :key="user.id">
          <Table.Cell>{{ user.name }}</Table.Cell>
          <Table.Cell>{{ user.email }}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </div>
</template>
