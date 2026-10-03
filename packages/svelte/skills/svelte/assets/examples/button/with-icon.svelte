<script lang="ts">
import { Button } from "@pisagor/svelte/button";
import ArrowSquareOutIcon from "phosphor-svelte/lib/ArrowSquareOutIcon";
import DownloadIcon from "phosphor-svelte/lib/DownloadIcon";
import GearIcon from "phosphor-svelte/lib/GearIcon";
import HeartIcon from "phosphor-svelte/lib/HeartIcon";
import PlusIcon from "phosphor-svelte/lib/PlusIcon";
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
