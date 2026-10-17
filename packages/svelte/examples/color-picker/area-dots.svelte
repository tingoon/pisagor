<script module lang="ts">
  import source from "./area-dots.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { ColorPicker } from "@pisagor/svelte";
</script>

<ColorPicker>
  <ColorPicker.Area showDots xChannel="hue" yChannel="alpha">
    <ColorPicker.AreaThumb />
  </ColorPicker.Area>
</ColorPicker>
