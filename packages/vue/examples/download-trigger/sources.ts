import Default from "./default.vue?raw";
import DownloadSvg from "./download-svg.vue?raw";
import WithPromise from "./with-promise.vue?raw";

export const imports = `import { DownloadTrigger } from "@pisagor/vue";`;

export const sources = {
  Default,
  DownloadSvg,
  WithPromise,
} as const;
