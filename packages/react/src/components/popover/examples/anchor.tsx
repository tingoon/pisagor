import { Button, Input } from "@pisagor/react";
import { Popover } from "..";
export function Anchor() {
  return (
    <div>
      <Popover>
        <div className="flex items-center gap-2">
          <Popover.Trigger asChild>
            <Button variant="outline">Open</Button>
          </Popover.Trigger>
          <Popover.Anchor asChild>
            <Input className="w-full" placeholder="jane.doe@example.com" />
          </Popover.Anchor>
          <Popover.Content className="w-56">
            <Popover.Header
              description="We'll send you a link to reset your password."
              title="Enter your email"
            />
          </Popover.Content>
        </div>
      </Popover>
    </div>
  );
}
