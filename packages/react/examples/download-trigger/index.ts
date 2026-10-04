import defaultRaw from "./default.tsx?raw";
import download_svgRaw from "./download-svg.tsx?raw";
import with_promiseRaw from "./with-promise.tsx?raw";

export const imports = `import { DownloadTrigger } from "@pisagor/react";`;

export const sources = {
  Default: defaultRaw,
  DownloadSvg: download_svgRaw,
  WithPromise: with_promiseRaw,
} as const;

export * from "./default";
export * from "./download-svg";
export * from "./with-promise";
