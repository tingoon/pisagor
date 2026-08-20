import { GearIcon, InfoIcon, UserIcon } from "@phosphor-icons/react";
import { Button, Dialog, DropdownMenu } from "@pisagor/react";
import { useState } from "react";

export function MenuDialog() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenu.Trigger asChild>
          <Button variant="outline">Open</Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item onSelect={() => setIsOpen(true)} value="settings">
            <GearIcon />
            Open settings
          </DropdownMenu.Item>
          <DropdownMenu.Item disabled value="profile">
            <UserIcon />
            View profile
          </DropdownMenu.Item>
          <DropdownMenu.Item disabled value="help">
            <InfoIcon />
            Help
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
      <Dialog onOpenChange={({ open }) => setIsOpen(open)} open={isOpen}>
        <Dialog.Content>
          <Dialog.Header description="This dialog was opened from a menu item" title="Settings" />
          <Dialog.Body>
            <p className="text-muted-foreground text-sm">
              You can open dialogs imperatively from menu items using the onSelect handler.
            </p>
          </Dialog.Body>
          <Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <Button variant="outline">Cancel</Button>
            </Dialog.CloseTrigger>
            <Dialog.CloseTrigger asChild>
              <Button>Save</Button>
            </Dialog.CloseTrigger>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>
    </>
  );
}
