<script lang="ts">
import { ColorPicker } from "@pisagor/svelte";
import SparkleIcon from "phosphor-svelte/lib/SparkleIcon";

const swatches = ["#0485F7", "#EF4444", "#F59E0B", "#10B981"];
</script>

<ColorPicker inline>
  <ColorPicker.SwatchGroup>
    {#each swatches as color}
      <ColorPicker.SwatchTrigger value={color}>
        <ColorPicker.Swatch value={color}>
          <ColorPicker.SwatchIndicator>
            <SparkleIcon />
          </ColorPicker.SwatchIndicator>
        </ColorPicker.Swatch>
      </ColorPicker.SwatchTrigger>
    {/each}
  </ColorPicker.SwatchGroup>
</ColorPicker>
