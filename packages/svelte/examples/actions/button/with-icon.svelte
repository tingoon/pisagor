<script lang="ts">
  import { Button } from "@pisagor/svelte";
  import {
    ArrowSquareOutIcon,
    DownloadIcon,
    GearIcon,
    HeartIcon,
    PlusIcon,
  } from "phosphor-svelte";
</script>

<div class="flex flex-wrap gap-2">
  <Button variant="default">
    <PlusIcon />
    Add
  </Button>
  <Button variant="outline">
    <GearIcon />
    Settings
  </Button>
  <Button variant="secondary">
    <HeartIcon />
    Favorite
  </Button>
  <Button variant="ghost">
    <DownloadIcon />
    Download
  </Button>
  <Button variant="link">
    Visit website
    <ArrowSquareOutIcon />
  </Button>
</div>
