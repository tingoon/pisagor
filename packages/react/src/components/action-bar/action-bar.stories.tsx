import {
  ArchiveIcon,
  CopyIcon,
  DotsThreeIcon,
  DownloadIcon,
  PencilSimpleIcon,
  TrashIcon,
  XIcon,
} from "@phosphor-icons/react";
import { ActionBar, AlertDialog, Button, DropdownMenu } from "@pisagor/react";
import { useState } from "react";
import preview from "#/react/preview";

const meta = preview.meta({
  component: ActionBar,
  parameters: {
    docs: {
      aliases: ["bulk-actions"],
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
          "Surfaces bulk actions when one or more items are selected, keeping primary tools close without cluttering the page.",
      },
      taxonomy: "pattern",
    },
  },
  subcomponents: {
    Body: ActionBar.Body,
    Close: ActionBar.Close,
    Content: ActionBar.Content,
    Separator: ActionBar.Separator,
    Trigger: ActionBar.Trigger,
    Value: ActionBar.Value,
  },
  title: "Components/Actions/Action Bar",
});

export const Default = meta.story({
  render: () => (
    <ActionBar>
      <ActionBar.Trigger asChild>
        <Button variant="outline">Open</Button>
      </ActionBar.Trigger>
      <ActionBar.Content aria-label="Bulk actions">
        <ActionBar.Value count={3} />
        <ActionBar.Separator />
        <ActionBar.Body>
          <Button variant="ghost">
            <PencilSimpleIcon />
            <span className="max-sm:sr-only">Edit</span>
          </Button>
          <Button variant="ghost">
            <DownloadIcon />
            <span className="max-sm:sr-only">Export</span>
          </Button>
          <Button variant="ghost">
            <ArchiveIcon />
            <span className="max-sm:sr-only">Archive</span>
          </Button>
          <ActionBar.Separator />
          <Button variant="destructive">
            <TrashIcon />
            <span className="max-sm:sr-only">Delete</span>
          </Button>
        </ActionBar.Body>
        <ActionBar.Separator />
        <ActionBar.Close asChild>
          <Button size="icon-md" variant="ghost">
            <XIcon />
          </Button>
        </ActionBar.Close>
      </ActionBar.Content>
    </ActionBar>
  ),
});

export const CustomSpacing = meta.story({
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <ActionBar onOpenChange={setIsOpen} open={isOpen}>
        <ActionBar.Trigger asChild>
          <Button variant="outline">Open</Button>
        </ActionBar.Trigger>
        <ActionBar.Content aria-label="Bulk actions" className="[--space:--spacing(2)]">
          <ActionBar.Value count={2} />
          <ActionBar.Separator />
          <ActionBar.Body>
            <Button variant="ghost">
              <PencilSimpleIcon />
              <span className="max-sm:sr-only">Edit</span>
            </Button>
            <ActionBar.Separator />
            <Button variant="destructive">
              <TrashIcon />
              <span className="max-sm:sr-only">Delete</span>
            </Button>
          </ActionBar.Body>
          <ActionBar.Separator />
          <ActionBar.Close asChild>
            <Button size="icon-md" variant="ghost">
              <XIcon />
            </Button>
          </ActionBar.Close>
        </ActionBar.Content>
      </ActionBar>
    );
  },
});

