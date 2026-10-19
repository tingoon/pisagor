import { Portal } from "solid-js/web";
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
  CaretRightIcon,
  CheckIcon,
} from "@squidlab/phosphor-solid/icons";
import { Button, DropdownMenu } from "@pisagor/solid";

export function Default() {
  return (
    <DropdownMenu
      classNames={{ content: "w-40" }}
      trigger={(props) => (
        <Button {...props} variant="outline">
          Open
        </Button>
      )}
    >
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
            <DropdownMenu.Indicator>
              <CaretRightIcon />
            </DropdownMenu.Indicator>
          </DropdownMenu.TriggerItem>
          <Portal>
            <DropdownMenu.Positioner>
              <DropdownMenu.Content>
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
                    <DropdownMenu.Indicator>
                      <CaretRightIcon />
                    </DropdownMenu.Indicator>
                  </DropdownMenu.TriggerItem>
                  <Portal>
                    <DropdownMenu.Positioner>
                      <DropdownMenu.Content>
                        <DropdownMenu.Item value="move-to-folder-4">
                          <NotePencilIcon />
                          Drafts
                        </DropdownMenu.Item>
                        <DropdownMenu.Item value="move-to-folder-6">
                          <EnvelopeSimpleIcon />
                          Spam
                        </DropdownMenu.Item>
                      </DropdownMenu.Content>
                    </DropdownMenu.Positioner>
                  </Portal>
                </DropdownMenu.Sub>
              </DropdownMenu.Content>
            </DropdownMenu.Positioner>
          </Portal>
        </DropdownMenu.Sub>
        <DropdownMenu.Separator />
        <DropdownMenu.RadioItemGroup value="medium">
          <DropdownMenu.ItemGroupLabel>Priority</DropdownMenu.ItemGroupLabel>
          <DropdownMenu.RadioItem value="low">
            <DropdownMenu.ItemIndicator>
              <CheckIcon />
            </DropdownMenu.ItemIndicator>
            <DropdownMenu.ItemText>Low</DropdownMenu.ItemText>
          </DropdownMenu.RadioItem>
          <DropdownMenu.RadioItem value="medium">
            <DropdownMenu.ItemIndicator>
              <CheckIcon />
            </DropdownMenu.ItemIndicator>
            <DropdownMenu.ItemText>Medium</DropdownMenu.ItemText>
          </DropdownMenu.RadioItem>
          <DropdownMenu.RadioItem value="high">
            <DropdownMenu.ItemIndicator>
              <CheckIcon />
            </DropdownMenu.ItemIndicator>
            <DropdownMenu.ItemText>High</DropdownMenu.ItemText>
          </DropdownMenu.RadioItem>
        </DropdownMenu.RadioItemGroup>
        <DropdownMenu.Separator />
        <DropdownMenu.CheckboxItem checked value="block">
          <DropdownMenu.ItemIndicator>
            <CheckIcon />
          </DropdownMenu.ItemIndicator>
          <DropdownMenu.ItemText>Block sender</DropdownMenu.ItemText>
        </DropdownMenu.CheckboxItem>
        <DropdownMenu.Separator />
        <DropdownMenu.Item value="delete" variant="destructive">
          <TrashIcon /> Delete
          <DropdownMenu.Shortcut>⌘ ⌫</DropdownMenu.Shortcut>
        </DropdownMenu.Item>
      </DropdownMenu.ItemGroup>
    </DropdownMenu>
  );
}
