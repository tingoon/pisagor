import { DefaultSource as Default } from "./default";
import { DownloadSvgSource as DownloadSvg } from "./download-svg";
import { WithPromiseSource as WithPromise } from "./with-promise";

export const imports = `import { DownloadTrigger } from "@pisagor/solid";`;

export const sources = {
  Default,
  DownloadSvg,
  WithPromise,
} as const;
