import {
  ArchiveIcon,
  ArrowBendUpLeftIcon,
  BellIcon,
  EnvelopeSimpleIcon,
  FolderOpenIcon,
  NotePencilIcon,
  PaperPlaneTiltIcon,
  PlusCircleIcon,
  TrashIcon,
} from "@phosphor-icons/react";
import { Button } from "@pisagor/react";
import { DropdownMenu } from "..";
export function Default() {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="w-40">
        <DropdownMenu.ItemGroup>
          <DropdownMenu.Item value="forward">
            <PaperPlaneTiltIcon /> Forward
            <DropdownMenu.Shortcut>⌘F</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
          <DropdownMenu.Item value="reply">
            <ArrowBendUpLeftIcon /> Reply
            <DropdownMenu.Shortcut>⌘R</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
          <DropdownMenu.Item value="archive">
            <ArchiveIcon /> Archive
            <DropdownMenu.Shortcut>⌘Z</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
          <DropdownMenu.Sub>
            <DropdownMenu.TriggerItem>
              <FolderOpenIcon /> Move to
            </DropdownMenu.TriggerItem>
            <DropdownMenu.SubContent>
              <DropdownMenu.Item value="move-to-folder-1">
                <ArchiveIcon /> Junk
              </DropdownMenu.Item>
              <DropdownMenu.Item value="move-to-folder-2">
                <TrashIcon /> Trash
              </DropdownMenu.Item>
              <DropdownMenu.Item value="move-to-folder-3">
                <BellIcon /> Reminders
              </DropdownMenu.Item>
              <DropdownMenu.Sub>
                <DropdownMenu.TriggerItem>
                  <PlusCircleIcon />
                  More
                </DropdownMenu.TriggerItem>
                <DropdownMenu.SubContent>
                  <DropdownMenu.Item value="move-to-folder-4">
                    <NotePencilIcon />
                    Drafts
                  </DropdownMenu.Item>
                  <DropdownMenu.Item value="move-to-folder-6">
                    <EnvelopeSimpleIcon />
                    Spam
                  </DropdownMenu.Item>
                </DropdownMenu.SubContent>
              </DropdownMenu.Sub>
            </DropdownMenu.SubContent>
          </DropdownMenu.Sub>
          <DropdownMenu.Separator />
          <DropdownMenu.RadioItemGroup heading="Priority" value="medium">
            <DropdownMenu.RadioItem value="low">Low</DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem value="medium">
              Medium
            </DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem value="high">High</DropdownMenu.RadioItem>
          </DropdownMenu.RadioItemGroup>
          <DropdownMenu.Separator />
          <DropdownMenu.CheckboxItem checked value="block">
            Block sender
          </DropdownMenu.CheckboxItem>
          <DropdownMenu.Separator />
          <DropdownMenu.Item value="delete" variant="destructive">
            <TrashIcon /> Delete
            <DropdownMenu.Shortcut>⌘ ⌫</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
        </DropdownMenu.ItemGroup>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
}
