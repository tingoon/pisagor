import { Button } from "@pisagor/react";
import { DropdownMenu } from "..";
export function Placements() {
  const placements = ["left", "top", "bottom", "right"] as const;
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {placements.map((placement) => (
        <DropdownMenu key={placement} positioning={{ placement }}>
          <DropdownMenu.Trigger asChild>
            <Button className="capitalize" variant="outline">
              {placement}
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content className="w-36">
            <DropdownMenu.Item value="edit">Edit</DropdownMenu.Item>
            <DropdownMenu.Item value="copy">Copy</DropdownMenu.Item>
            <DropdownMenu.Item value="share">Share</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu>
      ))}
    </div>
  );
}
