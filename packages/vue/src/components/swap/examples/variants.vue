<script lang="ts" setup >
import { Button } from "@pisagor/vue";
import { Swap } from "..";
</script>

<template>
        <div class="flex flex-wrap items-center gap-2">
          <Button size="icon-lg" variant="outline" @click="toggle('fade')" >
            <Swap variant="fade" :off="renderOff()" :on="renderOn()" :swap="state.fade" />
          </Button>
          <Button size="icon-lg" variant="outline" @click="toggle('blur')" >
            <Swap variant="blur" :off="renderOff()" :on="renderOn()" :swap="state.blur" />
          </Button>
          <Button size="icon-lg" variant="outline" @click="toggle('flip')" >
            <Swap variant="flip" :off="renderOff()" :on="renderOn()" :swap="state.flip" />
          </Button>
          <Button size="icon-lg" variant="outline" @click="toggle('rotate')" >
            <Swap variant="rotate" :off="renderOff()" :on="renderOn()" :swap="state.rotate" />
          </Button>
          <Button size="icon-lg" variant="outline" @click="toggle('scale')" >
            <Swap variant="scale" :off="renderOff()" :on="renderOn()" :swap="state.scale" />
          </Button>
        </div>
  
</template>
