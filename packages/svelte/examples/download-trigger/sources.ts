import Default from "./default.svelte?raw";
import DownloadSvg from "./download-svg.svelte?raw";
import WithPromise from "./with-promise.svelte?raw";

export const imports = `import { DownloadTrigger } from "@pisagor/svelte";`;

export const sources = {
  Default,
  DownloadSvg,
  WithPromise,
} as const;
