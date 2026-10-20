<script lang="ts">
  import { CircularSlider } from "@pisagor/svelte";
  import { ThermometerIcon } from "phosphor-svelte";
</script>

<CircularSlider showValue valueSuffix="°">
  {#snippet valuePrefix()}
    <ThermometerIcon class="size-4" />
  {/snippet}
</CircularSlider>
