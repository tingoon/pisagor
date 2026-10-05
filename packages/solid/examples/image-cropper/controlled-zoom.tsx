import { Button, ImageCropper } from "@pisagor/solid";
import {
  MagnifyingGlassMinusIcon,
  MagnifyingGlassPlusIcon,
} from "@pisagor/solid/icons";
import { createSignal } from "solid-js";
export function ControlledZoom() {
  const [zoom, setZoom] = createSignal(1);

  return (
    <div class="flex flex-col items-end gap-2">
      <ImageCropper onZoomChange={(e) => setZoom(e.zoom)} zoom={zoom()}>
        <ImageCropper.Image
          alt="Crop me"
          src="https://images.unsplash.com/photo-1662692735672-544412d65934?w=600&auto=format"
        />
        <ImageCropper.Selection />
      </ImageCropper>
      <div class="flex gap-1">
        <Button
          aria-label="Zoom out"
          onClick={() => setZoom(Math.max(0, zoom() - 0.25))}
          size="icon-sm"
          variant="outline"
        >
          <MagnifyingGlassMinusIcon aria-hidden />
        </Button>
        <Button
          aria-label="Zoom in"
          onClick={() => setZoom(Math.min(3, zoom() + 0.25))}
          size="icon-sm"
          variant="outline"
        >
          <MagnifyingGlassPlusIcon aria-hidden />
        </Button>
      </div>
    </div>
  );
}
