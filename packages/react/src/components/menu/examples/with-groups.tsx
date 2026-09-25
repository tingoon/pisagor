import {
  ArchiveIcon,
  HouseIcon,
  MagnifyingGlassIcon,
} from "@phosphor-icons/react";
import { Menu } from "..";

export function WithGroups() {
  return (
    <div className="w-56 rounded-xl border bg-background p-1 shadow-xs/5">
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
