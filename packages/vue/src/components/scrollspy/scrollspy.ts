import { cn } from "@pisagor/utils";
import { defineComponent, h, onMounted, onUnmounted, type PropType, ref } from "vue";

// #region Types
type ScrollTarget = HTMLElement | Document | null | undefined;

const SCROLLSPY_ANCHOR = "data-scrollspy-anchor";
const SCROLLSPY_OFFSET = "data-scrollspy-offset";
const SCROLLSPY_ANCHOR_SELECTOR = `[${SCROLLSPY_ANCHOR}]`;

export interface ScrollspyProps {
  class?: unknown;
  /**
   * Whether to update the URL hash when the active section changes.
   *
   * @defaultValue true
   *
   * @remarks
   * Updates `window.location.hash`, which affects browser history navigation.
   */
  history?: boolean;
  /**
   * Called when the active section changes.
   */
  onUpdate?: (id: string) => void;
  /**
   * Global pixel offset from the top when calculating active sections.
   *
   * @defaultValue 0
   */
  offset?: number;
  /**
   * Whether to use smooth scrolling when clicking on anchors.
   *
   * @defaultValue true
   */
  smooth?: boolean;
  /**
   * The scrollable container to monitor. Omit to spy on the window.
   *
   * @remarks
   * Pass a template ref (e.g. `const parentRef = ref<HTMLElement | null>(null)` bound via
   * `ref="parentRef"`). Vue auto-unwraps the ref when read in a template, so this prop always
   * receives the live element rather than the `Ref` wrapper.
   */
  targetRef?: ScrollTarget;
}
// #endregion

// #region Helpers
function resolveScrollElement(target: ScrollTarget): HTMLElement | null {
  if (target === document) {
    return document.documentElement;
  }

  if (!(target instanceof HTMLElement)) {
    return document.documentElement;
  }

  const viewport = target.querySelector('[data-scope="scroll-area"][data-part="viewport"]');
  if (viewport instanceof HTMLElement) {
    return viewport;
  }

  return target;
}

function resolveScrollTarget(target: ScrollTarget): HTMLElement | Window {
  if (target === document || !target) {
    return window;
  }

  if (target instanceof HTMLElement) {
    const viewport = target.querySelector('[data-scope="scroll-area"][data-part="viewport"]');
    if (viewport instanceof HTMLElement) {
      return viewport;
    }

    return target;
  }

  return window;
}

function getSectionScrollOffset(sectionElement: HTMLElement, scrollElement: HTMLElement): number {
  if (scrollElement === document.documentElement) {
    return sectionElement.getBoundingClientRect().top + window.scrollY;
  }

  const sectionRect = sectionElement.getBoundingClientRect();
  const scrollRect = scrollElement.getBoundingClientRect();

  return sectionRect.top - scrollRect.top + scrollElement.scrollTop;
}
// #endregion

