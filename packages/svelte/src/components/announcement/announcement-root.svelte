<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { AnnouncementProps as BaseAnnouncementProps } from "@pisagor/props";
import { announcementRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { setAnnouncementContext } from "./announcement.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class" | "title" | "role"> &
  {
  children?: import("svelte").Snippet;
  class?: string | undefined;
  role?: "status" | "alert";
  } & BaseAnnouncementProps;

let {
  role = "status",
  children,
  recipe = announcementRecipe,
  class: className,
  ...rest
}: Props = $props();

const slots = $derived(recipe());

setAnnouncementContext({
  get slots() {
    return slots;
  },
});
</script>

<Ark
  as="div"
  {...rest}
  class={slots.base({ class: cn(className) })}
  data-part="root"
  data-scope="announcement"
  {role}
>
  {@render children?.()}
</Ark>
