/** @jsxImportSource solid-js */
import { Button, DropdownMenu } from "@pisagor/solid";
export function Placements() {
  const placements = ["left", "top", "bottom", "right"] as const;
  return (
    <div class="flex flex-wrap justify-center gap-2">
      {placements.map((placement) => (
        <DropdownMenu positioning={{ placement }}>
          <DropdownMenu.Trigger
            asChild={(props) => (
              <Button {...props()} class="capitalize" variant="outline">
                {placement}
              </Button>
            )}
          />
          <DropdownMenu.Content class="w-36">
            <DropdownMenu.Item value="edit">Edit</DropdownMenu.Item>
            <DropdownMenu.Item value="copy">Copy</DropdownMenu.Item>
            <DropdownMenu.Item value="share">Share</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu>
      ))}
    </div>
  );
}
