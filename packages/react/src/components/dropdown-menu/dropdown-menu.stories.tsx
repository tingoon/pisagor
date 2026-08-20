import {
  ArchiveIcon,
  ArrowBendUpLeftIcon,
  ArrowClockwiseIcon,
  ArrowSquareOutIcon,
  BellIcon,
  ChatCircleIcon,
  CopyIcon,
  EnvelopeSimpleIcon,
  FolderOpenIcon,
  GearIcon,
  HandIcon,
  NotePencilIcon,
  PaperPlaneTiltIcon,
  PencilIcon,
  PlusCircleIcon,
  ShareIcon,
  SignOutIcon,
  TrashIcon,
  UserIcon,
} from "@phosphor-icons/react";
import { Button, DropdownMenu } from "@pisagor/react";
import preview from "#/react/preview";

const meta = preview.meta({
  component: DropdownMenu,
  parameters: {
    docs: {
      api: "compound",
      checklist: {
        accessibleColor: true,
        definedBehaviors: true,
        definedOptions: true,
        interactiveStates: true,
        keyboardInteractions: true,
        platformScales: true,
      },
      description: {
        component:
          "Opens a dropdown list of actions or destinations from a trigger for navigation and contextual commands.",
      },
      taxonomy: "standard",
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
  render: () => (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="w-40">
        <DropdownMenu.Group>
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
            <DropdownMenu.SubTrigger>
              <FolderOpenIcon /> Move to
            </DropdownMenu.SubTrigger>
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
                <DropdownMenu.SubTrigger>
                  <PlusCircleIcon />
                  More
                </DropdownMenu.SubTrigger>
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
          <DropdownMenu.RadioGroup heading="Priority" value="medium">
            <DropdownMenu.RadioItem value="low">Low</DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem value="medium">Medium</DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem value="high">High</DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup>
          <DropdownMenu.Separator />
          <DropdownMenu.CheckboxItem checked value="block">
            Block sender
          </DropdownMenu.CheckboxItem>
          <DropdownMenu.Separator />
          <DropdownMenu.Item value="delete" variant="destructive">
            <TrashIcon /> Delete
            <DropdownMenu.Shortcut>⌘ ⌫</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu>
  ),
});

export const Shortcuts = meta.story({
  render: () => (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="w-40">
        <DropdownMenu.Item value="profile">
          <UserIcon />
          Profile
          <DropdownMenu.Shortcut>⌘P</DropdownMenu.Shortcut>
        </DropdownMenu.Item>
        <DropdownMenu.Item value="settings">
          <GearIcon />
          Settings
          <DropdownMenu.Shortcut>⌘S</DropdownMenu.Shortcut>
        </DropdownMenu.Item>
        <DropdownMenu.Item value="copy">
          <CopyIcon />
          Copy
          <DropdownMenu.Shortcut>⌘C</DropdownMenu.Shortcut>
        </DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item value="logout">
          <SignOutIcon />
          Log out
          <DropdownMenu.Shortcut>⌘Q</DropdownMenu.Shortcut>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  ),
});

export const Checkboxes = meta.story({
  render: () => (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="w-40">
        <DropdownMenu.Group heading="Appearance">
          <DropdownMenu.CheckboxItem checked value="save">
            Status bar
          </DropdownMenu.CheckboxItem>
          <DropdownMenu.CheckboxItem checked={false} value="notifications">
            Activity bar
          </DropdownMenu.CheckboxItem>
          <DropdownMenu.CheckboxItem checked={false} disabled value="dark-mode">
            Panel
          </DropdownMenu.CheckboxItem>
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu>
  ),
});

export const Destructive = meta.story({
  render: () => (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="w-40">
        <DropdownMenu.Item value="edit">
          <PencilIcon />
          Edit
        </DropdownMenu.Item>
        <DropdownMenu.Item value="duplicate">
          <CopyIcon />
          Duplicate
        </DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item value="delete" variant="destructive">
          <TrashIcon />
          Delete
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  ),
});

export const GroupLabel = meta.story({
  render: () => (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="w-40">
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
  ),
});

export const Icons = meta.story({
  render: () => (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="w-40">
        <DropdownMenu.Item value="edit">
          <PencilIcon />
          Edit
        </DropdownMenu.Item>
        <DropdownMenu.Item value="copy">
          <CopyIcon />
          Copy
        </DropdownMenu.Item>
        <DropdownMenu.Item value="share">
          <ShareIcon />
          Share
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  ),
});

export const Link = meta.story({
  render: () => (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="w-40">
        <DropdownMenu.Item asChild value="docs">
          <a href="https://example.com/docs" rel="noopener noreferrer" target="_blank">
            External link
            <DropdownMenu.Shortcut>
              <ArrowSquareOutIcon />
            </DropdownMenu.Shortcut>
          </a>
        </DropdownMenu.Item>
        <DropdownMenu.Item asChild value="components">
          <a href="/docs/components">View docs</a>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  ),
});

export const Nested = meta.story({
  render: () => (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="w-40">
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
  ),
});

export const QuickItem = meta.story({
  render: () => (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="w-44">
        <DropdownMenu.Group heading="Actions">
          <DropdownMenu.Item value="edit">
            <PencilIcon />
            Edit
          </DropdownMenu.Item>
          <DropdownMenu.Item value="add-action">
            <ArrowClockwiseIcon />
            Add Action
          </DropdownMenu.Item>
          <DropdownMenu.Item value="key-point">
            <HandIcon />
            Key Point
          </DropdownMenu.Item>
          <DropdownMenu.Item value="comment">
            <ChatCircleIcon />
            Comment
          </DropdownMenu.Item>
        </DropdownMenu.Group>
        <DropdownMenu.Separator />
        <div className="flex w-full gap-1">
          <DropdownMenu.QuickItem className="min-w-0 flex-1" value="copy">
            <CopyIcon />
            Copy
          </DropdownMenu.QuickItem>
          <DropdownMenu.QuickItem className="min-w-0 flex-1" value="share">
            <ShareIcon />
            Share
          </DropdownMenu.QuickItem>
        </div>
      </DropdownMenu.Content>
    </DropdownMenu>
  ),
});

export const RadioGroup = meta.story({
  render: () => (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="w-40">
        <DropdownMenu.RadioGroup value="dark">
          <DropdownMenu.RadioItem value="light">Light</DropdownMenu.RadioItem>
          <DropdownMenu.RadioItem value="dark">Dark</DropdownMenu.RadioItem>
          <DropdownMenu.RadioItem value="system">System</DropdownMenu.RadioItem>
        </DropdownMenu.RadioGroup>
      </DropdownMenu.Content>
    </DropdownMenu>
  ),
});

export const WithScroll = meta.story({
  render: () => {
    const items = Array.from({ length: 15 }, (_, i) => `Item ${i + 1}`);
    return (
      <DropdownMenu>
        <DropdownMenu.Trigger asChild>
          <Button variant="outline">Open</Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content className="max-h-60 min-w-40">
          {items.map((label, index) => (
            <DropdownMenu.Item key={label} value={`item-${index + 1}`}>
              {label}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu>
    );
  },
});

export const WithSeparator = meta.story({
  render: () => (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="w-40">
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
  ),
});

export const Placements = meta.story({
  render: () => {
    const placements = ["left", "top", "bottom", "right"] as const;
    return (
      <div className="flex flex-wrap justify-center gap-2">
        {placements.map((placement) => (
          <DropdownMenu key={placement} positioning={{ placement }}>
            <DropdownMenu.Trigger asChild>
              <Button className="capitalize" variant="outline">
                {placement}
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="w-36">
              <DropdownMenu.Item value="edit">Edit</DropdownMenu.Item>
              <DropdownMenu.Item value="copy">Copy</DropdownMenu.Item>
              <DropdownMenu.Item value="share">Share</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu>
        ))}
      </div>
    );
  },
});
