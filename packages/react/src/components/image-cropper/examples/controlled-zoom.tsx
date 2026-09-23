import { MagnifyingGlassMinusIcon, MagnifyingGlassPlusIcon } from "@phosphor-icons/react";
import { Button } from "@pisagor/react";
import { useState } from "react";
import { ImageCropper } from "..";
export function ControlledZoom() {
  const [zoom, setZoom] = useState(1);

  return (
    <div className="flex flex-col items-end gap-2">
      <ImageCropper onZoomChange={(e) => setZoom(e.zoom)} zoom={zoom}>
        <ImageCropper.Image
          alt="Crop me"
          src="https://images.unsplash.com/photo-1662692735672-544412d65934?w=600&auto=format"
        />
        <ImageCropper.Selection />
      </ImageCropper>
      <div className="flex gap-1">
        <Button
          aria-label="Zoom out"
          onClick={() => setZoom(Math.max(0, zoom - 0.25))}
          size="icon-sm"
          variant="outline"
        >
          <MagnifyingGlassMinusIcon aria-hidden />
        </Button>
        <Button
          aria-label="Zoom in"
          onClick={() => setZoom(Math.min(3, zoom + 0.25))}
          size="icon-sm"
          variant="outline"
        >
          <MagnifyingGlassPlusIcon aria-hidden />
        </Button>
      </div>
    </div>
  );
}
