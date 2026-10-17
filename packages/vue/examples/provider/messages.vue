<script lang="ts">
import source from "./messages.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Breadcrumb, Provider } from "@pisagor/vue";

const items = [{ href: "#", label: "Ana sayfa" }, { label: "Ayarlar" }];
const translations = { "breadcrumb.label": "Gezinti yolu" };
</script>

<template>
  <Provider :locale="{ locale: 'tr-TR' }" :translations="translations">
    <Breadcrumb :items="items" />
  </Provider>
</template>
