<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { FileProps as BaseFileProps } from "@pisagor/props";
import { cn } from "@pisagor/utils";
import FileIcon from "phosphor-svelte/lib/FileIcon";
import type { HTMLAttributes } from "svelte/elements";
import { useFile } from "./file.context";

type Props = HTMLAttributes<HTMLDivElement> & BaseFileProps;

let { variant = "icon", children, class: className, ...rest }: Props = $props();
const { slots } = useFile();
</script>

<Ark
  as="div"
  {...rest}
  class={slots.media({ class: cn(className), variant })}
  data-part="media"
  data-scope="file"
  data-variant={variant}
>
  {#if children}
    {@render children()}
  {:else}
    <FileIcon />
  {/if}
</Ark>
