import source from "./with-value.tsx?raw";
import { CircularProgress } from "@pisagor/react";

export function WithValue() {
  return <CircularProgress isValueVisible size={66} thickness={5} value={66} />;
}

export { source as WithValueSource };
