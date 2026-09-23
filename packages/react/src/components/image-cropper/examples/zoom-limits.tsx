import { ImageCropper } from "..";

export function ZoomLimits() {
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
