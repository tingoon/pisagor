<script lang="ts" setup>
import { PhCaretDown } from "@phosphor-icons/vue";
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
        <NavigationMenu.Trigger>
          Products
          <NavigationMenu.Indicator>
            <PhCaretDown />
          </NavigationMenu.Indicator>
        </NavigationMenu.Trigger>
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
