import { ScrollArea, Separator } from "@pisagor/vue";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: ScrollArea,
  parameters: {
    docs: {
      description: {
        component:
          "Scrolls overflow content with styled scrollbars and optional fade edges that match the surrounding interface.",
      },
    },
    metadata: {
      api: "closed",
      taxonomy: "standard",
    },
  },
  title: "Components/Layout/Scroll Area",
});

const tags = Array.from({ length: 50 }, (_, i) => `v1.0.0-beta.${i}`);

export const Default = meta.story({
  render: () => ({
    components: { ScrollArea, Separator },
    setup() {
      return { tags };
    },
    template: `
      <ScrollArea class="h-64 w-48 rounded-md border">
        <div class="p-4">
          <h4 class="mb-4 font-medium text-sm leading-none">Tags</h4>
          <template v-for="tag in tags" :key="tag">
            <div class="text-sm">{{ tag }}</div>
            <Separator class="my-2" />
          </template>
        </div>
      </ScrollArea>
    `,
  }),
});

export const Horizontal = meta.story({
  render: () => ({
    components: { ScrollArea },
    setup() {
      const items = Array.from({ length: 20 }, (_, i) => i + 1);
      return { items };
    },
    template: `
      <ScrollArea class="h-auto rounded-lg border">
        <div class="flex w-max gap-2 p-4">
          <div
            v-for="item in items"
            :key="item"
            class="flex h-20 w-32 shrink-0 items-center justify-center rounded-md bg-muted"
          >
            <span class="font-medium text-sm">Item {{ item }}</span>
          </div>
        </div>
      </ScrollArea>
    `,
  }),
});

export const ScrollFade = meta.story({
  render: () => ({
    components: { ScrollArea, Separator },
    setup() {
      return { tags };
    },
    template: `
      <ScrollArea class="h-64 w-48 rounded-md border" scrollFade>
        <div class="p-4">
          <h4 class="mb-4 font-medium text-sm leading-none">Tags</h4>
          <template v-for="tag in tags" :key="tag">
            <div class="text-sm">{{ tag }}</div>
            <Separator class="my-2" />
          </template>
        </div>
      </ScrollArea>
    `,
  }),
});

export const BothDirections = meta.story({
  render: () => ({
    components: { ScrollArea },
    template: `
      <ScrollArea class="h-64 rounded-lg border **:[p]:min-w-100">
        <div class="space-y-4 p-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut nulla metus. Ut consequat
            augue et semper porttitor. Integer vel ante arcu. Nullam tincidunt dolor odio, ac
            tincidunt leo dictum eu. Proin auctor, nulla vel tincidunt lacinia, leo erat sagittis
            erat, quis porta orci sem id purus. Nam fermentum turpis vitae pretium facilisis. Mauris
            id iaculis augue, ut tristique purus. Pellentesque sed diam semper, porta nibh ut, sodales
            nunc. Aliquam accumsan a mi eget fringilla. Vestibulum varius mi vitae sem placerat, et
            imperdiet lorem fringilla. Curabitur sed congue mi, quis tincidunt tortor. Suspendisse
            pharetra sem vel risus volutpat, a auctor massa faucibus.
          </p>
          <p>
            Etiam posuere felis et consectetur molestie. Cras sed rhoncus nisl. Aenean quis est sit
            amet quam facilisis lacinia at non magna. In eu orci accumsan, ultrices justo vitae,
            sodales nibh. Curabitur in sagittis dui. Maecenas commodo cursus magna, non fringilla nisl
            commodo in. Vestibulum nec fermentum dolor. Etiam euismod nisl non scelerisque faucibus.
            Aliquam erat volutpat. Donec quis nunc ultrices, viverra quam ut, sagittis tortor. Nullam
            nulla tortor, convallis nec magna ut, lacinia interdum est. Proin lobortis diam
            sollicitudin venenatis dictum.
          </p>
          <p>
            Mauris a dui a nibh ullamcorper tempus. Maecenas laoreet magna venenatis leo mattis
            sagittis. Donec in convallis leo, quis suscipit leo. Sed a augue purus. Integer id
            vulputate erat. Quisque a arcu purus. Nulla feugiat ex tellus, ac elementum magna
            porttitor a. Sed convallis rhoncus aliquam. Praesent euismod metus a fermentum faucibus.
          </p>
        </div>
      </ScrollArea>
    `,
  }),
});

export const Nested = meta.story({
  render: () => ({
    components: { ScrollArea },
    template: `
      <ScrollArea class="h-64 w-64 rounded-md border text-sm">
        <div class="space-y-4 p-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <ScrollArea class="h-32 rounded-md border">
            <div class="p-4">
              This is a nested scroll area. Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut
              perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo.
            </div>
          </ScrollArea>
        </div>
      </ScrollArea>
    `,
  }),
});
