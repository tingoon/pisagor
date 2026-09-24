import { ContextMenu } from "../index";

export function Default() {
  return (
    <ContextMenu>
      <ContextMenu.ContextTrigger class="flex h-32 w-64 items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenu.ContextTrigger>
      <ContextMenu.Content>
        <ContextMenu.Item value="back">Back</ContextMenu.Item>
        <ContextMenu.Item value="forward">Forward</ContextMenu.Item>
        <ContextMenu.Separator />
        <ContextMenu.Item value="reload">Reload</ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu>
  );
}
