import source from "./fixed-crop-area.tsx?raw";
import { ImageCropper } from "@pisagor/react";

export function FixedCropArea() {
  return (
    <ImageCropper>
      <ImageCropper.Image
        alt="Crop me"
        src="https://images.unsplash.com/photo-1662692735672-544412d65934?w=600&auto=format"
      />
      <ImageCropper.Selection />
    </ImageCropper>
  );
}

export { source as FixedCropAreaSource };
