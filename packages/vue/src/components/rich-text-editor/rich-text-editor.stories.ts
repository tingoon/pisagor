import { RichTextEditor } from "@pisagor/vue/rich-text-editor";
import { ref } from "vue";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: RichTextEditor,
  parameters: {
    docs: {
      description: {
        component:
          "Lets users write and format rich text with common styles such as bold, lists, and emphasis.",
      },
    },
    metadata: {
      aliases: ["wysiwyg", "rte"],
      api: "compound-shorthand",
      taxonomy: "standard",
    },
  },
  subcomponents: {
    Content: RichTextEditor.Content,
    Root: RichTextEditor.Root,
    Toolbar: RichTextEditor.Toolbar,
  },
  title: "Components/Forms/Rich Text Editor",
});

export const Default = meta.story({
  render: () => ({
    components: { RichTextEditor },
    template:
      '<RichTextEditor default-value="<p>Write release notes with <strong>bold</strong> and lists.</p>" />',
  }),
});

export const Disabled = meta.story({
  render: () => ({
    components: { RichTextEditor },
    template: '<RichTextEditor default-value="<p>This editor is unavailable.</p>" disabled />',
  }),
});

export const Invalid = meta.story({
  render: () => ({
    components: { RichTextEditor },
    template: '<RichTextEditor default-value="<p></p>" invalid />',
  }),
});

export const Controlled = meta.story({
  render: () => ({
    components: { RichTextEditor },
    setup() {
      const value = ref("<p>Controlled content</p>");
      const onValueChange = (next: string) => {
        value.value = next;
      };
      return { onValueChange, value };
    },
    template: `
      <div class="flex w-full flex-col gap-3">
        <RichTextEditor :on-value-change="onValueChange" :value="value" />
        <pre class="overflow-auto rounded-lg bg-muted p-3 text-xs">{{ value }}</pre>
      </div>
    `,
  }),
});

export const Compound = meta.story({
  render: () => ({
    components: { RichTextEditor },
    template: `
      <RichTextEditor.Root default-value="<p>Compose the toolbar and content yourself.</p>">
        <RichTextEditor.Toolbar />
        <RichTextEditor.Content />
      </RichTextEditor.Root>
    `,
  }),
});
