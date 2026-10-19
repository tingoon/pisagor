<script lang="ts">
  import { ColorPicker } from "@pisagor/svelte";
</script>

<ColorPicker.Root>
  <ColorPicker.Area showDots xChannel="hue" yChannel="alpha">
    <ColorPicker.AreaBackground />
    <ColorPicker.AreaThumb />
  </ColorPicker.Area>
</ColorPicker.Root>
