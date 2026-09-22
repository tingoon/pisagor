<script setup lang="ts">
import { Table } from "..";
import { workspaceUsers } from "./helpers";
</script>

<template>
        <Table :isHoverable="false">
          <Table.Caption class="sr-only">Table with row hover disabled (isHoverable=false).</Table.Caption>
          <Table.Header>
            <Table.Row>
              <Table.Head>Name</Table.Head>
              <Table.Head>Email</Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row v-for="user in workspaceUsers.slice(0, 3)" :key="user.id">
              <Table.Cell>{{ user.name }}</Table.Cell>
              <Table.Cell>{{ user.email }}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
  
</template>
