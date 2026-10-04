import { stripTsxExample } from "@pisagor/utils";
import defaultRaw from "./default.tsx?raw";
import download_svgRaw from "./download-svg.tsx?raw";
import with_promiseRaw from "./with-promise.tsx?raw";

export const imports = `import { DownloadTrigger } from "@pisagor/react/download-trigger";`;

export const sources = {
  Default: stripTsxExample(defaultRaw),
  DownloadSvg: stripTsxExample(download_svgRaw),
  WithPromise: stripTsxExample(with_promiseRaw),
} as const;

export { Default } from "./default";
export { DownloadSvg } from "./download-svg";
export { WithPromise } from "./with-promise";
