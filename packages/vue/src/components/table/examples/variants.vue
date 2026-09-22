<script setup lang="ts">
import { Table } from "..";
import { workspaceUsers } from "./helpers";
</script>

<template>
        <div class="flex flex-col gap-2">
          <Table variant="plain">
            <Table.Caption class="sr-only">Default table variant.</Table.Caption>
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

          <Table variant="striped">
            <Table.Caption class="sr-only">Striped table variant.</Table.Caption>
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
        </div>
  
</template>
