<script lang="ts">
  import { Slider } from "@pisagor/svelte";
</script>

<Slider.Root class="w-64" defaultValue={[40]}>
  <Slider.Header>
    <Slider.Label>Volume</Slider.Label>
    <Slider.Value />
  </Slider.Header>
  <Slider.Control>
    <Slider.Track>
      <Slider.Range />
    </Slider.Track>
    <Slider.Thumb index={0} />
  </Slider.Control>
</Slider.Root>
