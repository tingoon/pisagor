import { CheckIcon } from "@squidlab/phosphor-solid/icons";
import { Portal } from "solid-js/web";
import { ContextMenu } from "@pisagor/solid";
import { createSignal } from "solid-js";

export function Checkboxes() {
  const [showGrid, setShowGrid] = createSignal(true);
  const [zoom, setZoom] = createSignal("100");

  return (
    <ContextMenu.Root>
      <ContextMenu.ContextTrigger class="flex aspect-video items-center justify-center rounded-2xl border border-dashed p-20 text-sm">
        Right-click or long press here
      </ContextMenu.ContextTrigger>
      <Portal>
        <ContextMenu.Positioner>
          <ContextMenu.Content class="w-44">
            <ContextMenu.CheckboxItem
              checked={showGrid()}
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
              value={zoom()}
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
