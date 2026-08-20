import {
  PhArchive,
  PhCopy,
  PhDotsThree,
  PhDownload,
  PhPencilSimple,
  PhTrash,
  PhX,
} from "@phosphor-icons/vue";
import { ActionBar, AlertDialog, Button, DropdownMenu } from "@pisagor/vue";
import { ref } from "vue";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: ActionBar,
  parameters: {
    docs: {
      description: {
        component:
          "Surfaces bulk actions when one or more items are selected, keeping primary tools close without cluttering the page.",
      },
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
  render: () => ({
    components: { ActionBar, Button, PhArchive, PhDownload, PhPencilSimple, PhTrash, PhX },
    template: `
      <ActionBar>
        <ActionBar.Trigger as-child>
          <Button variant="outline">Open</Button>
        </ActionBar.Trigger>
        <ActionBar.Content aria-label="Bulk actions">
          <ActionBar.Value :count="3" />
          <ActionBar.Separator />
          <ActionBar.Body>
            <Button variant="ghost">
              <PhPencilSimple />
              <span class="max-sm:sr-only">Edit</span>
            </Button>
            <Button variant="ghost">
              <PhDownload />
              <span class="max-sm:sr-only">Export</span>
            </Button>
            <Button variant="ghost">
              <PhArchive />
              <span class="max-sm:sr-only">Archive</span>
            </Button>
            <ActionBar.Separator />
            <Button variant="destructive">
              <PhTrash />
              <span class="max-sm:sr-only">Delete</span>
            </Button>
          </ActionBar.Body>
          <ActionBar.Separator />
          <ActionBar.Close as-child>
            <Button size="icon-md" variant="ghost">
              <PhX />
            </Button>
          </ActionBar.Close>
        </ActionBar.Content>
      </ActionBar>
    `,
  }),
});

export const CustomSpacing = meta.story({
  render: () => ({
    components: { ActionBar, Button, PhPencilSimple, PhTrash, PhX },
    setup() {
      const isOpen = ref(false);
      return { isOpen };
    },
    template: `
      <ActionBar :onOpenChange="(next) => (isOpen = next)" :open="isOpen">
        <ActionBar.Trigger as-child>
          <Button variant="outline">Open</Button>
        </ActionBar.Trigger>
        <ActionBar.Content aria-label="Bulk actions" class="[--space:--spacing(2)]">
          <ActionBar.Value :count="2" />
          <ActionBar.Separator />
          <ActionBar.Body>
            <Button variant="ghost">
              <PhPencilSimple />
              <span class="max-sm:sr-only">Edit</span>
            </Button>
            <ActionBar.Separator />
            <Button variant="destructive">
              <PhTrash />
              <span class="max-sm:sr-only">Delete</span>
            </Button>
          </ActionBar.Body>
          <ActionBar.Separator />
          <ActionBar.Close as-child>
            <Button size="icon-md" variant="ghost">
              <PhX />
            </Button>
          </ActionBar.Close>
        </ActionBar.Content>
      </ActionBar>
    `,
  }),
});

export const Gutter = meta.story({
  render: () => ({
    components: {
      ActionBar,
      Button,
      PhArchive,
      PhDownload,
      PhPencilSimple,
      PhTrash,
      PhX,
    },
    setup() {
      const gutters = ["24px", "32px"] as const;
      const isOpen = ref(false);
      const gutter = ref<(typeof gutters)[number]>("24px");

      const select = (value: (typeof gutters)[number]) => {
        isOpen.value = true;
        gutter.value = value;
      };

      return { gutter, gutters, isOpen, select };
    },
    template: `
      <div>
        <div class="flex flex-wrap gap-2">
          <Button
            v-for="value in gutters"
            :key="value"
            @click="select(value)"
            :variant="gutter === value && isOpen ? 'secondary' : 'outline'"
          >
            Gutter {{ value }}
          </Button>
        </div>
        <ActionBar
          :onOpenChange="(next) => (isOpen = next)"
          :open="isOpen"
          :positioning="{ gutter, placement: 'bottom' }"
        >
          <ActionBar.Content aria-label="Bulk actions">
            <ActionBar.Value :count="3" />
            <ActionBar.Separator />
            <ActionBar.Body>
              <Button variant="ghost">
                <PhPencilSimple />
                <span class="max-sm:sr-only">Edit</span>
              </Button>
              <Button variant="ghost">
                <PhDownload />
                <span class="max-sm:sr-only">Export</span>
              </Button>
              <Button variant="ghost">
                <PhArchive />
                <span class="max-sm:sr-only">Archive</span>
              </Button>
              <ActionBar.Separator />
              <Button variant="destructive">
                <PhTrash />
                <span class="max-sm:sr-only">Delete</span>
              </Button>
            </ActionBar.Body>
            <ActionBar.Separator />
            <ActionBar.Close as-child>
              <Button size="icon-md" variant="ghost">
                <PhX />
              </Button>
            </ActionBar.Close>
          </ActionBar.Content>
        </ActionBar>
      </div>
    `,
  }),
});

