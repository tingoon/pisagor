<script lang="ts" setup>
import { Breadcrumb } from "@pisagor/vue";
</script>

<template>
  <Breadcrumb
    :items="[
        { href: 'https://example.com/', label: 'Home' },
        { href: 'https://example.com/', label: 'Components' },
        { isCurrentPage: true, label: 'Breadcrumb' },
      ]"
  />
</template>
