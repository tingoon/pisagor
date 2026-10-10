import defaultRaw from "./default.vue?raw";
import download_svgRaw from "./download-svg.vue?raw";
import with_promiseRaw from "./with-promise.vue?raw";

export const imports = `import { DownloadTrigger } from "@pisagor/vue";`;

export const sources = {
  Default: defaultRaw,
  DownloadSvg: download_svgRaw,
  WithPromise: with_promiseRaw,
} as const;
