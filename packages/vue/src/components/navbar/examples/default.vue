<script lang="ts" setup>
import { Navbar } from "..";
</script>

<template>
  <Navbar class="border-b px-4">
    <Navbar.Brand><span class="font-semibold">Pisagor</span></Navbar.Brand>
    <Navbar.Content>
      <Navbar.Nav>
        <a class="px-3 py-2 text-sm" href="#home">Home</a>
        <a class="px-3 py-2 text-sm" href="#docs">Docs</a>
      </Navbar.Nav>
    </Navbar.Content>
    <Navbar.Actions>
      <button class="rounded-lg border px-3 py-1.5 text-sm" type="button">
        Sign in
      </button>
    </Navbar.Actions>
  </Navbar>
</template>
