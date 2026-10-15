const TOP_LEVEL_SELECTOR =
  ':scope > li > a, :scope > li > button, :scope > li > [data-part="trigger"]';

/** Arrow / Home / End navigation between top-level links and triggers. */
export function handleNavigationMenuListKeyDown(event: KeyboardEvent) {
  const list = event.currentTarget as HTMLElement | null;
  const target = event.target as HTMLElement | null;
  if (!list || !target || target.closest('[data-part="content"]')) {
    return;
  }
  const items = Array.from(
    list.querySelectorAll<HTMLElement>(TOP_LEVEL_SELECTOR),
  );
  const index = items.indexOf(target);
  if (index === -1) {
    return;
  }
  const rtl = getComputedStyle(list).direction === "rtl";
  const next = rtl ? "ArrowLeft" : "ArrowRight";
  const prev = rtl ? "ArrowRight" : "ArrowLeft";
  const destination =
    event.key === next
      ? items[(index + 1) % items.length]
      : event.key === prev
        ? items[(index - 1 + items.length) % items.length]
        : event.key === "Home"
          ? items[0]
          : event.key === "End"
            ? items.at(-1)
            : undefined;
  if (!destination) {
    return;
  }
  event.preventDefault();
  destination.focus();
}

/** Focus the first or last link inside a navigation menu content panel. */
export function focusNavigationMenuContentLink(
  contentId: string,
  position: "first" | "last",
) {
  const links = document
    .getElementById(contentId)
    ?.querySelectorAll<HTMLElement>("a, button");
  if (!links?.length) {
    return;
  }
  (position === "first" ? links[0] : links[links.length - 1])?.focus();
}

/** Arrow Up / Down cycling between links inside a content panel. */
export function handleNavigationMenuContentKeyDown(event: KeyboardEvent) {
  if (event.key !== "ArrowDown" && event.key !== "ArrowUp") {
    return;
  }
  const content = event.currentTarget as HTMLElement | null;
  if (!content) {
    return;
  }
  const links = Array.from(content.querySelectorAll<HTMLElement>("a, button"));
  const index = links.indexOf(event.target as HTMLElement);
  const next =
    event.key === "ArrowDown"
      ? links[(index + 1) % links.length]
      : links[(index - 1 + links.length) % links.length];
  event.preventDefault();
  next?.focus();
}
