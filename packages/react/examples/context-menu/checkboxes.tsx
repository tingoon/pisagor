import source from "./checkboxes.tsx?raw";
import { ContextMenu } from "@pisagor/react";
import { useState } from "react";

export function Checkboxes() {
  const [showGrid, setShowGrid] = useState(true);
  const [zoom, setZoom] = useState("100");

  return (
    <ContextMenu>
      <ContextMenu.ContextTrigger className="flex aspect-video items-center justify-center rounded-2xl border border-dashed p-20 text-sm">
        Right-click or long press here
      </ContextMenu.ContextTrigger>
      <ContextMenu.Content className="w-44">
        <ContextMenu.CheckboxItem
          checked={showGrid}
          onCheckedChange={setShowGrid}
          value="grid"
        >
          Show grid
        </ContextMenu.CheckboxItem>
        <ContextMenu.Separator />
        <ContextMenu.RadioItemGroup
          onValueChange={(details) => setZoom(details.value)}
          value={zoom}
        >
          <ContextMenu.ItemGroupLabel>Zoom</ContextMenu.ItemGroupLabel>
          <ContextMenu.RadioItem value="50">50%</ContextMenu.RadioItem>
          <ContextMenu.RadioItem value="100">100%</ContextMenu.RadioItem>
          <ContextMenu.RadioItem value="200">200%</ContextMenu.RadioItem>
        </ContextMenu.RadioItemGroup>
      </ContextMenu.Content>
    </ContextMenu>
  );
}

export { source as CheckboxesSource };
