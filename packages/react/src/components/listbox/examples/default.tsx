import { Listbox } from "..";

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
