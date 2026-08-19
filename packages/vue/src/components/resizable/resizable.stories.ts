import { cn } from "@pisagor/utils";
import { Resizable } from "@pisagor/vue/resizable";
import { ref } from "vue";
import preview from "#/vue/preview";

const meta = preview.meta({
  component: Resizable,
  parameters: {
    docs: {
      description: {
        component:
          "Splits space between panels with draggable handles so users can adjust layout to their needs.",
      },
    },
  },
  subcomponents: {
    EdgeHandle: Resizable.EdgeHandle,
    Panel: Resizable.Panel,
    ResizeTrigger: Resizable.ResizeTrigger,
    ResizeTriggerIndicator: Resizable.ResizeTriggerIndicator,
  },
  title: "Components/Layout/Resizable",
});

function frameClass(heightClass = "h-96") {
  return cn("mx-auto w-full max-w-4xl", heightClass);
}

function panelClassName(orientation: "horizontal" | "vertical" = "horizontal") {
  return cn(
    "flex items-center justify-center bg-muted/30 text-sm",
    orientation === "vertical" ? "min-h-0 h-full w-full" : "min-w-0 h-full w-full",
  );
}

export const Default = meta.story({
  render: () => ({
    components: { Resizable },
    template: `
      <div class="${frameClass()}">
        <Resizable class="size-full rounded-md border" :defaultSize="[50, 50]" :panels="[{ id: '1', minSize: 10 }, { id: '2', minSize: 10 }]">
          <Resizable.Panel class="${panelClassName()}" id="1">
            One
          </Resizable.Panel>
          <Resizable.ResizeTrigger id="1:2" withHandle />

          <Resizable.Panel class="min-h-0 h-full min-w-0" id="2">
            <Resizable class="size-full" :defaultSize="[50, 50]" orientation="vertical" :panels="[{ id: '3', minSize: 10 }, { id: '4', minSize: 10 }]">
              <Resizable.Panel class="${panelClassName("vertical")}" id="3">
                Two
              </Resizable.Panel>
              <Resizable.ResizeTrigger id="3:4" withHandle />

              <Resizable.Panel class="${panelClassName("vertical")}" id="4">
                Three
              </Resizable.Panel>
            </Resizable>
          </Resizable.Panel>
        </Resizable>
      </div>
    `,
  }),
});

export const MinMax = meta.story({
  render: () => ({
    components: { Resizable },
    template: `
      <div class="${frameClass()}">
        <Resizable class="size-full rounded-md border" :defaultSize="[30, 70]" :panels="[{ id: '1', maxSize: 40, minSize: 25 }, { id: '2' }]">
          <Resizable.Panel class="${panelClassName()}" id="1">
            Sidebar
          </Resizable.Panel>
          <Resizable.ResizeTrigger id="1:2" withHandle />

          <Resizable.Panel class="${panelClassName()}" id="2">
            Content
          </Resizable.Panel>
        </Resizable>
      </div>
    `,
  }),
});

export const OrientationHorizontal = meta.story({
  render: () => ({
    components: { Resizable },
    template: `
      <div class="${frameClass()}">
        <Resizable class="size-full rounded-md border" :defaultSize="[50, 50]" orientation="horizontal" :panels="[{ id: '1' }, { id: '2' }]">
          <Resizable.Panel class="${panelClassName()}" id="1">
            Left
          </Resizable.Panel>
          <Resizable.ResizeTrigger id="1:2" withHandle />

          <Resizable.Panel class="${panelClassName()}" id="2">
            Right
          </Resizable.Panel>
        </Resizable>
      </div>
    `,
  }),
});

export const OrientationVertical = meta.story({
  render: () => ({
    components: { Resizable },
    template: `
      <div class="${frameClass("h-112")}">
        <Resizable class="size-full rounded-md border" :defaultSize="[50, 50]" orientation="vertical" :panels="[{ id: '1' }, { id: '2' }]">
          <Resizable.Panel class="${panelClassName("vertical")}" id="1">
            Top
          </Resizable.Panel>
          <Resizable.ResizeTrigger id="1:2" withHandle />

          <Resizable.Panel class="${panelClassName("vertical")}" id="2">
            Bottom
          </Resizable.Panel>
        </Resizable>
      </div>
    `,
  }),
});

export const Handle = meta.story({
  render: () => ({
    components: { Resizable },
    template: `
      <div class="${frameClass()}">
        <Resizable class="size-full rounded-md border" :defaultSize="[50, 50]" :panels="[{ id: '1' }, { id: '2' }]">
          <Resizable.Panel class="${panelClassName()}" id="1">
            Panel 1
          </Resizable.Panel>
          <Resizable.ResizeTrigger id="1:2" withHandle />

          <Resizable.Panel class="${panelClassName()}" id="2">
            Panel 2
          </Resizable.Panel>
        </Resizable>
      </div>
    `,
  }),
});

export const EdgeHandle = meta.story({
  parameters: {
    docs: {
      description: {
        story:
          "Standalone edge handle for regions outside a splitter — drag to resize, double-click to reset.",
      },
    },
  },
  render: () => ({
    components: { Resizable },
    setup() {
      const width = ref(256);
      const onWidthChange = (next: number) => {
        width.value = next;
      };
      return { onWidthChange, width };
    },
    template: `
      <div class="${frameClass()}">
        <div class="flex size-full overflow-hidden rounded-md border">
          <aside class="relative flex shrink-0 flex-col overflow-visible border-e bg-muted text-muted-foreground" :style="{ width: width + 'px' }">
            <Resizable.EdgeHandle
              handlePosition="top"
              label="Resize panel"
              placement="start"
              :width="width"
              :onResizeChange="onWidthChange"
              :onWidthChange="onWidthChange"
            />
            <div class="flex flex-1 items-center justify-center p-4 text-sm">Panel</div>
          </aside>
          <div class="flex min-w-0 flex-1 items-center justify-center bg-muted/30 text-sm">
            Main
          </div>
        </div>
      </div>
    `,
  }),
});

export const MultiplePanels = meta.story({
  render: () => ({
    components: { Resizable },
    template: `
      <div class="${frameClass()}">
        <Resizable class="size-full rounded-md border" :defaultSize="[20, 60, 20]" :panels="[{ id: '1', minSize: 20 }, { id: '2', minSize: 40 }, { id: '3', minSize: 20 }]">
          <Resizable.Panel class="${panelClassName()}" id="1">
            Left
          </Resizable.Panel>
          <Resizable.ResizeTrigger id="1:2" withHandle />

          <Resizable.Panel class="${panelClassName()}" id="2">
            Center
          </Resizable.Panel>
          <Resizable.ResizeTrigger id="2:3" withHandle />

          <Resizable.Panel class="${panelClassName()}" id="3">
            Right
          </Resizable.Panel>
        </Resizable>
      </div>
    `,
  }),
});

export const Collapsible = meta.story({
  render: () => ({
    components: { Resizable },
    template: `
      <div class="${frameClass()}">
        <Resizable class="size-full rounded-md border" :defaultSize="[25, 75]" :panels="[{ collapsedSize: 0, collapsible: true, id: 'sidebar', minSize: 15 }, { id: 'main', minSize: 40 }]">
          <Resizable.Panel class="${panelClassName()}" id="sidebar">
            Sidebar
          </Resizable.Panel>
          <Resizable.ResizeTrigger id="sidebar:main" withHandle />

          <Resizable.Panel class="${panelClassName()}" id="main">
            Main
          </Resizable.Panel>
        </Resizable>
      </div>
    `,
  }),
});
