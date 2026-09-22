<script setup lang="ts">
import { Button } from "@pisagor/vue";
import { Swap } from "..";
</script>

<template>
        <div class="flex flex-wrap items-center gap-2">
          <Button @click="toggle('fade')" size="icon-lg" variant="outline">
            <Swap :off="renderOff()" :on="renderOn()" :swap="state.fade" variant="fade" />
          </Button>
          <Button @click="toggle('blur')" size="icon-lg" variant="outline">
            <Swap :off="renderOff()" :on="renderOn()" :swap="state.blur" variant="blur" />
          </Button>
          <Button @click="toggle('flip')" size="icon-lg" variant="outline">
            <Swap :off="renderOff()" :on="renderOn()" :swap="state.flip" variant="flip" />
          </Button>
          <Button @click="toggle('rotate')" size="icon-lg" variant="outline">
            <Swap :off="renderOff()" :on="renderOn()" :swap="state.rotate" variant="rotate" />
          </Button>
          <Button @click="toggle('scale')" size="icon-lg" variant="outline">
            <Swap :off="renderOff()" :on="renderOn()" :swap="state.scale" variant="scale" />
          </Button>
        </div>
  
</template>
