<script lang="ts">
import { inputGroupWithMenuBlock } from "@pisagor/recipes/blocks/input-group";
import { DropdownMenu, InputGroup } from "@pisagor/svelte";
import CopyIcon from "phosphor-svelte/lib/CopyIcon";
import DotsThreeIcon from "phosphor-svelte/lib/DotsThreeIcon";
import FileIcon from "phosphor-svelte/lib/FileIcon";
import FolderIcon from "phosphor-svelte/lib/FolderIcon";

const styles = inputGroupWithMenuBlock();
</script>

<InputGroup>
  <InputGroup.Input placeholder="Select file..." />
  <InputGroup.Addon align="inline-end">
    <DropdownMenu>
      <DropdownMenu.Trigger>
        <InputGroup.Button
          aria-label="Open menu"
          size="icon-xs"
          variant="ghost"
        >
          <DotsThreeIcon aria-hidden />
        </InputGroup.Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content class={styles.menu()}>
        <DropdownMenu.Item value="file">
          <FileIcon />
          Select file
        </DropdownMenu.Item>
        <DropdownMenu.Item value="folder">
          <FolderIcon />
          Select folder
        </DropdownMenu.Item>
        <DropdownMenu.Item value="copy-path">
          <CopyIcon />
          Copy path
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  </InputGroup.Addon>
</InputGroup>
