<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import ListBulletsIcon from "phosphor-svelte/lib/ListBulletsIcon";
import ListNumbersIcon from "phosphor-svelte/lib/ListNumbersIcon";
import TextBIcon from "phosphor-svelte/lib/TextBIcon";
import TextItalicIcon from "phosphor-svelte/lib/TextItalicIcon";
import TextStrikethroughIcon from "phosphor-svelte/lib/TextStrikethroughIcon";
import type { HTMLAttributes } from "svelte/elements";
import Toggle from "../components/toggle/toggle.svelte";
import VisuallyHidden from "../components/visually-hidden/visually-hidden.svelte";
import { useRichTextEditorState } from "./rich-text-editor.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
};

let { children, class: className, ...rest }: Props = $props();
const ctx = useRichTextEditorState();

const bold = $derived(
  (() => {
    void ctx.revision;
    return ctx.editor?.isActive("bold") ?? false;
  })(),
);
const italic = $derived(
  (() => {
    void ctx.revision;
    return ctx.editor?.isActive("italic") ?? false;
  })(),
);
const strike = $derived(
  (() => {
    void ctx.revision;
    return ctx.editor?.isActive("strike") ?? false;
  })(),
);
const bulletList = $derived(
  (() => {
    void ctx.revision;
    return ctx.editor?.isActive("bulletList") ?? false;
  })(),
);
const orderedList = $derived(
  (() => {
    void ctx.revision;
    return ctx.editor?.isActive("orderedList") ?? false;
  })(),
);
</script>

{#if ctx.editor}
  <Ark
    as="div"
    {...rest}
    class={ctx.slots.toolbar({ class: cn(className) })}
    data-part="toolbar"
    data-scope="rich-text-editor"
  >
    {#if children}
      {@render children()}
    {:else}
      <div class={ctx.slots.inline()}>
        <Toggle
          aria-label="Bold"
          onPressedChange={() => ctx.editor?.chain().focus().toggleBold().run()}
          pressed={bold}
          size="sm"
          variant="ghost"
        >
          <TextBIcon />
          <VisuallyHidden>Bold</VisuallyHidden>
        </Toggle>
        <Toggle
          aria-label="Italic"
          onPressedChange={() => ctx.editor?.chain().focus().toggleItalic().run()}
          pressed={italic}
          size="sm"
          variant="ghost"
        >
          <TextItalicIcon />
          <VisuallyHidden>Italic</VisuallyHidden>
        </Toggle>
        <Toggle
          aria-label="Strikethrough"
          onPressedChange={() => ctx.editor?.chain().focus().toggleStrike().run()}
          pressed={strike}
          size="sm"
          variant="ghost"
        >
          <TextStrikethroughIcon />
          <VisuallyHidden>Strikethrough</VisuallyHidden>
        </Toggle>
        <Toggle
          aria-label="Bullet list"
          onPressedChange={() => ctx.editor?.chain().focus().toggleBulletList().run()}
          pressed={bulletList}
          size="sm"
          variant="ghost"
        >
          <ListBulletsIcon />
          <VisuallyHidden>Bullet list</VisuallyHidden>
        </Toggle>
        <Toggle
          aria-label="Ordered list"
          onPressedChange={() => ctx.editor?.chain().focus().toggleOrderedList().run()}
          pressed={orderedList}
          size="sm"
          variant="ghost"
        >
          <ListNumbersIcon />
          <VisuallyHidden>Ordered list</VisuallyHidden>
        </Toggle>
      </div>
    {/if}
  </Ark>
{/if}
