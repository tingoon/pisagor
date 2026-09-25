import { Switch } from "..";

export function Sizes() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Switch defaultChecked />
      <Switch
        className="[--size:--spacing(5)] sm:[--size:--spacing(6)]"
        defaultChecked
      />
    </div>
  );
}
