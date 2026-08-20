import { Field, SignaturePad, Surface } from "@pisagor/vue";
import { ref } from "vue";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: SignaturePad,
  parameters: {
    docs: {
      description: {
        component: "Captures a handwritten signature on a canvas for approvals and forms.",
      },
    },
  },
  title: "Components/Forms/Signature Pad",
});

export const Default = meta.story({
  render: () => ({
    components: { SignaturePad },
    template: "<SignaturePad />",
  }),
});

export const OnSurface = meta.story({
  render: () => ({
    components: { SignaturePad, Surface },
    template: `
      <Surface bordered padding="md" variant="default">
        <SignaturePad />
      </Surface>
    `,
  }),
});

export const Invalid = meta.story({
  render: () => ({
    components: { SignaturePad },
    template: "<SignaturePad invalid />",
  }),
});

export const Disabled = meta.story({
  render: () => ({
    components: { SignaturePad },
    template: "<SignaturePad disabled />",
  }),
});

export const Controlled = meta.story({
  render: () => ({
    components: { SignaturePad },
    setup() {
      const paths = ref<string[]>([]);
      const updatePaths = (details: { paths: string[] }) => {
        paths.value = details.paths;
      };
      return { paths, updatePaths };
    },
    template: '<SignaturePad :onDraw="updatePaths" :onDrawEnd="updatePaths" :paths="paths" />',
  }),
});

export const ImagePreview = meta.story({
  render: () => ({
    components: { Field, SignaturePad },
    setup() {
      const imageUrl = ref<string | null>(null);
      const handleDrawEnd = (details: { getDataUrl: (type: string) => Promise<string> }) => {
        details.getDataUrl("image/png").then((url) => {
          imageUrl.value = url;
        });
      };
      return { handleDrawEnd, imageUrl };
    },
    template: `
      <Field class="flex flex-col gap-2">
        <SignaturePad :onDrawEnd="handleDrawEnd" />
        <Field.Description>Image preview</Field.Description>
        <div class="relative h-40 w-full rounded-lg border bg-muted">
          <img
            v-if="imageUrl"
            :src="imageUrl"
            alt="Your signature as captured from the pad above"
            class="size-full dark:invert"
            style="height: 100%; inset: 0; object-fit: cover; position: absolute; width: 100%"
          />
        </div>
      </Field>
    `,
  }),
});
