import { useFileUploadContext } from "@ark-ui/vue/file-upload";
import { PhCamera, PhFolder, PhPaperclip, PhTrash, PhX } from "@phosphor-icons/vue";
import { Button, FileUpload, Separator, Surface } from "@pisagor/vue";
import { defineComponent, h } from "vue";
import preview from "#/storybook/preview";

type ArkPart = Parameters<typeof h>[0];

const meta = preview.meta({
  component: FileUpload,
  parameters: {
    docs: {
      description: {
        component:
          "Lets users choose files to upload with drag-and-drop or a file picker and shows upload progress.",
      },
    },
  },
  subcomponents: {
    ClearTrigger: FileUpload.ClearTrigger,
    Description: FileUpload.Description,
    Dropzone: FileUpload.Dropzone,
    DropzoneIcon: FileUpload.DropzoneIcon,
    Helper: FileUpload.Helper,
    Item: FileUpload.Item,
    ItemDeleteTrigger: FileUpload.ItemDeleteTrigger,
    ItemGroup: FileUpload.ItemGroup,
    ItemName: FileUpload.ItemName,
    ItemPreview: FileUpload.ItemPreview,
    ItemPreviewImage: FileUpload.ItemPreviewImage,
    ItemSize: FileUpload.ItemSize,
    List: FileUpload.List,
    Title: FileUpload.Title,
    Trigger: FileUpload.Trigger,
  },
  title: "Components/Forms/File Upload",
});

const CustomPreviewList = defineComponent({
  name: "CustomPreviewList",
  setup() {
    const fileUpload = useFileUploadContext();

    return () => {
      const files = fileUpload.value.acceptedFiles;

      if (files.length === 0) {
        return null;
      }

      return h(FileUpload.ItemGroup, { class: "grid grid-cols-4 gap-2" }, () =>
        files.map((file) =>
          h(FileUpload.Item, { file, key: file.name }, () => [
            h(
              FileUpload.ItemPreview as ArkPart,
              { class: "size-auto w-full rounded-2xl", type: "image/*" },
              () => h(FileUpload.ItemPreviewImage),
            ),
            h(FileUpload.ItemDeleteTrigger, { asChild: true }, () =>
              h(
                Button as ArkPart,
                { class: "absolute -top-2 -right-2", pill: true, size: "icon-xs" },
                () => h(PhX),
              ),
            ),
          ]),
        ),
      );
    };
  },
});

export const Default = meta.story({
  render: () => ({
    components: { Button, FileUpload, Separator },
    template: `
      <FileUpload>
        <FileUpload.Dropzone>
          <FileUpload.DropzoneIcon />
          <FileUpload.Title>Drop files here</FileUpload.Title>
          <div class="flex items-center justify-center gap-2">
            <Separator />
            <FileUpload.Description>or</FileUpload.Description>
            <Separator />
          </div>
          <FileUpload.Trigger as-child>
            <Button>Browse files</Button>
          </FileUpload.Trigger>
          <FileUpload.Helper>You can upload up to 2 files at a time.</FileUpload.Helper>
        </FileUpload.Dropzone>
        <FileUpload.List />
      </FileUpload>
    `,
  }),
});

export const Variants = meta.story({
  render: () => ({
    components: { Button, FileUpload },
    template: `
      <div class="flex flex-col gap-2">
        <FileUpload>
          <FileUpload.Dropzone variant="primary">
            <FileUpload.DropzoneIcon />
            <FileUpload.Title>Primary</FileUpload.Title>
            <FileUpload.Trigger as-child>
              <Button>Browse files</Button>
            </FileUpload.Trigger>
          </FileUpload.Dropzone>
        </FileUpload>
        <FileUpload>
          <FileUpload.Dropzone variant="secondary">
            <FileUpload.DropzoneIcon />
            <FileUpload.Title>Secondary</FileUpload.Title>
            <FileUpload.Trigger as-child>
              <Button>Browse files</Button>
            </FileUpload.Trigger>
          </FileUpload.Dropzone>
        </FileUpload>
      </div>
    `,
  }),
});

export const OnSurface = meta.story({
  render: () => ({
    components: { Button, FileUpload, Surface },
    template: `
      <Surface bordered class="flex flex-col gap-2" padding="md">
        <FileUpload>
          <FileUpload.Dropzone variant="primary">
            <FileUpload.DropzoneIcon />
            <FileUpload.Title>Primary</FileUpload.Title>
            <FileUpload.Trigger as-child>
              <Button>Browse files</Button>
            </FileUpload.Trigger>
          </FileUpload.Dropzone>
        </FileUpload>
        <FileUpload>
          <FileUpload.Dropzone variant="secondary">
            <FileUpload.DropzoneIcon />
            <FileUpload.Title>Secondary</FileUpload.Title>
            <FileUpload.Trigger as-child>
              <Button>Browse files</Button>
            </FileUpload.Trigger>
          </FileUpload.Dropzone>
        </FileUpload>
      </Surface>
    `,
  }),
});

export const Invalid = meta.story({
  render: () => ({
    components: { Button, FileUpload },
    template: `
      <FileUpload invalid>
        <FileUpload.Dropzone>
          <FileUpload.DropzoneIcon />
          <FileUpload.Title>Drop files here</FileUpload.Title>
          <FileUpload.Trigger as-child>
            <Button>Browse files</Button>
          </FileUpload.Trigger>
          <FileUpload.Helper>This field is required.</FileUpload.Helper>
        </FileUpload.Dropzone>
        <FileUpload.List />
      </FileUpload>
    `,
  }),
});

