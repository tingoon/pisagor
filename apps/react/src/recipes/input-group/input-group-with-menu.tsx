import { CopyIcon, DotsThreeIcon, FileIcon, FolderIcon } from "@phosphor-icons/react";
import { DropdownMenu } from "@pisagor/react/dropdown-menu";
import { InputGroup } from "@pisagor/react/input-group";

export function InputGroupWithMenu() {
  return (
    <InputGroup>
      <InputGroup.Input placeholder="Select file..." />
      <InputGroup.Addon align="inline-end">
        <DropdownMenu>
          <DropdownMenu.Trigger asChild>
            <InputGroup.Button aria-label="Open menu" size="icon-xs" variant="ghost">
              <DotsThreeIcon aria-hidden />
            </InputGroup.Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content className="w-48">
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
  );
}
