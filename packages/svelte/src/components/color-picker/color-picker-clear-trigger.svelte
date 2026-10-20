<script lang="ts">
  import {
    Ark,
    type DialogTriggerProps,
    parseColor,
    useColorPickerContext,
  } from "@ark-ui/svelte";
  import type { HTMLButtonAttributes } from "svelte/elements";
  import { useLocale } from "../provider/context";
  import { withContext } from "./color-picker.context";

  type Props = HTMLButtonAttributes & {
    /** Render your own element; spread `props()` onto it. */
    asChild?: DialogTriggerProps["asChild"];
  };

  let { children, onclick, ...rest }: Props = $props();
  const { m } = useLocale();
  const api = useColorPickerContext();
  const part = withContext(
    () => ({ "aria-label": m("colorPicker.clearColor"), ...rest }),
    { name: "ClearTrigger" },
  );

  function handleClick(
    event: Parameters<NonNullable<HTMLButtonAttributes["onclick"]>>[0],
  ) {
    api().setValue(parseColor("rgba(0, 0, 0, 0)"));
    onclick?.(event);
  }
</script>

<!-- Not an Ark part: clears the color by making it fully transparent. -->
<Ark
  as="button"
  type="button"
  {...part.props}
  data-part="clear-trigger"
  data-scope="color-picker"
  onclick={handleClick}
>
  {@render children?.()}
</Ark>
