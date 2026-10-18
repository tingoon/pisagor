<script lang="ts" setup>
import { PhGear, PhHouse, PhUser } from "@phosphor-icons/vue";
import { BottomNavigation } from "@pisagor/vue";
</script>

<template>
  <BottomNavigation class="fixed inset-x-0 bottom-0 border-t" value="home">
    <BottomNavigation.List>
      <BottomNavigation.Item href="#home" value="home">
        <BottomNavigation.ItemIcon><PhHouse /></BottomNavigation.ItemIcon>
        <BottomNavigation.ItemLabel>Home</BottomNavigation.ItemLabel>
      </BottomNavigation.Item>
      <BottomNavigation.Item href="#profile" value="profile">
        <BottomNavigation.ItemIcon><PhUser /></BottomNavigation.ItemIcon>
        <BottomNavigation.ItemLabel>Profile</BottomNavigation.ItemLabel>
      </BottomNavigation.Item>
      <BottomNavigation.Item href="#settings" value="settings">
        <BottomNavigation.ItemIcon><PhGear /></BottomNavigation.ItemIcon>
        <BottomNavigation.ItemLabel>Settings</BottomNavigation.ItemLabel>
      </BottomNavigation.Item>
    </BottomNavigation.List>
  </BottomNavigation>
</template>