// #region Part
export const Scrollspy = defineComponent({
  inheritAttrs: false,
  name: "PisagorScrollspy",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    history: { default: true, type: Boolean as PropType<ScrollspyProps["history"]> },
    offset: { default: 0, type: Number as PropType<ScrollspyProps["offset"]> },
    onUpdate: { default: undefined, type: Function as PropType<ScrollspyProps["onUpdate"]> },
    smooth: { default: true, type: Boolean as PropType<ScrollspyProps["smooth"]> },
    targetRef: { default: undefined, type: Object as PropType<ScrollspyProps["targetRef"]> },
  },
  setup(props, { attrs, slots }) {
    const selfRef = ref<HTMLDivElement | null>(null);

    let anchorElements: Element[] = [];
    let prevId: string | null = null;
    let removeScrollListener: (() => void) | undefined;
    let initialTimeout: number | undefined;

    const setActiveSection = (sectionId: string | null, force = false) => {
      if (!sectionId) {
        return;
      }

      for (const item of anchorElements) {
        const id = item.getAttribute(SCROLLSPY_ANCHOR);
        if (id === sectionId) {
          item.setAttribute("data-active", "true");
        } else {
          item.removeAttribute("data-active");
        }
      }

      props.onUpdate?.(sectionId);

      if (props.history && (force || prevId !== sectionId)) {
        window.history.replaceState({}, "", `#${sectionId}`);
      }

      prevId = sectionId;
    };

    const handleScroll = () => {
      if (anchorElements.length === 0) {
        return;
      }

      const scrollElement = resolveScrollElement(props.targetRef);
      if (!scrollElement) {
        return;
      }

      const scrollTop =
        scrollElement === document.documentElement
          ? window.scrollY || document.documentElement.scrollTop
          : scrollElement.scrollTop;

      let activeIdx = 0;
      let minDelta = Number.POSITIVE_INFINITY;

      anchorElements.forEach((anchor, idx) => {
        const sectionId = anchor.getAttribute(SCROLLSPY_ANCHOR);
        if (!sectionId) {
          return;
        }

        const sectionElement = document.getElementById(sectionId);
        if (!sectionElement) {
          return;
        }

        let customOffset = props.offset;
        const dataOffset = anchor.getAttribute(SCROLLSPY_OFFSET);
        if (dataOffset) {
          customOffset = Number.parseInt(dataOffset, 10);
        }

        const sectionOffset = getSectionScrollOffset(sectionElement, scrollElement);
        const delta = Math.abs(sectionOffset - customOffset - scrollTop);

        if (sectionOffset - customOffset <= scrollTop && delta < minDelta) {
          minDelta = delta;
          activeIdx = idx;
        }
      });

      const scrollHeight = scrollElement.scrollHeight;
      const clientHeight = scrollElement.clientHeight;

      if (scrollTop + clientHeight >= scrollHeight - 2) {
        activeIdx = anchorElements.length - 1;
      }

      const activeAnchor = anchorElements[activeIdx];
      const sectionId = activeAnchor?.getAttribute(SCROLLSPY_ANCHOR) ?? null;

      setActiveSection(sectionId);
    };

    const scrollTo = (anchorElement: HTMLElement) => (event?: Event) => {
      event?.preventDefault();

      const sectionId = anchorElement.getAttribute(SCROLLSPY_ANCHOR)?.replace("#", "") ?? null;
      if (!sectionId) {
        return;
      }

      const sectionElement = document.getElementById(sectionId);
      if (!sectionElement) {
        return;
      }

      const scrollToElement = resolveScrollTarget(props.targetRef);

      let customOffset = props.offset;
      const dataOffset = anchorElement.getAttribute(SCROLLSPY_OFFSET);
      if (dataOffset) {
        customOffset = Number.parseInt(dataOffset, 10);
      }

      const scrollElement =
        scrollToElement instanceof HTMLElement ? scrollToElement : document.documentElement;
      const sectionOffset = getSectionScrollOffset(sectionElement, scrollElement);
      const scrollTop = sectionOffset - customOffset;

      scrollToElement.scrollTo({
        behavior: props.smooth ? "smooth" : "auto",
        left: 0,
        top: scrollTop,
      });

      setActiveSection(sectionId, true);
    };

    const scrollToHashSection = () => {
      const hash = CSS.escape(window.location.hash.replace("#", ""));

      if (!hash) {
        return;
      }

      const targetElement = document.querySelector(
        `[${SCROLLSPY_ANCHOR}="${hash}"]`,
      ) as HTMLElement | null;

      if (targetElement) {
        scrollTo(targetElement)();
      }
    };

    onMounted(() => {
      if (selfRef.value) {
        anchorElements = Array.from(selfRef.value.querySelectorAll(SCROLLSPY_ANCHOR_SELECTOR));
      }

      const anchorListeners = anchorElements.map((item) => {
        const listener = scrollTo(item as HTMLElement);
        item.addEventListener("click", listener);
        return { item, listener };
      });

      const onScroll = (event: Event) => {
        const scrollTarget = props.targetRef ?? document;
        const scrollElement = resolveScrollTarget(scrollTarget);

        if (
          scrollElement === window ||
          (scrollElement instanceof HTMLElement && scrollElement.contains(event.target as Node))
        ) {
          handleScroll();
        }
      };

      window.addEventListener("scroll", onScroll, true);

      initialTimeout = window.setTimeout(() => {
        scrollToHashSection();
        handleScroll();
      }, 100);

      removeScrollListener = () => {
        window.removeEventListener("scroll", onScroll, true);
        for (const { item, listener } of anchorListeners) {
          item.removeEventListener("click", listener);
        }
      };
    });

    onUnmounted(() => {
      removeScrollListener?.();
      window.clearTimeout(initialTimeout);
    });

    return () =>
      h(
        "div",
        {
          ...attrs,
          class: cn(props.class),
          "data-part": "root",
          "data-scope": "scrollspy",
          ref: selfRef,
        },
        slots.default?.(),
      );
  },
});
// #endregion
