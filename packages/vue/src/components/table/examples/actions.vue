<script lang="ts" setup >
import { PhDotsThreeVertical, PhEye, PhPencilSimple, PhTrash } from "@phosphor-icons/vue";

import { Button, DropdownMenu } from "@pisagor/vue";
import { Table } from "..";
import { workspaceUsers } from "./helpers";
</script>

<template>
        <Table>
          <Table.Caption class="sr-only">Users with row actions (edit, delete).</Table.Caption>
          <Table.Header>
            <Table.Row>
              <Table.Head>Name</Table.Head>
              <Table.Head>Email</Table.Head>
              <Table.Head class="text-right">Actions</Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row v-for="user in workspaceUsers.slice(0, 3)" :key="user.id">
              <Table.Cell class="font-medium">{{ user.name }}</Table.Cell>
              <Table.Cell>{{ user.email }}</Table.Cell>
              <Table.Cell class="text-right">
                <DropdownMenu :positioning="{ placement: 'left-end' }">
                  <DropdownMenu.Trigger as-child>
                    <Button size="icon-sm" variant="outline">
                      <PhDotsThreeVertical />
                    </Button>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content class="min-w-40">
                    <DropdownMenu.Item value="view">
                      <PhEye />
                      View
                      <DropdownMenu.Shortcut>⌘ V</DropdownMenu.Shortcut>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item value="edit">
                      <PhPencilSimple />
                      Edit
                      <DropdownMenu.Shortcut>⌘ E</DropdownMenu.Shortcut>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item value="delete" variant="destructive">
                      <PhTrash />
                      Delete
                      <DropdownMenu.Shortcut>⌘ ⌫</DropdownMenu.Shortcut>
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
  
</template>
