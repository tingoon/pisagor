<script lang="ts">
import { ColorPicker } from "@pisagor/svelte/color-picker";
</script>

<ColorPicker>
      <ColorPicker.Area showDots xChannel="hue" yChannel="alpha">
        <ColorPicker.AreaThumb />
      </ColorPicker.Area>
    </ColorPicker>
