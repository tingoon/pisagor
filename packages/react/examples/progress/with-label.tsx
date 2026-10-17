import source from "./with-label.tsx?raw";
import { Progress } from "@pisagor/react";

export function WithLabel() {
  return <Progress isValueVisible label="Upload progress" value={66} />;
}

export { source as WithLabelSource };
