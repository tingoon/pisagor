/** @jsxImportSource solid-js */

import { menuDialogBlock } from "@pisagor/recipes/blocks/overlay";
import { Button, Dialog, DropdownMenu } from "@pisagor/solid";
import { GearIcon, InfoIcon, UserIcon } from "@pisagor/solid/icons";
import { createSignal } from "solid-js";
import { Portal } from "solid-js/web";

const styles = menuDialogBlock();

export function MenuDialog() {
  const [isOpen, setIsOpen] = createSignal(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenu.Trigger
          asChild={(props) => (
            <Button {...props()} variant="outline">
              Open menu
            </Button>
          )}
        />
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
      <Dialog.Root onOpenChange={({ open }) => setIsOpen(open)} open={isOpen()}>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>Settings</Dialog.Title>
                <Dialog.Description>
                  Adjust preferences without leaving your current context.
                </Dialog.Description>
              </Dialog.Header>
              <Dialog.Body>
                <p class={styles.description()}>
                  You can open dialogs from menu items using the onSelect
                  handler — the menu closes, then the dialog opens above the
                  page.
                </p>
              </Dialog.Body>
              <Dialog.Footer>
                <Dialog.CloseTrigger
                  asChild={(props) => (
                    <Button {...props()} variant="outline">
                      Cancel
                    </Button>
                  )}
                />
                <Dialog.CloseTrigger
                  asChild={(props) => <Button {...props()}>Save</Button>}
                />
              </Dialog.Footer>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </>
  );
}
