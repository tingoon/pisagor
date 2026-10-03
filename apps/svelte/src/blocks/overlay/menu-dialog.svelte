<script lang="ts">
import { menuDialogBlock } from "@pisagor/recipes/blocks/overlay";
import { Button, Dialog, DropdownMenu } from "@pisagor/svelte";
import GearIcon from "phosphor-svelte/lib/GearIcon";
import InfoIcon from "phosphor-svelte/lib/InfoIcon";
import UserIcon from "phosphor-svelte/lib/UserIcon";

const styles = menuDialogBlock();

let isOpen = $state(false);
</script>

<div>
  <DropdownMenu>
    <DropdownMenu.Trigger>
      <Button variant="outline">Open menu</Button>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content>
      <DropdownMenu.Item onSelect={() => (isOpen = true)} value="settings">
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
  <Dialog.Root
    onOpenChange={(details) => {
  isOpen = typeof details === "boolean" ? details : Boolean(details?.open);
}}
    open={isOpen}
  >
    <Dialog.Content>
      <Dialog.Header>
        <Dialog.Title>Settings</Dialog.Title>
        <Dialog.Description>
          Adjust preferences without leaving your current context.
        </Dialog.Description>
      </Dialog.Header>
      <Dialog.Body>
        <p class={styles.description()}>
          You can open dialogs from menu items using the onSelect handler — the
          menu closes, then the dialog opens above the page.
        </p>
      </Dialog.Body>
      <Dialog.Footer>
        <Dialog.CloseTrigger>
          <Button variant="outline">Cancel</Button>
        </Dialog.CloseTrigger>
        <Dialog.CloseTrigger>
          <Button>Save</Button>
        </Dialog.CloseTrigger>
      </Dialog.Footer>
    </Dialog.Content>
  </Dialog.Root>
</div>
