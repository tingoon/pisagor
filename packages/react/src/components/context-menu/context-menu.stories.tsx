import {
  ArchiveIcon,
  ArrowBendDoubleUpLeftIcon,
  ArrowBendUpLeftIcon,
  BellIcon,
  EnvelopeSimpleIcon,
  FolderOpenIcon,
  NotePencilIcon,
  PaperPlaneTiltIcon,
  PlusCircleIcon,
  TrashIcon,
} from "@phosphor-icons/react";
import { ContextMenu } from "@pisagor/react";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: ContextMenu,
  parameters: {
    docs: {
      description: {
        component:
          "Opens a menu of actions at the pointer so users can act on an item in its surrounding context.",
      },
    },
    metadata: {
      aliases: ["right-click-menu"],
      api: "compound",
      taxonomy: "pattern",
    },
  },
  subcomponents: {
    Content: ContextMenu.Content,
    ContextTrigger: ContextMenu.ContextTrigger,
    Item: ContextMenu.Item,
    ItemGroup: ContextMenu.ItemGroup,
    Separator: ContextMenu.Separator,
    Shortcut: ContextMenu.Shortcut,
    Sub: ContextMenu.Sub,
    SubContent: ContextMenu.SubContent,
    TriggerItem: ContextMenu.TriggerItem,
  },
  title: "Components/Overlay/Context Menu",
});

export const Default = meta.story({
  render: () => (
    <ContextMenu>
      <ContextMenu.ContextTrigger className="flex aspect-video items-center justify-center rounded-2xl border border-dashed p-20 text-sm">
        <span className="pointer-fine:inline-block hidden">Open the menu with a right-click</span>
        <span className="pointer-coarse:inline-block hidden">Long press here</span>
      </ContextMenu.ContextTrigger>
      <ContextMenu.Content className="w-40">
        <ContextMenu.ItemGroup>
          <ContextMenu.Item value="forward">
            <PaperPlaneTiltIcon /> Forward
            <ContextMenu.Shortcut>⌘F</ContextMenu.Shortcut>
          </ContextMenu.Item>
          <ContextMenu.Item value="reply">
            <ArrowBendUpLeftIcon /> Reply
            <ContextMenu.Shortcut>⌘R</ContextMenu.Shortcut>
          </ContextMenu.Item>
          <ContextMenu.Item value="reply-all">
            <ArrowBendDoubleUpLeftIcon /> Reply all
            <ContextMenu.Shortcut>⌘A</ContextMenu.Shortcut>
          </ContextMenu.Item>
          <ContextMenu.Item value="archive">
            <ArchiveIcon /> Archive
            <ContextMenu.Shortcut>⌘Z</ContextMenu.Shortcut>
          </ContextMenu.Item>
          <ContextMenu.Sub>
            <ContextMenu.TriggerItem>
              <FolderOpenIcon /> Move to
            </ContextMenu.TriggerItem>
            <ContextMenu.SubContent>
              <ContextMenu.Item value="move-to-folder-1">
                <ArchiveIcon /> Junk
              </ContextMenu.Item>
              <ContextMenu.Item value="move-to-folder-2">
                <TrashIcon /> Trash
              </ContextMenu.Item>
              <ContextMenu.Item value="move-to-folder-3">
                <BellIcon /> Reminders
              </ContextMenu.Item>
              <ContextMenu.Sub>
                <ContextMenu.TriggerItem>
                  <PlusCircleIcon />
                  More
                </ContextMenu.TriggerItem>
                <ContextMenu.SubContent>
                  <ContextMenu.Item value="move-to-folder-4">
                    <NotePencilIcon />
                    Drafts
                  </ContextMenu.Item>
                  <ContextMenu.Item value="move-to-folder-6">
                    <EnvelopeSimpleIcon />
                    Spam
                  </ContextMenu.Item>
                </ContextMenu.SubContent>
              </ContextMenu.Sub>
            </ContextMenu.SubContent>
          </ContextMenu.Sub>
          <ContextMenu.Separator />
          <ContextMenu.Item value="delete" variant="destructive">
            <TrashIcon /> Delete
            <ContextMenu.Shortcut>⌘ ⌫</ContextMenu.Shortcut>
          </ContextMenu.Item>
        </ContextMenu.ItemGroup>
      </ContextMenu.Content>
    </ContextMenu>
  ),
});
