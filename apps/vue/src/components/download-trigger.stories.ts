import { DownloadTrigger } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/download-trigger/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: DownloadTrigger,
  parameters: {
    docs: {
      description: {
        component:
          "Starts a file download when activated so users can save content without navigating away.",
      },
    },
  },
  title: "Components/Actions/Download Trigger",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const DownloadSvg = meta.story({
  render: exampleRender(Examples.DownloadSvg),
});

export const WithPromise = meta.story({
  render: exampleRender(Examples.WithPromise),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
