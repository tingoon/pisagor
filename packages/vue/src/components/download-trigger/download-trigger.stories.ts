import { PhDownload, PhFileText } from "@phosphor-icons/vue";
import { Button, DownloadTrigger, Item } from "@pisagor/vue";
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
    metadata: {
      api: "closed",
      taxonomy: "primitive",
    },
  },
  title: "Components/Actions/Download Trigger",
});

export const Default = meta.story({
  render: () => ({
    components: { Button, DownloadTrigger, Item, PhDownload, PhFileText },
    setup() {
      const text = sampleText();
      return { text };
    },
    template: `
      <div class="flex flex-col gap-2">
        <Item variant="outline">
          <PhFileText />
          <Item.Title>{{ text }}</Item.Title>
        </Item>
        <DownloadTrigger as-child :data="text" file-name="hello.txt" mime-type="text/plain">
          <Button size="lg" variant="outline">
            <PhDownload />
            Download
          </Button>
        </DownloadTrigger>
      </div>
    `,
  }),
});

export const DownloadSvg = meta.story({
  render: () => ({
    components: { Button, DownloadTrigger, PhDownload },
    setup() {
      const svg = sampleSvg();
      return { svg };
    },
    template: `
      <DownloadTrigger as-child :data="svg" file-name="icon.svg" mime-type="image/svg+xml">
        <Button size="lg" variant="outline">
          <PhDownload />
          Download SVG
        </Button>
      </DownloadTrigger>
    `,
  }),
});

export const WithPromise = meta.story({
  render: () => ({
    components: { Button, DownloadTrigger, PhDownload },
    setup() {
      const data = () =>
        new Promise<Blob>((resolve) => {
          setTimeout(() => {
            resolve(
              new Blob(['{"message": "Loaded asynchronously"}'], {
                type: "application/json",
              }),
            );
          }, 500);
        });
      return { data };
    },
    template: `
      <DownloadTrigger as-child :data="data" file-name="data.json" mime-type="application/json">
        <Button size="lg" variant="outline">
          <PhDownload />
          Download
        </Button>
      </DownloadTrigger>
    `,
  }),
});

function sampleText() {
  return "Hello, World! This is a sample text file.";
}

function sampleSvg() {
  return `<svg fill="none" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="M149.978 73.374c12.889 6.02 17.7 19.947 10.746 31.105l-6.43 10.317c-57.065 91.56-54.802 202.263 5.97 292.018 7.406 10.938 3.167 25.002-9.467 31.414-12.635 6.411-28.882 2.742-36.288-8.196-70.14-103.592-72.753-231.363-6.89-337.039l6.43-10.316c6.954-11.158 23.04-15.323 35.929-9.303M294.024 73.374c12.888 6.02 17.7 19.947 10.746 31.105l-6.431 10.317c-57.065 91.56-54.801 202.263 5.97 292.018 7.406 10.938 3.168 25.002-9.467 31.414-12.634 6.411-28.881 2.742-36.287-8.196-70.142-103.592-72.754-231.363-6.891-337.039l6.43-10.316c6.955-11.158 23.041-15.323 35.93-9.303M438.069 73.374c12.889 6.02 17.7 19.947 10.746 31.105l-6.43 10.317c-57.066 91.56-54.802 202.263 5.97 292.018 7.405 10.938 3.167 25.002-9.467 31.414-12.635 6.411-28.882 2.742-36.288-8.196-70.141-103.592-72.754-231.363-6.891-337.039l6.431-10.316c6.954-11.158 23.04-15.323 35.929-9.303" fill="currentColor"/></svg>`;
}
