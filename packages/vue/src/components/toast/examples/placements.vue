<script lang="ts" setup>
import { Button } from "@pisagor/vue";
import { Toaster, toast } from "..";

const topEndToaster = createToaster({
  overlap: true,
  placement: "top-end",
});
const topToaster = createToaster({
  overlap: true,
  placement: "top",
});
const bottomEndToaster = createToaster({
  overlap: true,
  placement: "bottom-end",
});
const bottomToaster = createToaster({
  overlap: true,
  placement: "bottom",
});
const topStartToaster = createToaster({
  overlap: true,
  placement: "top-start",
});
const bottomStartToaster = createToaster({
  overlap: true,
  placement: "bottom-start",
});
function handleBottom() {
  toast.create({ description: "handleBottom", title: "Toast" });
}
function handleBottomEnd() {
  toast.create({ description: "handleBottomEnd", title: "Toast" });
}
function handleBottomStart() {
  toast.create({ description: "handleBottomStart", title: "Toast" });
}
function handleTop() {
  toast.create({ description: "handleTop", title: "Toast" });
}
function handleTopEnd() {
  toast.create({ description: "handleTopEnd", title: "Toast" });
}
function handleTopStart() {
  toast.create({ description: "handleTopStart", title: "Toast" });
}
</script>

<template>
  <div>
    <Toaster :toaster="topStartToaster" />
    <Toaster :toaster="topToaster" />
    <Toaster :toaster="topEndToaster" />
    <Toaster :toaster="bottomStartToaster" />
    <Toaster :toaster="bottomToaster" />
    <Toaster :toaster="bottomEndToaster" />

    <div class="flex flex-col items-center justify-center gap-2">
      <div class="flex flex-wrap gap-2">
        <Button variant="outline" @click="handleTopStart">Top start</Button>
        <Button variant="outline" @click="handleTop">Top center</Button>
        <Button variant="outline" @click="handleTopEnd">Top end</Button>
      </div>
      <div class="flex flex-wrap gap-2">
        <Button variant="outline" @click="handleBottomStart">Bottom start</Button>
        <Button variant="outline" @click="handleBottom">Bottom center</Button>
        <Button variant="outline" @click="handleBottomEnd">Bottom end</Button>
      </div>
    </div>
  </div>
</template>
