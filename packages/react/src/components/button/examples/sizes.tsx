import { PlusIcon } from "@phosphor-icons/react";
import { Button } from "..";

export function Sizes() {
  return (
    <div className="flex flex-col gap-2">
      {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
        <div className="flex items-center gap-2" key={size}>
          <Button size={size}>Button</Button>
          <Button size={`icon-${size}`}>
            <PlusIcon />
          </Button>
        </div>
      ))}
    </div>
  );
}
