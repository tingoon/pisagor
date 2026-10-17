<script lang="ts">
import source from "./submenu.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { NavigationMenu } from "@pisagor/vue";
</script>

<template>
  <NavigationMenu aria-label="Main">
    <NavigationMenu.List>
      <NavigationMenu.Item>
        <NavigationMenu.Link active href="#overview"
          >Overview</NavigationMenu.Link
        >
      </NavigationMenu.Item>
      <NavigationMenu.Item>
        <NavigationMenu.Trigger>Products</NavigationMenu.Trigger>
        <NavigationMenu.Content>
          <li>
            <NavigationMenu.Link href="#analytics"
              >Analytics</NavigationMenu.Link
            >
          </li>
          <li>
            <NavigationMenu.Link href="#automation"
              >Automation</NavigationMenu.Link
            >
          </li>
          <li>
            <NavigationMenu.Link href="#reports">Reports</NavigationMenu.Link>
          </li>
        </NavigationMenu.Content>
      </NavigationMenu.Item>
      <NavigationMenu.Item>
        <NavigationMenu.Link href="#settings">Settings</NavigationMenu.Link>
      </NavigationMenu.Item>
    </NavigationMenu.List>
  </NavigationMenu>
</template>
