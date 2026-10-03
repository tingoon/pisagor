/** @jsxImportSource solid-js */

import { inputGroupWithMenuBlock } from "@pisagor/recipes/blocks/input-group";
import { DropdownMenu, InputGroup } from "@pisagor/solid";
import {
  CopyIcon,
  DotsThreeIcon,
  FileIcon,
  FolderIcon,
} from "@pisagor/solid/icons";

const styles = inputGroupWithMenuBlock();

export function InputGroupWithMenu() {
  return (
    <InputGroup>
      <InputGroup.Input placeholder="Select file..." />
      <InputGroup.Addon align="inline-end">
        <DropdownMenu>
          <DropdownMenu.Trigger
            asChild={(props) => (
              <InputGroup.Button
                {...props()}
                aria-label="Open menu"
                size="icon-xs"
                variant="ghost"
              >
                <DotsThreeIcon aria-hidden />
              </InputGroup.Button>
            )}
          />
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
  );
}
