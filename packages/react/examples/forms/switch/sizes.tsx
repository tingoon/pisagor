import { Switch } from "@pisagor/react";

export function Sizes() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Switch defaultChecked size="sm" />
      <Switch defaultChecked size="md" />
      <Switch defaultChecked size="lg" />
    </div>
  );
}
