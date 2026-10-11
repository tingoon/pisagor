<script lang="ts" setup>
import { Avatar, Button, Popover } from "@pisagor/vue";
import { avatarGroupOverflowBlock } from "#/recipes/blocks/overlay";

const styles = avatarGroupOverflowBlock();

const users = [
  {
    fallback: "JD",
    name: "Jane Doe",
    src: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    fallback: "JD",
    name: "John Doe",
    src: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    fallback: "JD",
    name: "Jane Doe",
    src: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    fallback: "JD",
    name: "John Doe",
    src: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];
</script>

<template>
  <div :class="styles.root()">
    <div :class="styles.row()">
      <Avatar
        v-for="user in users"
        :key="user.src"
        :alt="user.name"
        :fallback="user.fallback"
        :src="user.src"
      />
    </div>
    <Popover :positioning="{ placement: 'bottom-end' }">
      <Popover.Trigger as-child>
        <Button pill size="icon-md" type="button" variant="ghost">+5</Button>
      </Popover.Trigger>
      <Popover.Content>
        <Popover.Body>
          <div :class="styles.row()">
            <Avatar
              v-for="user in users"
              :key="user.src"
              :alt="user.name"
              :fallback="user.fallback"
              :src="user.src"
            />
          </div>
        </Popover.Body>
      </Popover.Content>
    </Popover>
  </div>
</template>