export const Gutter = meta.story({
  render: () => {
    const gutters = ["24px", "32px"] as const;
    const [isOpen, setIsOpen] = useState(false);
    const [gutter, setGutter] = useState<(typeof gutters)[number]>("24px");

    return (
      <>
        <div className="flex flex-wrap gap-2">
          {gutters.map((value) => (
            <Button
              key={value}
              onClick={() => {
                setIsOpen(true);
                setGutter(value);
              }}
              variant={gutter === value && isOpen ? "secondary" : "outline"}
            >
              {`Gutter ${value}`}
            </Button>
          ))}
        </div>
        <ActionBar
          onOpenChange={setIsOpen}
          open={isOpen}
          positioning={{ gutter, placement: "bottom" }}
        >
          <ActionBar.Content aria-label="Bulk actions">
            <ActionBar.Value count={3} />
            <ActionBar.Separator />
            <ActionBar.Body>
              <Button variant="ghost">
                <PencilSimpleIcon />
                <span className="max-sm:sr-only">Edit</span>
              </Button>
              <Button variant="ghost">
                <DownloadIcon />
                <span className="max-sm:sr-only">Export</span>
              </Button>
              <Button variant="ghost">
                <ArchiveIcon />
                <span className="max-sm:sr-only">Archive</span>
              </Button>
              <ActionBar.Separator />
              <Button variant="destructive">
                <TrashIcon />
                <span className="max-sm:sr-only">Delete</span>
              </Button>
            </ActionBar.Body>
            <ActionBar.Separator />
            <ActionBar.Close asChild>
              <Button size="icon-md" variant="ghost">
                <XIcon />
              </Button>
            </ActionBar.Close>
          </ActionBar.Content>
        </ActionBar>
      </>
    );
  },
});

export const CloseTrigger = meta.story({
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <ActionBar onOpenChange={setIsOpen} open={isOpen}>
        <ActionBar.Trigger asChild>
          <Button variant="outline">Open</Button>
        </ActionBar.Trigger>
        <ActionBar.Content aria-label="Bulk actions">
          <ActionBar.Value count={3} />
          <ActionBar.Separator />
          <ActionBar.Body>
            <Button variant="ghost">
              <PencilSimpleIcon />
              <span className="max-sm:sr-only">Edit</span>
            </Button>
            <Button variant="ghost">
              <DownloadIcon />
              <span className="max-sm:sr-only">Export</span>
            </Button>
            <Button variant="ghost">
              <ArchiveIcon />
              <span className="max-sm:sr-only">Archive</span>
            </Button>
            <ActionBar.Separator />
            <Button variant="destructive">
              <TrashIcon />
              <span className="max-sm:sr-only">Delete</span>
            </Button>
          </ActionBar.Body>
          <ActionBar.Separator />
          <ActionBar.Close asChild>
            <Button size="icon-md" variant="ghost">
              <XIcon />
            </Button>
          </ActionBar.Close>
        </ActionBar.Content>
      </ActionBar>
    );
  },
});

export const WithDialog = meta.story({
  render: () => (
    <ActionBar>
      <ActionBar.Trigger asChild>
        <Button variant="outline">Open</Button>
      </ActionBar.Trigger>
      <ActionBar.Content aria-label="Order bulk actions">
        <ActionBar.Value count={3} />
        <ActionBar.Separator />
        <ActionBar.Body>
          <AlertDialog>
            <AlertDialog.Trigger asChild>
              <Button variant="destructive">
                <TrashIcon />
                <span className="max-sm:sr-only">Delete</span>
              </Button>
            </AlertDialog.Trigger>
            <AlertDialog.Content>
              <AlertDialog.Header
                description="This action cannot be undone."
                title="Delete selected orders?"
              />
              <AlertDialog.Footer>
                <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
                <AlertDialog.Close asChild>
                  <AlertDialog.Action variant="destructive">Delete</AlertDialog.Action>
                </AlertDialog.Close>
              </AlertDialog.Footer>
            </AlertDialog.Content>
          </AlertDialog>
        </ActionBar.Body>
        <ActionBar.Separator />
        <ActionBar.Close asChild>
          <Button size="icon-md" variant="ghost">
            <XIcon />
          </Button>
        </ActionBar.Close>
      </ActionBar.Content>
    </ActionBar>
  ),
});

