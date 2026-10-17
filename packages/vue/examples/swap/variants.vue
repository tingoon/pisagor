<script lang="ts" setup>
import { PhMoon, PhSun } from "@phosphor-icons/vue";
import { Button, Swap } from "@pisagor/vue";
import { h, reactive } from "vue";

type SwapVariant = "blur" | "fade" | "flip" | "rotate" | "scale";

const state = reactive<Record<SwapVariant, boolean>>({
  blur: false,
  fade: false,
  flip: false,
  rotate: false,
  scale: false,
});

function toggle(variant: SwapVariant) {
  state[variant] = !state[variant];
}

function renderOff() {
  return h(PhSun);
}

function renderOn() {
  return h(PhMoon);
}
</script>

<template>
  <div class="flex flex-wrap items-center gap-2">
    <Button
      aria-label="Toggle theme"
      size="icon-lg"
      variant="outline"
      @click="toggle('fade')"
    >
      <Swap
        variant="fade"
        :off="renderOff()"
        :on="renderOn()"
        :swap="state.fade"
      />
    </Button>
    <Button
      aria-label="Toggle theme"
      size="icon-lg"
      variant="outline"
      @click="toggle('blur')"
    >
      <Swap
        variant="blur"
        :off="renderOff()"
        :on="renderOn()"
        :swap="state.blur"
      />
    </Button>
    <Button
      aria-label="Toggle theme"
      size="icon-lg"
      variant="outline"
      @click="toggle('flip')"
    >
      <Swap
        variant="flip"
        :off="renderOff()"
        :on="renderOn()"
        :swap="state.flip"
      />
    </Button>
    <Button
      aria-label="Toggle theme"
      size="icon-lg"
      variant="outline"
      @click="toggle('rotate')"
    >
      <Swap
        variant="rotate"
        :off="renderOff()"
        :on="renderOn()"
        :swap="state.rotate"
      />
    </Button>
    <Button
      aria-label="Toggle theme"
      size="icon-lg"
      variant="outline"
      @click="toggle('scale')"
    >
      <Swap
        variant="scale"
        :off="renderOff()"
        :on="renderOn()"
        :swap="state.scale"
      />
    </Button>
  </div>
</template>
