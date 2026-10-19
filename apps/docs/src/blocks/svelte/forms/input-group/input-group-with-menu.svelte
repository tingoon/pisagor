<script lang="ts">
  import { DropdownMenu, InputGroup } from "@pisagor/svelte";
  import {
    CopyIcon,
    DotsThreeIcon,
    FileIcon,
    FolderIcon,
  } from "phosphor-svelte";
  import { inputGroupWithMenuBlock } from "#/styles/recipes/input-group";

  const styles = inputGroupWithMenuBlock();
</script>

<InputGroup>
  <InputGroup.Input placeholder="Select file..." />
  <InputGroup.Addon align="inline-end">
    <DropdownMenu classNames={{ content: styles.menu() }}>
      {#snippet trigger(props)}
        <InputGroup.Button
          {...props()}
          aria-label="Open menu"
          size="icon-xs"
          variant="ghost"
        >
          <DotsThreeIcon aria-hidden />
        </InputGroup.Button>
      {/snippet}

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
    </DropdownMenu>
  </InputGroup.Addon>
</InputGroup>
