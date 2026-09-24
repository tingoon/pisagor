<script lang="ts">
import { cn } from "@pisagor/utils";
import type { Action } from "svelte/action";
import type { HTMLAttributes } from "svelte/elements";
import { useRichTextEditorState } from "./rich-text-editor.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> & {
  class?: string | undefined;
};

let { class: className, ...rest }: Props = $props();
const ctx = useRichTextEditorState();

const register: Action<HTMLDivElement> = (node) => {
  ctx.registerHost(node);
  return {
    destroy() {
      ctx.registerHost(null);
    },
  };
};
</script>

<div
  {...rest}
  class={ctx.slots.content({ class: cn(className) })}
  data-part="content"
  data-scope="rich-text-editor"
  use:register
></div>
