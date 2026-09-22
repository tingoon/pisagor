<script setup lang="ts">
import { Stat } from "..";

const description = "Updated 2 minutes ago";
const label = "Monthly recurring revenue";
const value = "$124,320";
</script>

<template>
  <Stat :label="label" :value="value" :description="description" />
</template>
