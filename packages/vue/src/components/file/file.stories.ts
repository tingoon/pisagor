import { PhDownloadSimple, PhTrash } from "@phosphor-icons/vue";
import { Button } from "@pisagor/vue/button";
import { File } from "@pisagor/vue/file";
import { h } from "vue";
import preview from "#/vue/preview";

const meta = preview.meta({
  component: File,
  parameters: {
    docs: {
      description: {
        component:
          "Represents a file such as an uploaded attachment or downloadable document with its name and metadata.",
      },
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
  render: () => ({
    components: { File },
    template: '<File meta="PDF document" name="brand-guidelines.pdf" :size="245760" />',
  }),
});

export const WithActions = meta.story({
  render: () => () =>
    h(File, {
      actions: [
        h(Button, { "aria-label": "Download", size: "icon-xs", variant: "ghost" }, () =>
          h(PhDownloadSimple),
        ),
        h(Button, { "aria-label": "Remove", size: "icon-xs", variant: "ghost" }, () => h(PhTrash)),
      ],
      meta: "PNG image",
      name: "hero-banner.png",
      size: 1_048_576,
    }),
});

export const Compound = meta.story({
  render: () => ({
    components: { Button, File, PhDownloadSimple },
    template: `
      <File.Root>
        <File.Media variant="image">
          <img alt="" height="40" src="https://picsum.photos/seed/file/80/80" width="40" />
        </File.Media>
        <File.Content>
          <File.Name>cover.jpg</File.Name>
          <File.Meta>JPEG image</File.Meta>
          <File.Size :value="409600" />
        </File.Content>
        <File.Actions>
          <Button aria-label="Download" size="icon-xs" variant="ghost">
            <PhDownloadSimple />
          </Button>
        </File.Actions>
      </File.Root>
    `,
  }),
});
