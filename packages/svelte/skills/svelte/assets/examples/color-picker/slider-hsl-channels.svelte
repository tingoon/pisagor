<script lang="ts">
import { ColorPicker } from "@pisagor/svelte/color-picker";
</script>

<ColorPicker>
      <ColorPicker.View format="hsla">
        <div class="flex w-full flex-col gap-2">
          <ColorPicker.ChannelSlider channel="hue" />
          <ColorPicker.ChannelSlider channel="saturation" />
          <ColorPicker.ChannelSlider channel="lightness" />
        </div>
      </ColorPicker.View>
    </ColorPicker>
