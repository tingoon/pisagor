import { PhMagnifyingGlassMinus, PhMagnifyingGlassPlus } from "@phosphor-icons/vue";
import { Button, ImageCropper } from "@pisagor/vue";
import { ref } from "vue";
import preview from "#/storybook/preview";

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
  render: () => ({
    components: { ImageCropper },
    template: `
      <ImageCropper class="aspect-video">
        <ImageCropper.Image
          alt="Crop me"
          src="https://images.unsplash.com/photo-1662692735672-544412d65934?w=600&auto=format"
        />
        <ImageCropper.Selection />
      </ImageCropper>
    `,
  }),
});

export const AspectRatio = meta.story({
  render: () => ({
    components: { ImageCropper },
    template: `
      <ImageCropper :aspect-ratio="16 / 9">
        <ImageCropper.Image
          alt="Crop me"
          src="https://images.unsplash.com/photo-1662692735672-544412d65934?w=600&auto=format"
        />
        <ImageCropper.Selection />
      </ImageCropper>
    `,
  }),
});

export const CircleCrop = meta.story({
  render: () => ({
    components: { ImageCropper },
    template: `
      <ImageCropper crop-shape="circle">
        <ImageCropper.Image
          alt="Crop me"
          src="https://images.unsplash.com/photo-1662692735672-544412d65934?w=600&auto=format"
        />
        <ImageCropper.Selection />
      </ImageCropper>
    `,
  }),
});

export const FixedCropArea = meta.story({
  render: () => ({
    components: { ImageCropper },
    template: `
      <ImageCropper fixed-crop-area>
        <ImageCropper.Image
          alt="Crop me"
          src="https://images.unsplash.com/photo-1662692735672-544412d65934?w=600&auto=format"
        />
        <ImageCropper.Selection />
      </ImageCropper>
    `,
  }),
});

export const InitialCrop = meta.story({
  render: () => ({
    components: { ImageCropper },
    setup() {
      const initialCrop = { height: 150, width: 200, x: 100, y: 80 };
      return { initialCrop };
    },
    template: `
      <ImageCropper :initial-crop="initialCrop">
        <ImageCropper.Image
          alt="Crop me"
          src="https://images.unsplash.com/photo-1662692735672-544412d65934?w=600&auto=format"
        />
        <ImageCropper.Selection />
      </ImageCropper>
    `,
  }),
});

export const MinMaxSize = meta.story({
  render: () => ({
    components: { ImageCropper },
    template: `
      <ImageCropper :max-height="160" :max-width="280" :min-height="80" :min-width="80">
        <ImageCropper.Image
          alt="Crop me"
          src="https://images.unsplash.com/photo-1662692735672-544412d65934?w=600&auto=format"
        />
        <ImageCropper.Selection />
      </ImageCropper>
    `,
  }),
});

export const ZoomLimits = meta.story({
  render: () => ({
    components: { ImageCropper },
    template: `
      <ImageCropper :max-zoom="2" :min-zoom="0.5">
        <ImageCropper.Image
          alt="Crop me"
          src="https://images.unsplash.com/photo-1662692735672-544412d65934?w=600&auto=format"
        />
        <ImageCropper.Selection />
      </ImageCropper>
    `,
  }),
});

export const ControlledZoom = meta.story({
  render: () => ({
    components: { Button, ImageCropper, PhMagnifyingGlassMinus, PhMagnifyingGlassPlus },
    setup() {
      const zoom = ref(1);
      const onZoomChange = (details: { zoom: number }) => {
        zoom.value = details.zoom;
      };
      const zoomOut = () => {
        zoom.value = Math.max(0, zoom.value - 0.25);
      };
      const zoomIn = () => {
        zoom.value = Math.min(3, zoom.value + 0.25);
      };
      return { onZoomChange, zoom, zoomIn, zoomOut };
    },
    template: `
      <div class="flex flex-col items-end gap-2">
        <ImageCropper :onZoomChange="onZoomChange" :zoom="zoom">
          <ImageCropper.Image
            alt="Crop me"
            src="https://images.unsplash.com/photo-1662692735672-544412d65934?w=600&auto=format"
          />
          <ImageCropper.Selection />
        </ImageCropper>
        <div class="flex gap-1">
          <Button aria-label="Zoom out" size="icon-sm" variant="outline" @click="zoomOut">
            <PhMagnifyingGlassMinus aria-hidden="true" />
          </Button>
          <Button aria-label="Zoom in" size="icon-sm" variant="outline" @click="zoomIn">
            <PhMagnifyingGlassPlus aria-hidden="true" />
          </Button>
        </div>
      </div>
    `,
  }),
});
