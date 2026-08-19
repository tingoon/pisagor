import { PhCopy, PhPencil, PhTrash } from "@phosphor-icons/vue";
import { ContextMenu } from "@pisagor/vue/context-menu";
import preview from "#/vue/preview";

const meta = preview.meta({
  component: ContextMenu,
  parameters: {
    docs: {
      description: {
        component: "Opens a menu of actions at the pointer position when the user right-clicks.",
      },
    },
  },
  subcomponents: {
    Content: ContextMenu.Content,
    Group: ContextMenu.Group,
    Item: ContextMenu.Item,
    Separator: ContextMenu.Separator,
    Shortcut: ContextMenu.Shortcut,
    Sub: ContextMenu.Sub,
    SubContent: ContextMenu.SubContent,
    SubTrigger: ContextMenu.SubTrigger,
    Trigger: ContextMenu.Trigger,
  },
  title: "Components/Navigation/Context Menu",
});

export const Default = meta.story({
  render: () => ({
    components: { ContextMenu, PhCopy, PhPencil, PhTrash },
    template: `
      <ContextMenu>
        <ContextMenu.Trigger class="flex h-32 w-64 items-center justify-center rounded-lg border border-dashed text-sm">
          Right click here
        </ContextMenu.Trigger>
        <ContextMenu.Content class="w-48">
          <ContextMenu.Item value="edit"><PhPencil /> Edit</ContextMenu.Item>
          <ContextMenu.Item value="copy"><PhCopy /> Copy</ContextMenu.Item>
          <ContextMenu.Separator />
          <ContextMenu.Item value="delete" variant="destructive"><PhTrash /> Delete</ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu>
    `,
  }),
});