export const CloseTrigger = meta.story({
  render: () => ({
    components: { ActionBar, Button, PhArchive, PhDownload, PhPencilSimple, PhTrash, PhX },
    setup() {
      const isOpen = ref(false);
      return { isOpen };
    },
    template: `
      <ActionBar :onOpenChange="(next) => (isOpen = next)" :open="isOpen">
        <ActionBar.Trigger as-child>
          <Button variant="outline">Open</Button>
        </ActionBar.Trigger>
        <ActionBar.Content aria-label="Bulk actions">
          <ActionBar.Value :count="3" />
          <ActionBar.Separator />
          <ActionBar.Body>
            <Button variant="ghost">
              <PhPencilSimple />
              <span class="max-sm:sr-only">Edit</span>
            </Button>
            <Button variant="ghost">
              <PhDownload />
              <span class="max-sm:sr-only">Export</span>
            </Button>
            <Button variant="ghost">
              <PhArchive />
              <span class="max-sm:sr-only">Archive</span>
            </Button>
            <ActionBar.Separator />
            <Button variant="destructive">
              <PhTrash />
              <span class="max-sm:sr-only">Delete</span>
            </Button>
          </ActionBar.Body>
          <ActionBar.Separator />
          <ActionBar.Close as-child>
            <Button size="icon-md" variant="ghost">
              <PhX />
            </Button>
          </ActionBar.Close>
        </ActionBar.Content>
      </ActionBar>
    `,
  }),
});

export const WithDialog = meta.story({
  render: () => ({
    components: { ActionBar, AlertDialog, Button, PhTrash, PhX },
    template: `
      <ActionBar>
        <ActionBar.Trigger as-child>
          <Button variant="outline">Open</Button>
        </ActionBar.Trigger>
        <ActionBar.Content aria-label="Order bulk actions">
          <ActionBar.Value :count="3" />
          <ActionBar.Separator />
          <ActionBar.Body>
            <AlertDialog>
              <AlertDialog.Trigger as-child>
                <Button variant="destructive">
                  <PhTrash />
                  <span class="max-sm:sr-only">Delete</span>
                </Button>
              </AlertDialog.Trigger>
              <AlertDialog.Content>
                <AlertDialog.Header
                  description="This action cannot be undone."
                  title="Delete selected orders?"
                />
                <AlertDialog.Footer>
                  <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
                  <AlertDialog.Close as-child>
                    <AlertDialog.Action variant="destructive">Delete</AlertDialog.Action>
                  </AlertDialog.Close>
                </AlertDialog.Footer>
              </AlertDialog.Content>
            </AlertDialog>
          </ActionBar.Body>
          <ActionBar.Separator />
          <ActionBar.Close as-child>
            <Button size="icon-md" variant="ghost">
              <PhX />
            </Button>
          </ActionBar.Close>
        </ActionBar.Content>
      </ActionBar>
    `,
  }),
});

