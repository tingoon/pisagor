<script lang="ts" setup>
import { PhGear, PhInfo, PhUser } from "@phosphor-icons/vue";
import { Button, Dialog, DropdownMenu } from "@pisagor/vue";
import { ref } from "vue";
import { menuDialogBlock } from "#/styles/recipes/overlay";

const styles = menuDialogBlock();

const isOpen = ref(false);

function onOpenChange(details: { open: boolean }) {
  isOpen.value = details.open;
}
</script>

<template>
  <div>
    <DropdownMenu>
      <DropdownMenu.Trigger as-child>
        <Button type="button" variant="outline">Open menu</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item value="settings" @select="isOpen = true">
          <PhGear aria-hidden="true" />
          Open settings
        </DropdownMenu.Item>
        <DropdownMenu.Item disabled value="profile">
          <PhUser aria-hidden="true" />
          View profile
        </DropdownMenu.Item>
        <DropdownMenu.Item disabled value="help">
          <PhInfo aria-hidden="true" />
          Help
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
    <Dialog :open="isOpen" @open-change="onOpenChange">
      <Dialog.Content>
        <Dialog.Header
          description="Adjust preferences without leaving your current context."
          title="Settings"
        />
        <Dialog.Body>
          <p :class="styles.description()">
            You can open dialogs from menu items using the onSelect handler —
            the menu closes, then the dialog opens above the page.
          </p>
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.CloseTrigger as-child>
            <Button type="button" variant="outline">Cancel</Button>
          </Dialog.CloseTrigger>
          <Dialog.CloseTrigger as-child>
            <Button type="button">Save</Button>
          </Dialog.CloseTrigger>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  </div>
</template>
