import { CheckIcon } from "@phosphor-icons/react";
import { Portal } from "@ark-ui/react";
import { ContextMenu } from "@pisagor/react";
import { useState } from "react";

export function Checkboxes() {
  const [showGrid, setShowGrid] = useState(true);
  const [zoom, setZoom] = useState("100");

  return (
    <ContextMenu.Root>
      <ContextMenu.ContextTrigger className="flex aspect-video items-center justify-center rounded-2xl border border-dashed p-20 text-sm">
        Right-click or long press here
      </ContextMenu.ContextTrigger>
      <Portal>
        <ContextMenu.Positioner>
          <ContextMenu.Content className="w-44">
            <ContextMenu.CheckboxItem
              checked={showGrid}
              onCheckedChange={setShowGrid}
              value="grid"
            >
              <ContextMenu.ItemIndicator>
                <CheckIcon />
              </ContextMenu.ItemIndicator>
              <ContextMenu.ItemText>Show grid</ContextMenu.ItemText>
            </ContextMenu.CheckboxItem>
            <ContextMenu.Separator />
            <ContextMenu.RadioItemGroup
              onValueChange={(details) => setZoom(details.value)}
              value={zoom}
            >
              <ContextMenu.ItemGroupLabel>Zoom</ContextMenu.ItemGroupLabel>
              <ContextMenu.RadioItem value="50">
                <ContextMenu.ItemIndicator>
                  <CheckIcon />
                </ContextMenu.ItemIndicator>
                <ContextMenu.ItemText>50%</ContextMenu.ItemText>
              </ContextMenu.RadioItem>
              <ContextMenu.RadioItem value="100">
                <ContextMenu.ItemIndicator>
                  <CheckIcon />
                </ContextMenu.ItemIndicator>
                <ContextMenu.ItemText>100%</ContextMenu.ItemText>
              </ContextMenu.RadioItem>
              <ContextMenu.RadioItem value="200">
                <ContextMenu.ItemIndicator>
                  <CheckIcon />
                </ContextMenu.ItemIndicator>
                <ContextMenu.ItemText>200%</ContextMenu.ItemText>
              </ContextMenu.RadioItem>
            </ContextMenu.RadioItemGroup>
          </ContextMenu.Content>
        </ContextMenu.Positioner>
      </Portal>
    </ContextMenu.Root>
  );
}
