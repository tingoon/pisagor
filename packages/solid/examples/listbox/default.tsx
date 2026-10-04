/** @jsxImportSource solid-js */
import { Listbox } from "@pisagor/solid";

export function Default() {
  return (
    <Listbox
      items={[
        { label: "React", value: "react" },
        { label: "Solid", value: "solid" },
        { label: "Vue", value: "vue" },
      ]}
    />
  );
}
