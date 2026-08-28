import { MagnifyingGlassMinusIcon, MagnifyingGlassPlusIcon } from "@phosphor-icons/react";
import { useState } from "react";
import preview from "#/storybook/preview";
import { Button, ImageCropper } from "..";

const meta = preview.meta({
  component: ImageCropper,
  parameters: {
    docs: {
      description: {
        component: "Lets users crop and adjust an image selection before saving or uploading it.",
      },
    },
    metadata: {
      api: "compound",
      taxonomy: "pattern",
    },
  },
  subcomponents: {
    Grid: ImageCropper.Grid,
    Handle: ImageCropper.Handle,
    Image: ImageCropper.Image,
    Selection: ImageCropper.Selection,
  },
  title: "Components/Media/Image Cropper",
});

export const Default = meta.story({
  args: {
    className: "aspect-video",
  },
  render: (args) => (
    <ImageCropper {...args}>
      <ImageCropper.Image
        alt="Crop me"
        src="https://images.unsplash.com/photo-1662692735672-544412d65934?w=600&auto=format"
      />
      <ImageCropper.Selection />
    </ImageCropper>
  ),
});

export const AspectRatio = meta.story({
  args: {
    aspectRatio: 16 / 9,
  },
  render: (args) => (
    <ImageCropper {...args}>
      <ImageCropper.Image
        alt="Crop me"
        src="https://images.unsplash.com/photo-1662692735672-544412d65934?w=600&auto=format"
      />
      <ImageCropper.Selection />
    </ImageCropper>
  ),
});

export const CircleCrop = meta.story({
  args: {
    cropShape: "circle",
  },
  render: (args) => (
    <ImageCropper {...args}>
      <ImageCropper.Image
        alt="Crop me"
        src="https://images.unsplash.com/photo-1662692735672-544412d65934?w=600&auto=format"
      />
      <ImageCropper.Selection />
    </ImageCropper>
  ),
});

export const FixedCropArea = meta.story({
  args: {
    fixedCropArea: true,
  },
  render: (args) => (
    <ImageCropper {...args}>
      <ImageCropper.Image
        alt="Crop me"
        src="https://images.unsplash.com/photo-1662692735672-544412d65934?w=600&auto=format"
      />
      <ImageCropper.Selection />
    </ImageCropper>
  ),
});

export const InitialCrop = meta.story({
  args: {
    initialCrop: {
      height: 150,
      width: 200,
      x: 100,
      y: 80,
    },
  },
  render: (args) => (
    <ImageCropper {...args}>
      <ImageCropper.Image
        alt="Crop me"
        src="https://images.unsplash.com/photo-1662692735672-544412d65934?w=600&auto=format"
      />
      <ImageCropper.Selection />
    </ImageCropper>
  ),
});

export const MinMaxSize = meta.story({
  args: {
    maxHeight: 160,
    maxWidth: 280,
    minHeight: 80,
    minWidth: 80,
  },
  render: (args) => (
    <ImageCropper {...args}>
      <ImageCropper.Image
        alt="Crop me"
        src="https://images.unsplash.com/photo-1662692735672-544412d65934?w=600&auto=format"
      />
      <ImageCropper.Selection />
    </ImageCropper>
  ),
});

export const ZoomLimits = meta.story({
  args: {
    maxZoom: 2,
    minZoom: 0.5,
  },
  render: (args) => (
    <ImageCropper {...args}>
      <ImageCropper.Image
        alt="Crop me"
        src="https://images.unsplash.com/photo-1662692735672-544412d65934?w=600&auto=format"
      />
      <ImageCropper.Selection />
    </ImageCropper>
  ),
});

export const ControlledZoom = meta.story({
  render: () => {
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
  },
});