export const WithMenu = meta.story({
  render: () => (
    <ActionBar>
      <ActionBar.Trigger asChild>
        <Button variant="outline">Open</Button>
      </ActionBar.Trigger>
      <ActionBar.Content aria-label="Bulk actions">
        <ActionBar.Value count={3} />
        <ActionBar.Separator />
        <ActionBar.Body>
          <DropdownMenu positioning={{ placement: "top" }}>
            <DropdownMenu.Trigger asChild>
              <Button variant="ghost">
                <DotsThreeIcon />
                <span className="max-sm:sr-only">More</span>
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item value="archive">
                <ArchiveIcon />
                Archive
              </DropdownMenu.Item>
              <DropdownMenu.Item value="duplicate">
                <CopyIcon />
                Duplicate
              </DropdownMenu.Item>
              <DropdownMenu.Item value="delete" variant="destructive">
                <TrashIcon />
                Delete
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu>
        </ActionBar.Body>
        <ActionBar.Separator />
        <ActionBar.Close asChild>
          <Button size="icon-md" variant="ghost">
            <XIcon />
          </Button>
        </ActionBar.Close>
      </ActionBar.Content>
    </ActionBar>
  ),
});

export const Controlled = meta.story({
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <ActionBar onOpenChange={setIsOpen} open={isOpen}>
        <Button onClick={() => setIsOpen((prev) => !prev)} variant="outline">
          Toggle
        </Button>
        <ActionBar.Content aria-label="Bulk actions">
          <ActionBar.Value count={2} />
          <ActionBar.Separator />
          <ActionBar.Body>
            <Button variant="ghost">
              <PencilSimpleIcon />
              <span className="max-sm:sr-only">Edit</span>
            </Button>
            <Button variant="ghost">
              <DownloadIcon />
              <span className="max-sm:sr-only">Export</span>
            </Button>
            <Button variant="ghost">
              <ArchiveIcon />
              <span className="max-sm:sr-only">Archive</span>
            </Button>
            <ActionBar.Separator />
            <Button variant="destructive">
              <TrashIcon />
              <span className="max-sm:sr-only">Delete</span>
            </Button>
          </ActionBar.Body>
          <ActionBar.Separator />
          <ActionBar.Close asChild>
            <Button size="icon-md" variant="ghost">
              <XIcon />
            </Button>
          </ActionBar.Close>
        </ActionBar.Content>
      </ActionBar>
    );
  },
});

export const Placements = meta.story({
  render: () => {
    type Placement = "bottom" | "bottom-start" | "bottom-end";
    const [isOpen, setIsOpen] = useState(false);
    const [placement, setPlacement] = useState<Placement>("bottom");

    const handleOpenChange = (nextPlacement: Placement) => {
      setIsOpen(true);
      setPlacement(nextPlacement);
    };

    return (
      <>
        <div className="flex flex-wrap gap-2">
          <Button onClick={() => handleOpenChange("bottom-start")} variant="outline">
            Bottom start
          </Button>
          <Button onClick={() => handleOpenChange("bottom")} variant="outline">
            Bottom
          </Button>
          <Button onClick={() => handleOpenChange("bottom-end")} variant="outline">
            Bottom end
          </Button>
        </div>
        <ActionBar onOpenChange={setIsOpen} open={isOpen} positioning={{ placement }}>
          <ActionBar.Content aria-label="Bulk actions">
            <ActionBar.Value count={5} />
            <ActionBar.Separator />
            <ActionBar.Body>
              <Button variant="ghost">
                <PencilSimpleIcon />
                <span className="max-sm:sr-only">Edit</span>
              </Button>
              <Button variant="ghost">
                <DownloadIcon />
                <span className="max-sm:sr-only">Export</span>
              </Button>
              <Button variant="ghost">
                <ArchiveIcon />
                <span className="max-sm:sr-only">Archive</span>
              </Button>
              <ActionBar.Separator />
              <Button variant="destructive">
                <TrashIcon />
                <span className="max-sm:sr-only">Delete</span>
              </Button>
            </ActionBar.Body>
            <ActionBar.Separator />
            <ActionBar.Close asChild>
              <Button size="icon-md" variant="ghost">
                <XIcon />
              </Button>
            </ActionBar.Close>
          </ActionBar.Content>
        </ActionBar>
      </>
    );
  },
});
