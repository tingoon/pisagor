/** @jsxImportSource solid-js */

import { Menu } from "@pisagor/solid";
import {
  ArchiveIcon,
  HouseIcon,
  MagnifyingGlassIcon,
} from "@pisagor/solid/icons";

export function WithGroups() {
  return (
    <div class="w-56 rounded-xl border bg-background p-1 shadow-xs/5">
      <Menu aria-label="Application">
        <Menu.Group>
          <Menu.GroupLabel>Navigation</Menu.GroupLabel>
          <Menu.List>
            <Menu.Link active href="#home">
              <HouseIcon />
              Home
            </Menu.Link>
            <Menu.Link href="#search">
              <MagnifyingGlassIcon />
              Search
            </Menu.Link>
          </Menu.List>
        </Menu.Group>
        <Menu.Separator />
        <Menu.Group>
          <Menu.GroupLabel>Library</Menu.GroupLabel>
          <Menu.List>
            <Menu.Link href="#archive">
              <ArchiveIcon />
              Archive
            </Menu.Link>
          </Menu.List>
        </Menu.Group>
      </Menu>
    </div>
  );
}
