<script lang="ts" setup>
import { PasswordInput } from "../../../../../src/components/password-input";
</script>

<template>
  <div class="flex flex-col gap-2">
    <PasswordInput autocomplete="current-password" placeholder="••••••••" />
    <PasswordInput autocomplete="new-password" placeholder="••••••••" />
  </div>
</template>
