import source from "./default.tsx?raw";
import { Separator } from "@pisagor/react";

export function Default() {
  return (
    <div className="flex flex-col gap-2 text-sm">
      <div className="flex flex-col gap-1">
        <h4 className="leading-none font-medium">Acme UI</h4>
        <p className="text-muted-foreground">
          A set of primitive components for building UI.
        </p>
      </div>
      <Separator />
      <div>
        A collection of accessible, beautiful, and customizable components.
      </div>
    </div>
  );
}

export { source as DefaultSource };
