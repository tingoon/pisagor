<script lang="ts" setup>
import { PhHouse, PhUser } from "@phosphor-icons/vue";
import { Sidebar } from "@pisagor/vue";
</script>

<template>
  <Sidebar.Provider disable-hotkey>
    <Sidebar collapsible="icon" variant="inset">
      <Sidebar.Content>
        <Sidebar.Group>
          <Sidebar.GroupContent>
            <Sidebar.Menu>
              <Sidebar.MenuItem>
                <Sidebar.MenuButton is-active>
                  <PhHouse />
                  <span>Home</span>
                </Sidebar.MenuButton>
              </Sidebar.MenuItem>
              <Sidebar.MenuItem>
                <Sidebar.MenuButton>
                  <PhUser />
                  <span>Profile</span>
                </Sidebar.MenuButton>
              </Sidebar.MenuItem>
            </Sidebar.Menu>
          </Sidebar.GroupContent>
        </Sidebar.Group>
      </Sidebar.Content>
    </Sidebar>
    <Sidebar.Inset class="p-4">
      <Sidebar.Trigger />
    </Sidebar.Inset>
  </Sidebar.Provider>
</template>
