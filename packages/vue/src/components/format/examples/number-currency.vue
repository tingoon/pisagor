<script lang="ts" setup>
import { Format } from "..";
</script>

<template>
  <div class="flex flex-col gap-2">
    <div>
      <span class="text-muted-foreground text-sm">USD: </span>
      <Format.Number currency="USD" style="currency" :value="99.99" />
    </div>
    <div>
      <span class="text-muted-foreground text-sm">EUR: </span>
      <Format.Number currency="EUR" style="currency" :value="99.99" />
    </div>
    <div>
      <span class="text-muted-foreground text-sm">BRL: </span>
      <Format.Number currency="BRL" style="currency" :value="99.99" />
    </div>
  </div>
</template>
