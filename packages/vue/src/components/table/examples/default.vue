<script setup lang="ts">
import { Badge } from "@pisagor/vue";
import { Table } from "..";
import { workspaceUsers } from "./helpers";
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
