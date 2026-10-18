<script lang="ts">
  import { Ark } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import {
    ListBulletsIcon,
    ListNumbersIcon,
    TextBIcon,
    TextItalicIcon,
    TextStrikethroughIcon,
  } from "phosphor-svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { useLocale } from "../provider/context";
  import Toggle from "../toggle.svelte";
  import VisuallyHidden from "../visually-hidden.svelte";
  import { useRichTextEditorState } from "./rich-text-editor.context";

  const { m } = useLocale();

  type Props = HTMLAttributes<HTMLDivElement> & {
    children?: import("svelte").Snippet;
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
          aria-label={m("richTextEditor.bold")}
          onPressedChange={() => ctx.editor?.chain().focus().toggleBold().run()}
          pressed={bold}
          size="sm"
          variant="ghost"
        >
          <TextBIcon />
          <VisuallyHidden>Bold</VisuallyHidden>
        </Toggle>
        <Toggle
          aria-label={m("richTextEditor.italic")}
          onPressedChange={() =>
            ctx.editor?.chain().focus().toggleItalic().run()}
          pressed={italic}
          size="sm"
          variant="ghost"
        >
          <TextItalicIcon />
          <VisuallyHidden>Italic</VisuallyHidden>
        </Toggle>
        <Toggle
          aria-label={m("richTextEditor.strikethrough")}
          onPressedChange={() =>
            ctx.editor?.chain().focus().toggleStrike().run()}
          pressed={strike}
          size="sm"
          variant="ghost"
        >
          <TextStrikethroughIcon />
          <VisuallyHidden>Strikethrough</VisuallyHidden>
        </Toggle>
        <Toggle
          aria-label={m("richTextEditor.bulletList")}
          onPressedChange={() =>
            ctx.editor?.chain().focus().toggleBulletList().run()}
          pressed={bulletList}
          size="sm"
          variant="ghost"
        >
          <ListBulletsIcon />
          <VisuallyHidden>Bullet list</VisuallyHidden>
        </Toggle>
        <Toggle
          aria-label={m("richTextEditor.orderedList")}
          onPressedChange={() =>
            ctx.editor?.chain().focus().toggleOrderedList().run()}
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
