import { Portal } from "@ark-ui/react";
import { ContextMenu } from "@pisagor/react";

export function Compound() {
  return (
    <ContextMenu.Root>
      <ContextMenu.ContextTrigger className="flex aspect-video items-center justify-center rounded-2xl border border-dashed p-20 text-sm">
        Right-click or long press here
      </ContextMenu.ContextTrigger>
      <Portal>
        <ContextMenu.Positioner>
          <ContextMenu.Content className="w-40">
            <ContextMenu.Item value="copy">
              Copy
              <ContextMenu.Shortcut>⌘C</ContextMenu.Shortcut>
            </ContextMenu.Item>
            <ContextMenu.Item value="paste">
              Paste
              <ContextMenu.Shortcut>⌘V</ContextMenu.Shortcut>
            </ContextMenu.Item>
            <ContextMenu.Separator />
            <ContextMenu.Item value="delete" variant="destructive">
              Delete
            </ContextMenu.Item>
          </ContextMenu.Content>
        </ContextMenu.Positioner>
      </Portal>
    </ContextMenu.Root>
  );
}
