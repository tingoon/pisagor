<script lang="ts" setup>
import { Avatar, Button, DropdownMenu } from "@pisagor/vue";
import { itemPickerBlock } from "#/recipes/blocks/overlay";

const styles = itemPickerBlock();

const people = [
  { email: "jane.doe@example.com", id: "jane", username: "jane.doe" },
  { email: "john.doe@example.com", id: "john", username: "john.doe" },
  { email: "alex.morgan@example.com", id: "alex", username: "alex.morgan" },
];
</script>

<template>
  <DropdownMenu>
    <DropdownMenu.Trigger as-child>
      <Button type="button" variant="outline">Choose person</Button>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content :class="styles.content()">
      <DropdownMenu.Item
        v-for="person in people"
        :key="person.id"
        :value="person.username"
      >
        <div :class="styles.row()">
          <Avatar
            alt=""
            size="sm"
            :class="styles.avatar()"
            :fallback="person.username.charAt(0).toUpperCase()"
          />
          <div :class="styles.meta()">
            <div :class="styles.name()">{{ person.username }}</div>
            <div :class="styles.email()">{{ person.email }}</div>
          </div>
        </div>
      </DropdownMenu.Item>
    </DropdownMenu.Content>
  </DropdownMenu>
</template>
