<script lang="ts" setup>
import { Stat } from "..";

const description = "Updated 2 minutes ago";
const label = "Monthly recurring revenue";
const value = "$124,320";
</script>

<template>
  <Stat :description="description" :label="label" :value="value" />
</template>