export const WithMenu = meta.story({
  render: () => ({
    components: {
      ActionBar,
      Button,
      DropdownMenu,
      PhArchive,
      PhCopy,
      PhDotsThree,
      PhTrash,
      PhX,
    },
    template: `
      <ActionBar>
        <ActionBar.Trigger as-child>
          <Button variant="outline">Open</Button>
        </ActionBar.Trigger>
        <ActionBar.Content aria-label="Bulk actions">
          <ActionBar.Value :count="3" />
          <ActionBar.Separator />
          <ActionBar.Body>
            <DropdownMenu :positioning="{ placement: 'top' }">
              <DropdownMenu.Trigger as-child>
                <Button variant="ghost">
                  <PhDotsThree />
                  <span class="max-sm:sr-only">More</span>
                </Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                <DropdownMenu.Item value="archive">
                  <PhArchive />
                  Archive
                </DropdownMenu.Item>
                <DropdownMenu.Item value="duplicate">
                  <PhCopy />
                  Duplicate
                </DropdownMenu.Item>
                <DropdownMenu.Item value="delete" variant="destructive">
                  <PhTrash />
                  Delete
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu>
          </ActionBar.Body>
          <ActionBar.Separator />
          <ActionBar.Close as-child>
            <Button size="icon-md" variant="ghost">
              <PhX />
            </Button>
          </ActionBar.Close>
        </ActionBar.Content>
      </ActionBar>
    `,
  }),
});

export const Controlled = meta.story({
  render: () => ({
    components: { ActionBar, Button, PhArchive, PhDownload, PhPencilSimple, PhTrash, PhX },
    setup() {
      const isOpen = ref(false);
      return { isOpen };
    },
    template: `
      <ActionBar :onOpenChange="(next) => (isOpen = next)" :open="isOpen">
        <Button @click="isOpen = !isOpen" variant="outline">Toggle</Button>
        <ActionBar.Content aria-label="Bulk actions">
          <ActionBar.Value :count="2" />
          <ActionBar.Separator />
          <ActionBar.Body>
            <Button variant="ghost">
              <PhPencilSimple />
              <span class="max-sm:sr-only">Edit</span>
            </Button>
            <Button variant="ghost">
              <PhDownload />
              <span class="max-sm:sr-only">Export</span>
            </Button>
            <Button variant="ghost">
              <PhArchive />
              <span class="max-sm:sr-only">Archive</span>
            </Button>
            <ActionBar.Separator />
            <Button variant="destructive">
              <PhTrash />
              <span class="max-sm:sr-only">Delete</span>
            </Button>
          </ActionBar.Body>
          <ActionBar.Separator />
          <ActionBar.Close as-child>
            <Button size="icon-md" variant="ghost">
              <PhX />
            </Button>
          </ActionBar.Close>
        </ActionBar.Content>
      </ActionBar>
    `,
  }),
});

export const Placements = meta.story({
  render: () => ({
    components: {
      ActionBar,
      Button,
      PhArchive,
      PhDownload,
      PhPencilSimple,
      PhTrash,
      PhX,
    },
    setup() {
      const placements = ["bottom-start", "bottom", "bottom-end"] as const;
      const isOpen = ref(false);
      const placement = ref<(typeof placements)[number]>("bottom");

      const handleOpenChange = (nextPlacement: (typeof placements)[number]) => {
        isOpen.value = true;
        placement.value = nextPlacement;
      };

      return { handleOpenChange, isOpen, placement, placements };
    },
    template: `
      <div>
        <div class="flex flex-wrap gap-2">
          <Button @click="handleOpenChange('bottom-start')" variant="outline">
            Bottom start
          </Button>
          <Button @click="handleOpenChange('bottom')" variant="outline">
            Bottom
          </Button>
          <Button @click="handleOpenChange('bottom-end')" variant="outline">
            Bottom end
          </Button>
        </div>
        <ActionBar
          :onOpenChange="(next) => (isOpen = next)"
          :open="isOpen"
          :positioning="{ placement }"
        >
          <ActionBar.Content aria-label="Bulk actions">
            <ActionBar.Value :count="5" />
            <ActionBar.Separator />
            <ActionBar.Body>
              <Button variant="ghost">
                <PhPencilSimple />
                <span class="max-sm:sr-only">Edit</span>
              </Button>
              <Button variant="ghost">
                <PhDownload />
                <span class="max-sm:sr-only">Export</span>
              </Button>
              <Button variant="ghost">
                <PhArchive />
                <span class="max-sm:sr-only">Archive</span>
              </Button>
              <ActionBar.Separator />
              <Button variant="destructive">
                <PhTrash />
                <span class="max-sm:sr-only">Delete</span>
              </Button>
            </ActionBar.Body>
            <ActionBar.Separator />
            <ActionBar.Close as-child>
              <Button size="icon-md" variant="ghost">
                <PhX />
              </Button>
            </ActionBar.Close>
          </ActionBar.Content>
        </ActionBar>
      </div>
    `,
  }),
});
