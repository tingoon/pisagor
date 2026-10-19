<script lang="ts">
  import {
    TagsInput as TagsInputPrimitive,
    type TagsInputRootProviderProps as ArkRootProviderProps,
  } from "@ark-ui/svelte";
  import type { TagsInputRootContract } from "@pisagor/contracts";
  import { withTagsInputProvider } from "./tags-input.context";

  type Props = ArkRootProviderProps & Omit<TagsInputRootContract, "variant">;

  let { children, size = "md", ...rest }: Props = $props();
  const root = withTagsInputProvider(() => ({ ...rest, "data-size": size }), {
    name: "RootProvider",
    slot: "base",
  });
</script>

<TagsInputPrimitive.RootProvider {...root.props}>
  {@render children?.()}
  <TagsInputPrimitive.HiddenInput />
</TagsInputPrimitive.RootProvider>
