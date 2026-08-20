import {
  PhArchive,
  PhArrowClockwise,
  PhArrowSquareOut,
  PhChatCircle,
  PhCopy,
  PhGear,
  PhHand,
  PhPaperPlaneTilt,
  PhPencil,
  PhShare,
  PhSignOut,
  PhTrash,
  PhUser,
} from "@phosphor-icons/vue";
import { Button, DropdownMenu } from "@pisagor/vue";
import preview from "#/vue/preview";

const meta = preview.meta({
  component: DropdownMenu,
  parameters: {
    docs: {
      description: {
        component:
          "Opens a dropdown list of actions or destinations from a trigger for navigation and contextual commands.",
      },
    },
  },
  subcomponents: {
    Arrow: DropdownMenu.Arrow,
    CheckboxItem: DropdownMenu.CheckboxItem,
    Content: DropdownMenu.Content,
    Group: DropdownMenu.Group,
    GroupLabel: DropdownMenu.GroupLabel,
    Item: DropdownMenu.Item,
    Positioner: DropdownMenu.Positioner,
    QuickItem: DropdownMenu.QuickItem,
    RadioGroup: DropdownMenu.RadioGroup,
    RadioItem: DropdownMenu.RadioItem,
    Separator: DropdownMenu.Separator,
    Shortcut: DropdownMenu.Shortcut,
    Sub: DropdownMenu.Sub,
    SubContent: DropdownMenu.SubContent,
    SubTrigger: DropdownMenu.SubTrigger,
    Trigger: DropdownMenu.Trigger,
  },
  title: "Components/Navigation/Dropdown Menu",
});

export const Default = meta.story({
  render: () => ({
    components: { Button, DropdownMenu, PhArchive, PhPaperPlaneTilt },
    template: `
      <DropdownMenu>
        <DropdownMenu.Trigger as-child>
          <Button variant="outline">Open</Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content class="w-40">
          <DropdownMenu.Group>
            <DropdownMenu.Item value="forward">
              <PhPaperPlaneTilt /> Forward
              <DropdownMenu.Shortcut>⌘F</DropdownMenu.Shortcut>
            </DropdownMenu.Item>
            <DropdownMenu.Item value="archive">
              <PhArchive /> Archive
            </DropdownMenu.Item>
          </DropdownMenu.Group>
        </DropdownMenu.Content>
      </DropdownMenu>
    `,
  }),
});

export const Shortcuts = meta.story({
  render: () => ({
    components: { Button, DropdownMenu, PhCopy, PhGear, PhSignOut, PhUser },
    template: `
      <DropdownMenu>
        <DropdownMenu.Trigger as-child>
          <Button variant="outline">Open</Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content class="w-40">
          <DropdownMenu.Item value="profile">
            <PhUser />
            Profile
            <DropdownMenu.Shortcut>⌘P</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
          <DropdownMenu.Item value="settings">
            <PhGear />
            Settings
            <DropdownMenu.Shortcut>⌘S</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
          <DropdownMenu.Item value="copy">
            <PhCopy />
            Copy
            <DropdownMenu.Shortcut>⌘C</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item value="logout">
            <PhSignOut />
            Log out
            <DropdownMenu.Shortcut>⌘Q</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    `,
  }),
});

export const Checkboxes = meta.story({
  render: () => ({
    components: { Button, DropdownMenu },
    template: `
      <DropdownMenu>
        <DropdownMenu.Trigger as-child>
          <Button variant="outline">Open</Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content class="w-40">
          <DropdownMenu.Group heading="Appearance">
            <DropdownMenu.CheckboxItem checked value="save">
              Status bar
            </DropdownMenu.CheckboxItem>
            <DropdownMenu.CheckboxItem :checked="false" value="notifications">
              Activity bar
            </DropdownMenu.CheckboxItem>
            <DropdownMenu.CheckboxItem :checked="false" disabled value="dark-mode">
              Panel
            </DropdownMenu.CheckboxItem>
          </DropdownMenu.Group>
        </DropdownMenu.Content>
      </DropdownMenu>
    `,
  }),
});

export const Destructive = meta.story({
  render: () => ({
    components: { Button, DropdownMenu, PhCopy, PhPencil, PhTrash },
    template: `
      <DropdownMenu>
        <DropdownMenu.Trigger as-child>
          <Button variant="outline">Open</Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content class="w-40">
          <DropdownMenu.Item value="edit">
            <PhPencil />
            Edit
          </DropdownMenu.Item>
          <DropdownMenu.Item value="duplicate">
            <PhCopy />
            Duplicate
          </DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item value="delete" variant="destructive">
            <PhTrash />
            Delete
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    `,
  }),
});

export const GroupLabel = meta.story({
  render: () => ({
    components: { Button, DropdownMenu },
    template: `
      <DropdownMenu>
        <DropdownMenu.Trigger as-child>
          <Button variant="outline">Open</Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content class="w-40">
          <DropdownMenu.Group heading="Account">
            <DropdownMenu.Item value="profile">Profile</DropdownMenu.Item>
            <DropdownMenu.Item value="billing">Billing</DropdownMenu.Item>
          </DropdownMenu.Group>
          <DropdownMenu.Separator />
          <DropdownMenu.Group>
            <DropdownMenu.GroupLabel>Support</DropdownMenu.GroupLabel>
            <DropdownMenu.Item value="docs">Docs</DropdownMenu.Item>
            <DropdownMenu.Item value="contact">Contact</DropdownMenu.Item>
          </DropdownMenu.Group>
        </DropdownMenu.Content>
      </DropdownMenu>
    `,
  }),
});

