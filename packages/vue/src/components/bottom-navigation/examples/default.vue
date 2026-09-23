<script lang="ts" setup >
import { PhGear, PhHouse, PhUser } from "@phosphor-icons/vue";
import { BottomNavigation } from "..";
</script>

<template>
        <BottomNavigation class="fixed inset-x-0 bottom-0 border-t" default-value="home">
          <BottomNavigation.List aria-label="Main">
            <BottomNavigation.Item value="home">
              <BottomNavigation.ItemIcon><PhHouse /></BottomNavigation.ItemIcon>
              <BottomNavigation.ItemLabel>Home</BottomNavigation.ItemLabel>
            </BottomNavigation.Item>
            <BottomNavigation.Item value="profile">
              <BottomNavigation.ItemIcon><PhUser /></BottomNavigation.ItemIcon>
              <BottomNavigation.ItemLabel>Profile</BottomNavigation.ItemLabel>
            </BottomNavigation.Item>
            <BottomNavigation.Item value="settings">
              <BottomNavigation.ItemIcon><PhGear /></BottomNavigation.ItemIcon>
              <BottomNavigation.ItemLabel>Settings</BottomNavigation.ItemLabel>
            </BottomNavigation.Item>
          </BottomNavigation.List>
        </BottomNavigation>
  
</template>
