<script setup lang="ts">
import { ColorPicker } from "..";
</script>

<template>
        <ColorPicker default-value="#182098" inline>
          <ColorPicker.Area x-channel="hue" y-channel="alpha">
            <ColorPicker.AreaThumb />
          </ColorPicker.Area>
        </ColorPicker>
  
</template>
