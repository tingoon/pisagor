import { Button, ScrollArea, Scrollspy } from "@pisagor/vue";
import { ref } from "vue";
import preview from "#/vue/preview";

const meta = preview.meta({
  component: Scrollspy,
  parameters: {
    docs: {
      description: {
        component:
          "Highlights navigation links to show which section is currently visible while scrolling.",
      },
    },
  },
  title: "Components/Navigation/Scroll Spy",
});

const verticalSections = [
  { id: "section-1", label: "Section 1" },
  { id: "section-2", label: "Section 2" },
  { id: "section-3", label: "Section 3" },
  { id: "section-4", label: "Section 4" },
  { id: "section-5", label: "Section 5" },
];

const horizontalSections = [
  { id: "section-6", label: "Section 1" },
  { id: "section-7", label: "Section 2" },
  { id: "section-8", label: "Section 3" },
  { id: "section-9", label: "Section 4" },
  { id: "section-10", label: "Section 5" },
];

export const Default = meta.story({
  render: () => ({
    components: { Button, ScrollArea, Scrollspy },
    setup() {
      const parentRef = ref<HTMLElement | null>(null);
      return { parentRef, verticalSections };
    },
    template: `
      <div class="flex w-full grow gap-5">
        <div class="flex w-[150px] flex-col gap-2">
          <Scrollspy class="flex flex-col gap-2.5" :offset="50" :target-ref="parentRef">
            <Button
              v-for="item in verticalSections"
              :key="item.id"
              class="data-[active=true]:bg-primary data-[active=true]:text-primary-foreground"
              :data-scrollspy-anchor="item.id"
              variant="outline"
            >
              {{ item.label }}
            </Button>
          </Scrollspy>
        </div>

        <div class="grow" ref="parentRef">
          <ScrollArea class="-me-5 h-[500px] grow pe-5">
            <div class="space-y-8">
              <div v-for="item in verticalSections" :key="item.id" class="space-y-2.5" :id="item.id">
                <h3 class="text-base text-foreground">{{ item.label }}</h3>
                <div class="h-[350px] rounded-2xl bg-muted" />
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    `,
  }),
});

export const Horizontal = meta.story({
  render: () => ({
    components: { Button, ScrollArea, Scrollspy },
    setup() {
      const parentRef = ref<HTMLElement | null>(null);
      return { horizontalSections, parentRef };
    },
    template: `
      <div class="w-full space-y-5">
        <div class="flex w-full gap-2">
          <Scrollspy class="flex gap-2.5" :offset="50" :target-ref="parentRef">
            <Button
              v-for="item in horizontalSections"
              :key="item.id"
              class="data-[active=true]:bg-primary data-[active=true]:text-primary-foreground"
              :data-scrollspy-anchor="item.id"
              variant="outline"
            >
              {{ item.label }}
            </Button>
          </Scrollspy>
        </div>

        <div class="w-full" ref="parentRef">
          <ScrollArea class="h-[400px] grow">
            <div class="space-y-8">
              <div v-for="item in horizontalSections" :key="item.id" class="space-y-2.5" :id="item.id">
                <h3 class="text-base text-foreground">{{ item.label }}</h3>
                <div class="h-[350px] rounded-2xl bg-muted" />
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    `,
  }),
});
