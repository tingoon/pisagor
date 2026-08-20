import { PhCaretLeft, PhCaretRight } from "@phosphor-icons/vue";
import { Pagination } from "@pisagor/vue";
import { ref } from "vue";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Pagination,
  parameters: {
    docs: {
      description: {
        component:
          "Moves through long lists or result sets page by page with previous, next, and numbered links.",
      },
    },
    metadata: {
      aliases: ["pager"],
      api: "compound",
      taxonomy: "standard",
    },
  },
  subcomponents: {
    Ellipsis: Pagination.Ellipsis,
    Item: Pagination.Item,
    ItemLink: Pagination.ItemLink,
    Items: Pagination.Items,
    NextTrigger: Pagination.NextTrigger,
    PrevTrigger: Pagination.PrevTrigger,
  },
  title: "Components/Navigation/Pagination",
});

export const Default = meta.story({
  render: () => ({
    components: { Pagination },
    template: '<Pagination :count="50" :page-size="10" />',
  }),
});

export const Links = meta.story({
  render: () => ({
    components: { Pagination, PhCaretLeft, PhCaretRight },
    template: `
      <Pagination :count="50" :page-size="10">
        <Pagination.ItemLink page="previous">
          <PhCaretLeft />
          Previous
        </Pagination.ItemLink>
        <Pagination.Items />
        <Pagination.ItemLink page="next">
          Next
          <PhCaretRight />
        </Pagination.ItemLink>
      </Pagination>
    `,
  }),
});

export const PageRange = meta.story({
  render: () => ({
    components: { Pagination },
    template: '<Pagination :count="100" :page="6" :page-size="10" />',
  }),
});

export const CustomComposition = meta.story({
  render: () => ({
    components: { Pagination },
    template: `
      <Pagination :count="50" :page-size="10">
        <Pagination.PrevTrigger />
        <Pagination.Items />
        <Pagination.NextTrigger />
      </Pagination>
    `,
  }),
});

export const Controlled = meta.story({
  render: () => ({
    components: { Pagination },
    setup() {
      const page = ref(1);
      const onPageChange = (details: { page: number }) => {
        page.value = details.page;
      };

      return { onPageChange, page };
    },
    template: `
      <div class="flex flex-col gap-2">
        <Pagination :count="50" :onPageChange="onPageChange" :page="page" :page-size="10" />
        <p class="text-center text-muted-foreground text-sm">Page {{ page }} of 5</p>
      </div>
    `,
  }),
});
