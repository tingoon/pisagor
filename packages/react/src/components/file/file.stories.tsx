import { DownloadSimpleIcon, TrashIcon } from "@phosphor-icons/react";
import { Button } from "@pisagor/react/button";
import { File } from "@pisagor/react/file";
import preview from "#/react/preview";

const meta = preview.meta({
  component: File,
  parameters: {
    docs: {
      aliases: ["attachment", "file-row"],
      api: "compound-shorthand",
      checklist: {
        accessibleColor: true,
        definedOptions: true,
        platformScales: true,
      },
      description: {
        component:
          "Represents a file such as an uploaded attachment or downloadable document with its name and metadata.",
      },
      taxonomy: "standard",
    },
  },
  subcomponents: {
    Actions: File.Actions,
    Content: File.Content,
    Media: File.Media,
    Meta: File.Meta,
    Name: File.Name,
    Root: File.Root,
    Size: File.Size,
  },
  title: "Components/Data Display/File",
});

export const Default = meta.story({
  args: {
    meta: "PDF document",
    name: "brand-guidelines.pdf",
    size: 245_760,
  },
});

export const WithActions = meta.story({
  args: {
    actions: (
      <>
        <Button aria-label="Download" size="icon-xs" variant="ghost">
          <DownloadSimpleIcon />
        </Button>
        <Button aria-label="Remove" size="icon-xs" variant="ghost">
          <TrashIcon />
        </Button>
      </>
    ),
    meta: "PNG image",
    name: "hero-banner.png",
    size: 1_048_576,
  },
});

export const Compound = meta.story({
  render: () => (
    <File.Root>
      <File.Media variant="image">
        <img alt="" height={40} src="https://picsum.photos/seed/file/80/80" width={40} />
      </File.Media>
      <File.Content>
        <File.Name>cover.jpg</File.Name>
        <File.Meta>JPEG image</File.Meta>
        <File.Size value={409_600} />
      </File.Content>
      <File.Actions>
        <Button aria-label="Download" size="icon-xs" variant="ghost">
          <DownloadSimpleIcon />
        </Button>
      </File.Actions>
    </File.Root>
  ),
});