export const Disabled = meta.story({
  render: () => ({
    components: { Button, FileUpload },
    template: `
      <FileUpload disabled>
        <FileUpload.Dropzone>
          <FileUpload.DropzoneIcon />
          <FileUpload.Title>Drop files here</FileUpload.Title>
          <FileUpload.Trigger as-child>
            <Button>Browse files</Button>
          </FileUpload.Trigger>
        </FileUpload.Dropzone>
        <FileUpload.List />
      </FileUpload>
    `,
  }),
});

export const CustomSpacing = meta.story({
  render: () => ({
    components: { FileUpload },
    template: `
      <FileUpload>
        <FileUpload.Dropzone class="[--space:--spacing(4)] md:[--space:--spacing(6)]">
          <FileUpload.DropzoneIcon />
          <FileUpload.Title>Drop your files here</FileUpload.Title>
        </FileUpload.Dropzone>
        <FileUpload.List />
      </FileUpload>
    `,
  }),
});

export const AcceptedFileTypes = meta.story({
  render: () => ({
    components: { FileUpload },
    template: `
      <FileUpload accept="image/png,image/jpeg">
        <FileUpload.Dropzone class="w-full">
          <FileUpload.DropzoneIcon />
          <FileUpload.Title>Drop your images here</FileUpload.Title>
          <FileUpload.Helper>Only PNG and JPEG formats are allowed.</FileUpload.Helper>
        </FileUpload.Dropzone>
        <FileUpload.List />
      </FileUpload>
    `,
  }),
});

export const ClearTrigger = meta.story({
  render: () => ({
    components: { Button, FileUpload, PhTrash },
    template: `
      <FileUpload>
        <FileUpload.ClearTrigger as-child class="absolute top-2 right-2">
          <Button aria-label="Clear files" size="icon-sm" variant="ghost">
            <PhTrash />
          </Button>
        </FileUpload.ClearTrigger>
        <FileUpload.Dropzone class="w-full">
          <FileUpload.DropzoneIcon />
          <FileUpload.Title>Drop files here</FileUpload.Title>
        </FileUpload.Dropzone>
        <FileUpload.List />
      </FileUpload>
    `,
  }),
});

export const CustomPreview = meta.story({
  render: () => ({
    components: { CustomPreviewList, FileUpload },
    template: `
      <FileUpload accept="image/*">
        <FileUpload.Dropzone>
          <FileUpload.DropzoneIcon />
          <FileUpload.Title>Drop files here</FileUpload.Title>
        </FileUpload.Dropzone>
        <CustomPreviewList />
      </FileUpload>
    `,
  }),
});

export const DirectoryUpload = meta.story({
  render: () => ({
    components: { Button, FileUpload, PhFolder },
    template: `
      <FileUpload directory>
        <div class="flex justify-center">
          <FileUpload.Trigger as-child>
            <Button size="sm" variant="outline">
              <PhFolder />
              Select folder
            </Button>
          </FileUpload.Trigger>
          <FileUpload.List />
        </div>
      </FileUpload>
    `,
  }),
});

export const Dropzone = meta.story({
  render: () => ({
    components: { FileUpload },
    template: `
      <FileUpload>
        <FileUpload.Dropzone>
          <FileUpload.DropzoneIcon />
          <FileUpload.Title>Drop your files here</FileUpload.Title>
        </FileUpload.Dropzone>
        <FileUpload.List />
      </FileUpload>
    `,
  }),
});

export const MediaCapture = meta.story({
  render: () => ({
    components: { Button, FileUpload, PhCamera },
    template: `
      <FileUpload capture="environment">
        <div class="flex justify-center">
          <FileUpload.Trigger as-child>
            <Button variant="outline">
              <PhCamera />
              Take a picture
            </Button>
          </FileUpload.Trigger>
        </div>
        <FileUpload.List />
      </FileUpload>
    `,
  }),
});

export const MultipleFiles = meta.story({
  render: () => ({
    components: { Button, FileUpload, Separator },
    template: `
      <FileUpload :max-files="5">
        <FileUpload.Dropzone>
          <FileUpload.DropzoneIcon />
          <FileUpload.Title>Drop files here</FileUpload.Title>
          <div class="flex items-center justify-center gap-2">
            <Separator />
            <FileUpload.Description>or</FileUpload.Description>
            <Separator />
          </div>
          <FileUpload.Trigger as-child>
            <Button>Browse files</Button>
          </FileUpload.Trigger>
          <FileUpload.Helper>You can upload up to 5 files at a time.</FileUpload.Helper>
        </FileUpload.Dropzone>
        <FileUpload.List />
      </FileUpload>
    `,
  }),
});

export const Trigger = meta.story({
  render: () => ({
    components: { Button, FileUpload, PhPaperclip },
    template: `
      <FileUpload>
        <div class="flex justify-center">
          <FileUpload.Trigger as-child>
            <Button variant="outline">
              <PhPaperclip />
              Browse files
            </Button>
          </FileUpload.Trigger>
        </div>
        <FileUpload.List />
      </FileUpload>
    `,
  }),
});
