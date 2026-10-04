<script lang="ts">
import { Button } from "@pisagor/svelte";
import { ImageCropper } from "@pisagor/svelte/image-cropper";
import MagnifyingGlassMinusIcon from "phosphor-svelte/lib/MagnifyingGlassMinusIcon";
import MagnifyingGlassPlusIcon from "phosphor-svelte/lib/MagnifyingGlassPlusIcon";

let zoom = $state(1);

</script>

<div class="flex flex-col items-end gap-2">
      <ImageCropper onZoomChange={(e) => zoom = e.zoom} zoom={zoom}>
        <ImageCropper.Image
          alt="Crop me"
          src="https://images.unsplash.com/photo-1662692735672-544412d65934?w=600&auto=format"
        />
        <ImageCropper.Selection />
      </ImageCropper>
      <div class="flex gap-1">
        <Button
          aria-label="Zoom out"
          onClick={() => zoom = Math.max(0, zoom - 0.25)}
          size="icon-sm"
          variant="outline"
        >
          <MagnifyingGlassMinusIcon aria-hidden />
        </Button>
        <Button
          aria-label="Zoom in"
          onClick={() => zoom = Math.min(3, zoom + 0.25)}
          size="icon-sm"
          variant="outline"
        >
          <MagnifyingGlassPlusIcon aria-hidden />
        </Button>
      </div>
    </div>
