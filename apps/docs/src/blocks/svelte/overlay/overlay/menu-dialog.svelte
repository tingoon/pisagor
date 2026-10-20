<script lang="ts">
  import { Button, Dialog, DropdownMenu } from "@pisagor/svelte";
  import { GearIcon, InfoIcon, UserIcon } from "phosphor-svelte";
  import { menuDialogBlock } from "#/styles/recipes/overlay";

  const styles = menuDialogBlock();

  let isOpen = $state(false);
</script>

<div>
  <DropdownMenu>
    {#snippet trigger(props)}
      <Button {...props()} variant="outline">Open menu</Button>
    {/snippet}

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
  </DropdownMenu>
  <Dialog
    description="Adjust preferences without leaving your current context."
    onOpenChange={(details: { open: boolean }) => {
      isOpen = details.open;
    }}
    open={isOpen}
    title="Settings"
  >
    {#snippet actions()}
      <Dialog.CloseTrigger>
        {#snippet asChild(props)}
          <Button {...props()} variant="outline">Cancel</Button>
        {/snippet}
      </Dialog.CloseTrigger>
      <Dialog.CloseTrigger>
        {#snippet asChild(props)}
          <Button {...props()}>Save</Button>
        {/snippet}
      </Dialog.CloseTrigger>
    {/snippet}

    <p class={styles.description()}>
      You can open dialogs from menu items using the onSelect handler — the menu
      closes, then the dialog opens above the page.
    </p>
  </Dialog>
</div>
