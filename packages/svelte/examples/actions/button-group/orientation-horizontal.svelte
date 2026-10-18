<script lang="ts">
  import { Button, ButtonGroup } from "@pisagor/svelte";
  import { PlayIcon, SkipBackIcon, SkipForwardIcon } from "phosphor-svelte";
</script>

<ButtonGroup>
  <Button aria-label="Skip back" size="icon-md" variant="outline">
    <SkipBackIcon />
  </Button>
  <Button aria-label="Play" size="icon-md" variant="outline">
    <PlayIcon />
  </Button>
  <Button aria-label="Skip forward" size="icon-md" variant="outline">
    <SkipForwardIcon />
  </Button>
</ButtonGroup>
