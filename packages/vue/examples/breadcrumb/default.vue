<script lang="ts" setup>
import { Breadcrumb } from "../../src/components/breadcrumb";
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
