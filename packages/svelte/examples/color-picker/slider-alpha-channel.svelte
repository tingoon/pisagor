<script lang="ts">
import { ColorPicker } from "@pisagor/svelte/color-picker";
</script>

<ColorPicker>
      <ColorPicker.View format="rgba">
        <ColorPicker.ChannelSlider channel="alpha">
          <ColorPicker.TransparencyGrid />
        </ColorPicker.ChannelSlider>
      </ColorPicker.View>
    </ColorPicker>
