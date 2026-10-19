<script lang="ts">
  import InputClearButton from "../input/input-clear-button.svelte";
  import InputGroupAddon from "../input-group/input-group-addon.svelte";
  import { useStyles } from "./textarea.context";

  type Props = {
    onClear: () => void;
  };

  let { onClear }: Props = $props();
  const styles = useStyles();
</script>

<InputGroupAddon align="inline-end" class={styles.slots.clearAddon()}>
  <InputClearButton {onClear} />
</InputGroupAddon>
