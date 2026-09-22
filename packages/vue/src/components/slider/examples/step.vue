<script setup lang="ts">
import { Slider } from "..";
</script>

<template>
        <Slider
          :default-value="[0]"
          :marker-interval="1"
          :marker-labels="['5GB', '25GB', '50GB']"
          :max="2"
          :min="0"
          label="Storage size"
          show-markers
        />
  
</template>
