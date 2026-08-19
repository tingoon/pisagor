import { useFileUpload } from "@ark-ui/react/file-upload";
import { CameraIcon, FolderIcon, PaperclipIcon, TrashIcon, XIcon } from "@phosphor-icons/react";
import { Button } from "@pisagor/react/button";
import { FileUpload } from "@pisagor/react/file-upload";
import { Separator } from "@pisagor/react/separator";
import preview, { SurfaceDecorator } from "#/react/preview";

const meta = preview.meta({
  component: FileUpload,
  parameters: {
    docs: {
      aliases: ["upload"],
      api: "compound",
      checklist: {
        accessibleColor: true,
        definedBehaviors: true,
        definedOptions: true,
        interactiveStates: true,
        keyboardInteractions: true,
        platformScales: true,
      },
      description: {
        component:
          "Lets users choose files to upload with drag-and-drop or a file picker and shows upload progress.",
      },
      taxonomy: "pattern",
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

export const Default = meta.story({
  render: () => (
    <FileUpload>
      <FileUpload.Dropzone>
        <FileUpload.DropzoneIcon />
        <FileUpload.Title>Drop files here</FileUpload.Title>
        <div className="flex items-center justify-center gap-2">
          <Separator />
          <FileUpload.Description>or</FileUpload.Description>
          <Separator />
        </div>
        <FileUpload.Trigger asChild>
          <Button>Browse files</Button>
        </FileUpload.Trigger>
        <FileUpload.Helper>You can upload up to 2 files at a time.</FileUpload.Helper>
      </FileUpload.Dropzone>
      <FileUpload.List />
    </FileUpload>
  ),
});

export const Variants = meta.story({
  render: () => (
    <div className="flex flex-col gap-2">
      <FileUpload>
        <FileUpload.Dropzone variant="primary">
          <FileUpload.DropzoneIcon />
          <FileUpload.Title>Primary</FileUpload.Title>
          <FileUpload.Trigger asChild>
            <Button>Browse files</Button>
          </FileUpload.Trigger>
        </FileUpload.Dropzone>
      </FileUpload>
      <FileUpload>
        <FileUpload.Dropzone variant="secondary">
          <FileUpload.DropzoneIcon />
          <FileUpload.Title>Secondary</FileUpload.Title>
          <FileUpload.Trigger asChild>
            <Button>Browse files</Button>
          </FileUpload.Trigger>
        </FileUpload.Dropzone>
      </FileUpload>
    </div>
  ),
});

export const OnSurface = Variants.extend({
  decorators: [SurfaceDecorator],
  parameters: { layout: "fullscreen" },
});

export const Invalid = meta.story({
  render: () => (
    <FileUpload invalid>
      <FileUpload.Dropzone>
        <FileUpload.DropzoneIcon />
        <FileUpload.Title>Drop files here</FileUpload.Title>
        <FileUpload.Trigger asChild>
          <Button>Browse files</Button>
        </FileUpload.Trigger>
        <FileUpload.Helper>This field is required.</FileUpload.Helper>
      </FileUpload.Dropzone>
      <FileUpload.List />
    </FileUpload>
  ),
});

export const Disabled = meta.story({
  render: () => (
    <FileUpload disabled>
      <FileUpload.Dropzone>
        <FileUpload.DropzoneIcon />
        <FileUpload.Title>Drop files here</FileUpload.Title>
        <FileUpload.Trigger asChild>
          <Button>Browse files</Button>
        </FileUpload.Trigger>
      </FileUpload.Dropzone>
      <FileUpload.List />
    </FileUpload>
  ),
});

export const CustomSpacing = meta.story({
  render: () => (
    <FileUpload>
      <FileUpload.Dropzone className="[--space:--spacing(4)] md:[--space:--spacing(6)]">
        <FileUpload.DropzoneIcon />
        <FileUpload.Title>Drop your files here</FileUpload.Title>
      </FileUpload.Dropzone>
      <FileUpload.List />
    </FileUpload>
  ),
});

export const AcceptedFileTypes = meta.story({
  render: () => (
    <FileUpload accept="image/png,image/jpeg">
      <FileUpload.Dropzone className="w-full">
        <FileUpload.DropzoneIcon />
        <FileUpload.Title>Drop your images here</FileUpload.Title>
        <FileUpload.Helper>Only PNG and JPEG formats are allowed.</FileUpload.Helper>
      </FileUpload.Dropzone>
      <FileUpload.List />
    </FileUpload>
  ),
});

export const ClearTrigger = meta.story({
  render: () => (
    <FileUpload>
      <FileUpload.ClearTrigger asChild className="absolute top-2 right-2">
        <Button aria-label="Clear files" size="icon-sm" variant="ghost">
          <TrashIcon />
        </Button>
      </FileUpload.ClearTrigger>
      <FileUpload.Dropzone className="w-full">
        <FileUpload.DropzoneIcon />
        <FileUpload.Title>Drop files here</FileUpload.Title>
      </FileUpload.Dropzone>
      <FileUpload.List />
    </FileUpload>
  ),
});

export const CustomPreview = meta.story({
  render: () => {
    const CustomPreviewList = () => {
      const fileUpload = useFileUpload();

      const files = fileUpload.acceptedFiles;

      if (files.length === 0) {
        return null;
      }

      return (
        <FileUpload.ItemGroup className="grid grid-cols-4 gap-2">
          {files.map((file) => (
            <FileUpload.Item file={file} key={file.name}>
              <FileUpload.ItemPreview className="size-auto w-full rounded-2xl" type="image/*">
                <FileUpload.ItemPreviewImage />
              </FileUpload.ItemPreview>
              <FileUpload.ItemDeleteTrigger asChild>
                <Button className="absolute -top-2 -right-2" pill size="icon-xs">
                  <XIcon />
                </Button>
              </FileUpload.ItemDeleteTrigger>
            </FileUpload.Item>
          ))}
        </FileUpload.ItemGroup>
      );
    };
    return (
      <FileUpload accept="image/*">
        <FileUpload.Dropzone>
          <FileUpload.DropzoneIcon />
          <FileUpload.Title>Drop files here</FileUpload.Title>
        </FileUpload.Dropzone>
        <CustomPreviewList />
      </FileUpload>
    );
  },
});

export const DirectoryUpload = meta.story({
  render: () => (
    <FileUpload directory>
      <div className="flex justify-center">
        <FileUpload.Trigger asChild>
          <Button size="sm" variant="outline">
            <FolderIcon />
            Select folder
          </Button>
        </FileUpload.Trigger>
        <FileUpload.List />
      </div>
    </FileUpload>
  ),
});

export const Dropzone = meta.story({
  render: () => (
    <FileUpload>
      <FileUpload.Dropzone>
        <FileUpload.DropzoneIcon />
        <FileUpload.Title>Drop your files here</FileUpload.Title>
      </FileUpload.Dropzone>
      <FileUpload.List />
    </FileUpload>
  ),
});

export const MediaCapture = meta.story({
  render: () => (
    <FileUpload capture="environment">
      <div className="flex justify-center">
        <FileUpload.Trigger asChild>
          <Button variant="outline">
            <CameraIcon />
            Take a picture
          </Button>
        </FileUpload.Trigger>
      </div>
      <FileUpload.List />
    </FileUpload>
  ),
});

export const MultipleFiles = meta.story({
  render: () => (
    <FileUpload maxFiles={5}>
      <FileUpload.Dropzone>
        <FileUpload.DropzoneIcon />
        <FileUpload.Title>Drop files here</FileUpload.Title>
        <div className="flex items-center justify-center gap-2">
          <Separator />
          <FileUpload.Description>or</FileUpload.Description>
          <Separator />
        </div>
        <FileUpload.Trigger asChild>
          <Button>Browse files</Button>
        </FileUpload.Trigger>
        <FileUpload.Helper>You can upload up to 5 files at a time.</FileUpload.Helper>
      </FileUpload.Dropzone>
      <FileUpload.List />
    </FileUpload>
  ),
});

export const Trigger = meta.story({
  render: () => (
    <FileUpload>
      <div className="flex justify-center">
        <FileUpload.Trigger asChild>
          <Button variant="outline">
            <PaperclipIcon />
            Browse files
          </Button>
        </FileUpload.Trigger>
      </div>
      <FileUpload.List />
    </FileUpload>
  ),
});
