import source from "./default.tsx?raw";
import { Listbox } from "@pisagor/react";

export function Default() {
  return (
    <Listbox
      defaultValue={["br"]}
      items={[
        { label: "Brazil", value: "br" },
        { label: "Mexico", value: "mx" },
        { label: "Ireland", value: "ie" },
      ]}
    />
  );
}

export { source as DefaultSource };
