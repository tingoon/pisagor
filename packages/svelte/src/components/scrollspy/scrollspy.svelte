<script lang="ts">
import { cn } from "@pisagor/utils";
import { onMount } from "svelte";
import type { HTMLAttributes } from "svelte/elements";

type ScrollTarget = HTMLElement | Document | null | undefined;

type Props = Omit<HTMLAttributes<HTMLElement>, "class"> & {
  class?: string | undefined;
  history?: boolean;
  offset?: number;
  onUpdate?: (id: string) => void;
  smooth?: boolean;
  /** Bindable scroll target element (or document). */
  target?: ScrollTarget;
};

let {
  history = true,
  offset = 0,
  smooth = true,
  target = null,
  onUpdate,
  class: className,
  children,
  ...rest
}: Props = $props();

const SCROLLSPY_ANCHOR = "data-scrollspy-anchor";
const SCROLLSPY_OFFSET = "data-scrollspy-offset";
const SCROLLSPY_ANCHOR_SELECTOR = `[${SCROLLSPY_ANCHOR}]`;

let rootEl = $state<HTMLElement | null>(null);
let activeId = $state<string | null>(null);

function resolveScrollElement(t: ScrollTarget): HTMLElement {
  if (t === document || !t) return document.documentElement;
  if (t instanceof HTMLElement) {
    const viewport = t.querySelector('[data-scope="scroll-area"][data-part="viewport"]');
    if (viewport instanceof HTMLElement) return viewport;
    return t;
  }
  return document.documentElement;
}

function resolveScrollTarget(t: ScrollTarget): HTMLElement | Window {
  if (t === document || !t) return window;
  if (t instanceof HTMLElement) {
    const viewport = t.querySelector('[data-scope="scroll-area"][data-part="viewport"]');
    if (viewport instanceof HTMLElement) return viewport;
    return t;
  }
  return window;
}

function getSectionScrollOffset(section: HTMLElement, _scrollEl: HTMLElement): number {
  const sectionOffset = section.getAttribute(SCROLLSPY_OFFSET);
  const local = sectionOffset ? Number(sectionOffset) || 0 : 0;
  return offset + local;
}

function updateActive() {
  if (!rootEl) return;
  const scrollEl = resolveScrollElement(target);
  const anchors = Array.from(rootEl.querySelectorAll<HTMLElement>(SCROLLSPY_ANCHOR_SELECTOR));
  if (anchors.length === 0) return;

  let current = anchors[0]?.getAttribute(SCROLLSPY_ANCHOR) ?? null;
  const scrollTop = scrollEl === document.documentElement ? window.scrollY : scrollEl.scrollTop;

  for (const anchor of anchors) {
    const id = anchor.getAttribute(SCROLLSPY_ANCHOR);
    if (!id) continue;
    const section = document.getElementById(id);
    if (!section) continue;
    const top =
      section.getBoundingClientRect().top +
      (scrollEl === document.documentElement ? window.scrollY : scrollEl.scrollTop) -
      getSectionScrollOffset(section, scrollEl);
    if (scrollTop + 1 >= top) current = id;
  }

  if (current && current !== activeId) {
    activeId = current;
    onUpdate?.(current);
    if (history && typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.hash = current;
      window.history.replaceState(null, "", url);
    }
    for (const anchor of anchors) {
      const id = anchor.getAttribute(SCROLLSPY_ANCHOR);
      if (id === current) anchor.setAttribute("data-active", "");
      else anchor.removeAttribute("data-active");
    }
  }
}

function activateAnchor(event: MouseEvent | KeyboardEvent) {
  const el = (event.target as HTMLElement | null)?.closest?.(SCROLLSPY_ANCHOR_SELECTOR);
  if (!(el instanceof HTMLElement) || !rootEl?.contains(el)) return;
  const id = el.getAttribute(SCROLLSPY_ANCHOR);
  if (!id) return;
  const section = document.getElementById(id);
  if (!section) return;
  event.preventDefault();
  const scrollEl = resolveScrollElement(target);
  const top =
    section.getBoundingClientRect().top +
    (scrollEl === document.documentElement ? window.scrollY : scrollEl.scrollTop) -
    getSectionScrollOffset(section, scrollEl);
  const scrollTarget = resolveScrollTarget(target);
  if (scrollTarget === window) {
    window.scrollTo({ behavior: smooth ? "smooth" : "auto", top });
  } else {
    (scrollTarget as HTMLElement).scrollTo({ behavior: smooth ? "smooth" : "auto", top });
  }
}

function onClick(event: MouseEvent) {
  activateAnchor(event);
}

function onKeyDown(event: KeyboardEvent) {
  if (event.key !== "Enter" && event.key !== " ") return;
  activateAnchor(event);
}

onMount(() => {
  const scrollTarget = resolveScrollTarget(target);
  updateActive();
  scrollTarget.addEventListener("scroll", updateActive, { passive: true });
  window.addEventListener("resize", updateActive);
  return () => {
    scrollTarget.removeEventListener("scroll", updateActive);
    window.removeEventListener("resize", updateActive);
  };
});
</script>

<nav
  {...rest}
  class={cn(className)}
  data-part="root"
  data-scope="scrollspy"
  onclick={onClick}
  onkeydown={onKeyDown}
  bind:this={rootEl}
>
  {@render children?.()}
</nav>
