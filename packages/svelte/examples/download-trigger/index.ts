import defaultRaw from "./default.svelte?raw";
import download_svgRaw from "./download-svg.svelte?raw";
import with_promiseRaw from "./with-promise.svelte?raw";

export const imports = `import { DownloadTrigger } from "@pisagor/svelte";`;

export const sources = {
  Default: defaultRaw,
  DownloadSvg: download_svgRaw,
  WithPromise: with_promiseRaw,
} as const;

export { default as Default } from "./default.svelte";
export { default as DownloadSvg } from "./download-svg.svelte";
export { default as WithPromise } from "./with-promise.svelte";
