import { DownloadTrigger } from "@pisagor/react";
import * as Examples from "@pisagor/react/download-trigger/examples";
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
  render: Examples.Default,
  tags: ["autodocs"],
});

export const DownloadSvg = meta.story({
  render: Examples.DownloadSvg,
});

export const WithPromise = meta.story({
  render: Examples.WithPromise,
});

export const Default = meta.story({
  render: Examples.Default,
});