export const Icons = meta.story({
  render: () => ({
    components: { Button, DropdownMenu, PhCopy, PhPencil, PhShare },
    template: `
      <DropdownMenu>
        <DropdownMenu.Trigger as-child>
          <Button variant="outline">Open</Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content class="w-40">
          <DropdownMenu.Item value="edit">
            <PhPencil />
            Edit
          </DropdownMenu.Item>
          <DropdownMenu.Item value="copy">
            <PhCopy />
            Copy
          </DropdownMenu.Item>
          <DropdownMenu.Item value="share">
            <PhShare />
            Share
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    `,
  }),
});

export const Link = meta.story({
  render: () => ({
    components: { Button, DropdownMenu, PhArrowSquareOut },
    template: `
      <DropdownMenu>
        <DropdownMenu.Trigger as-child>
          <Button variant="outline">Open</Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content class="w-40">
          <DropdownMenu.Item as-child value="docs">
            <a href="https://example.com/docs" rel="noopener noreferrer" target="_blank">
              External link
              <DropdownMenu.Shortcut>
                <PhArrowSquareOut />
              </DropdownMenu.Shortcut>
            </a>
          </DropdownMenu.Item>
          <DropdownMenu.Item as-child value="components">
            <a href="/docs/components">View docs</a>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    `,
  }),
});

export const Nested = meta.story({
  render: () => ({
    components: { Button, DropdownMenu },
    template: `
      <DropdownMenu>
        <DropdownMenu.Trigger as-child>
          <Button variant="outline">Open</Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content class="w-40">
          <DropdownMenu.Item value="item-one">Item one</DropdownMenu.Item>
          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger>More</DropdownMenu.SubTrigger>
            <DropdownMenu.SubContent>
              <DropdownMenu.Item value="sub-a">Sub item A</DropdownMenu.Item>
              <DropdownMenu.Item value="sub-b">Sub item B</DropdownMenu.Item>
            </DropdownMenu.SubContent>
          </DropdownMenu.Sub>
          <DropdownMenu.Item value="item-two">Item two</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    `,
  }),
});

export const QuickItem = meta.story({
  render: () => ({
    components: {
      Button,
      DropdownMenu,
      PhArrowClockwise,
      PhChatCircle,
      PhCopy,
      PhHand,
      PhPencil,
      PhShare,
    },
    template: `
      <DropdownMenu>
        <DropdownMenu.Trigger as-child>
          <Button variant="outline">Open</Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content class="w-44">
          <DropdownMenu.Group heading="Actions">
            <DropdownMenu.Item value="edit">
              <PhPencil />
              Edit
            </DropdownMenu.Item>
            <DropdownMenu.Item value="add-action">
              <PhArrowClockwise />
              Add Action
            </DropdownMenu.Item>
            <DropdownMenu.Item value="key-point">
              <PhHand />
              Key Point
            </DropdownMenu.Item>
            <DropdownMenu.Item value="comment">
              <PhChatCircle />
              Comment
            </DropdownMenu.Item>
          </DropdownMenu.Group>
          <DropdownMenu.Separator />
          <div class="flex w-full gap-1">
            <DropdownMenu.QuickItem class="min-w-0 flex-1" value="copy">
              <PhCopy />
              Copy
            </DropdownMenu.QuickItem>
            <DropdownMenu.QuickItem class="min-w-0 flex-1" value="share">
              <PhShare />
              Share
            </DropdownMenu.QuickItem>
          </div>
        </DropdownMenu.Content>
      </DropdownMenu>
    `,
  }),
});

export const RadioGroup = meta.story({
  render: () => ({
    components: { Button, DropdownMenu },
    template: `
      <DropdownMenu>
        <DropdownMenu.Trigger as-child>
          <Button variant="outline">Open</Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content class="w-40">
          <DropdownMenu.RadioGroup value="dark">
            <DropdownMenu.RadioItem value="light">Light</DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem value="dark">Dark</DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem value="system">System</DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup>
        </DropdownMenu.Content>
      </DropdownMenu>
    `,
  }),
});

export const WithScroll = meta.story({
  render: () => ({
    components: { Button, DropdownMenu },
    setup() {
      const items = Array.from({ length: 15 }, (_, i) => `Item ${i + 1}`);
      return { items };
    },
    template: `
      <DropdownMenu>
        <DropdownMenu.Trigger as-child>
          <Button variant="outline">Open</Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content class="max-h-60 min-w-40">
          <DropdownMenu.Item v-for="(label, index) in items" :key="label" :value="\`item-\${index + 1}\`">
            {{ label }}
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    `,
  }),
});

export const WithSeparator = meta.story({
  render: () => ({
    components: { Button, DropdownMenu },
    template: `
      <DropdownMenu>
        <DropdownMenu.Trigger as-child>
          <Button variant="outline">Open</Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content class="w-40">
          <DropdownMenu.Item value="new">New file</DropdownMenu.Item>
          <DropdownMenu.Item value="open">Open file</DropdownMenu.Item>
          <DropdownMenu.Item value="save">Save</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item value="copy">Copy</DropdownMenu.Item>
          <DropdownMenu.Item value="paste">Paste</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item value="preferences">Preferences</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    `,
  }),
});

export const Placements = meta.story({
  render: () => ({
    components: { Button, DropdownMenu },
    setup() {
      const placements = ["left", "top", "bottom", "right"] as const;
      return { placements };
    },
    template: `
      <div class="flex flex-wrap justify-center gap-2">
        <DropdownMenu v-for="placement in placements" :key="placement" :positioning="{ placement }">
          <DropdownMenu.Trigger as-child>
            <Button class="capitalize" variant="outline">
              {{ placement }}
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content class="w-36">
            <DropdownMenu.Item value="edit">Edit</DropdownMenu.Item>
            <DropdownMenu.Item value="copy">Copy</DropdownMenu.Item>
            <DropdownMenu.Item value="share">Share</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu>
      </div>
    `,
  }),
});
