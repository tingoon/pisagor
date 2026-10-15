<script lang="ts" setup>
import { Breadcrumb, Provider } from "@pisagor/vue";

const items = [{ href: "#", label: "Ana sayfa" }, { label: "Ayarlar" }];
const messages = { "breadcrumb.label": "Gezinti yolu" };
</script>

<template>
  <Provider locale="tr-TR" :messages="messages">
    <Breadcrumb :items="items" />
  </Provider>
</template>
