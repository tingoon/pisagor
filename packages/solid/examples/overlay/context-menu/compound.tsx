import { Portal } from "solid-js/web";
import { ContextMenu } from "@pisagor/solid";

export function Compound() {
  return (
    <ContextMenu.Root>
      <ContextMenu.ContextTrigger class="flex aspect-video items-center justify-center rounded-2xl border border-dashed p-20 text-sm">
        Right-click or long press here
      </ContextMenu.ContextTrigger>
      <Portal>
        <ContextMenu.Positioner>
          <ContextMenu.Content class="w-40">
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
