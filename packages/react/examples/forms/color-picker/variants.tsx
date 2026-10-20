import { ColorPicker } from "@pisagor/react";

export function Variants() {
  return (
    <div className="flex flex-col gap-2">
      <ColorPicker defaultValue="#eb5e41" format="hsla" variant="primary" />
      <ColorPicker defaultValue="#eb5e41" format="hsla" variant="secondary" />
    </div>
  );
}
