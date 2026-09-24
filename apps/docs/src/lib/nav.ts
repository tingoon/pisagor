export type Framework = "react" | "vue" | "astro";

export type DocsArea = "components" | "blocks" | "recipes" | "forms" | "charts";

export type NavItem = {
  title: string;
  slug: string;
  status?: "ready" | "soon";
};

export type NavSection = {
  title: string;
  items: NavItem[];
};

export const frameworks: { id: Framework; label: string }[] = [
  { id: "react", label: "React" },
  { id: "vue", label: "Vue" },
  { id: "astro", label: "Astro" },
];

export const mainNav: { id: DocsArea; label: string; slug: string }[] = [
  { id: "components", label: "Components", slug: "components" },
  { id: "forms", label: "Forms", slug: "forms" },
  { id: "charts", label: "Charts", slug: "charts" },
  { id: "blocks", label: "Blocks", slug: "blocks" },
  { id: "recipes", label: "Recipes", slug: "recipes" },
];

/** React / Vue component sidebar — grouped like Storybook. */
const componentSections: NavSection[] = [
  {
    items: [
      { slug: "", status: "ready", title: "Introduction" },
      { slug: "styling", status: "ready", title: "Styling" },
    ],
    title: "Getting started",
  },
  {
    items: [
      { slug: "components/action-bar", status: "ready", title: "Action Bar" },
      { slug: "components/button", status: "ready", title: "Button" },
      { slug: "components/button-group", status: "ready", title: "Button Group" },
      { slug: "components/clipboard", status: "ready", title: "Clipboard" },
      { slug: "components/download-trigger", status: "ready", title: "Download Trigger" },
      { slug: "components/segment-group", status: "ready", title: "Segment Group" },
      { slug: "components/sortable", status: "ready", title: "Sortable" },
      { slug: "components/swap", status: "ready", title: "Swap" },
      { slug: "components/toggle", status: "ready", title: "Toggle" },
      { slug: "components/toggle-group", status: "ready", title: "Toggle Group" },
    ],
    title: "Actions",
  },
  {
    items: [
      { slug: "components/avatar", status: "ready", title: "Avatar" },
      { slug: "components/badge", status: "ready", title: "Badge" },
      { slug: "components/data-grid", status: "ready", title: "Data Grid" },
      { slug: "components/data-list", status: "ready", title: "Data List" },
      { slug: "components/data-table", status: "ready", title: "Data Table" },
      { slug: "components/file", status: "ready", title: "File" },
      { slug: "components/format", status: "ready", title: "Format" },
      { slug: "components/highlight", status: "ready", title: "Highlight" },
      { slug: "components/item", status: "ready", title: "Item" },
      { slug: "components/json-tree-view", status: "ready", title: "JSON Tree View" },
      { slug: "components/kbd", status: "ready", title: "Kbd" },
      { slug: "components/prose", status: "ready", title: "Prose" },
      { slug: "components/stat", status: "ready", title: "Stat" },
      { slug: "components/table", status: "ready", title: "Table" },
      { slug: "components/timeline", status: "ready", title: "Timeline" },
    ],
    title: "Data Display",
  },
  {
    items: [
      { slug: "components/alert", status: "ready", title: "Alert" },
      { slug: "components/announcement", status: "ready", title: "Announcement" },
      { slug: "components/circular-progress", status: "ready", title: "Circular Progress" },
      { slug: "components/empty-state", status: "ready", title: "Empty State" },
      { slug: "components/progress", status: "ready", title: "Progress" },
      { slug: "components/skeleton", status: "ready", title: "Skeleton" },
      { slug: "components/spinner", status: "ready", title: "Spinner" },
      { slug: "components/status", status: "ready", title: "Status" },
      { slug: "components/timer", status: "ready", title: "Timer" },
      { slug: "components/toast", status: "ready", title: "Toast" },
    ],
    title: "Feedback",
  },
  {
    items: [
      { slug: "components/autocomplete", status: "ready", title: "Autocomplete" },
      { slug: "components/calendar", status: "ready", title: "Calendar" },
      { slug: "components/checkbox", status: "ready", title: "Checkbox" },
      { slug: "components/circular-slider", status: "ready", title: "Circular Slider" },
      { slug: "components/color-picker", status: "ready", title: "Color Picker" },
      { slug: "components/combobox", status: "ready", title: "Combobox" },
      { slug: "components/date-picker", status: "ready", title: "Date Picker" },
      { slug: "components/editable", status: "ready", title: "Editable" },
      { slug: "components/field", status: "ready", title: "Field" },
      { slug: "components/file-input", status: "ready", title: "File Input" },
      { slug: "components/file-upload", status: "ready", title: "File Upload" },
      { slug: "components/input", status: "ready", title: "Input" },
      { slug: "components/input-group", status: "ready", title: "Input Group" },
      { slug: "components/input-otp", status: "ready", title: "Input Otp" },
      { slug: "components/listbox", status: "ready", title: "Listbox" },
      { slug: "components/number-input", status: "ready", title: "Number Input" },
      { slug: "components/password-input", status: "ready", title: "Password Input" },
      { slug: "components/phone-input", status: "ready", title: "Phone Input" },
      { slug: "components/radio-group", status: "ready", title: "Radio Group" },
      { slug: "components/rating", status: "ready", title: "Rating" },
      { slug: "components/rich-text-editor", status: "ready", title: "Rich Text Editor" },
      { slug: "components/select", status: "ready", title: "Select" },
      { slug: "components/signature-pad", status: "ready", title: "Signature Pad" },
      { slug: "components/slider", status: "ready", title: "Slider" },
      { slug: "components/switch", status: "ready", title: "Switch" },
      { slug: "components/tags-input", status: "ready", title: "Tags Input" },
      { slug: "components/textarea", status: "ready", title: "Textarea" },
    ],
    title: "Forms",
  },
  {
    items: [
      { slug: "components/accordion", status: "ready", title: "Accordion" },
      { slug: "components/app-shell", status: "ready", title: "App Shell" },
      { slug: "components/aspect-ratio", status: "ready", title: "Aspect Ratio" },
      { slug: "components/card", status: "ready", title: "Card" },
      { slug: "components/collapsible", status: "ready", title: "Collapsible" },
      { slug: "components/resizable", status: "ready", title: "Resizable" },
      { slug: "components/scroll-area", status: "ready", title: "Scroll Area" },
      { slug: "components/separator", status: "ready", title: "Separator" },
      { slug: "components/surface", status: "ready", title: "Surface" },
      { slug: "components/toolbar", status: "ready", title: "Toolbar" },
    ],
    title: "Layout",
  },
  {
    items: [
      { slug: "components/marquee", status: "ready", title: "Marquee" },
      { slug: "components/qr-code", status: "ready", title: "Qr Code" },
    ],
    title: "Marketing",
  },
  {
    items: [
      { slug: "components/carousel", status: "ready", title: "Carousel" },
      { slug: "components/frame", status: "ready", title: "Frame" },
      { slug: "components/image-cropper", status: "ready", title: "Image Cropper" },
    ],
    title: "Media",
  },
  {
    items: [
      { slug: "components/bottom-navigation", status: "ready", title: "Bottom Navigation" },
      { slug: "components/breadcrumb", status: "ready", title: "Breadcrumb" },
      { slug: "components/dropdown-menu", status: "ready", title: "Dropdown Menu" },
      { slug: "components/menu", status: "ready", title: "Menu" },
      { slug: "components/navbar", status: "ready", title: "Navbar" },
      { slug: "components/navigation-menu", status: "ready", title: "Navigation Menu" },
      { slug: "components/pagination", status: "ready", title: "Pagination" },
      { slug: "components/scrollspy", status: "ready", title: "Scrollspy" },
      { slug: "components/sidebar", status: "ready", title: "Sidebar" },
      { slug: "components/skip-nav", status: "ready", title: "Skip Nav" },
      { slug: "components/steps", status: "ready", title: "Steps" },
      { slug: "components/tabs", status: "ready", title: "Tabs" },
      { slug: "components/tree-view", status: "ready", title: "Tree View" },
    ],
    title: "Navigation",
  },
  {
    items: [
      { slug: "components/alert-dialog", status: "ready", title: "Alert Dialog" },
      { slug: "components/command", status: "ready", title: "Command" },
      { slug: "components/context-menu", status: "ready", title: "Context Menu" },
      { slug: "components/dialog", status: "ready", title: "Dialog" },
      { slug: "components/drawer", status: "ready", title: "Drawer" },
      { slug: "components/floating-panel", status: "ready", title: "Floating Panel" },
      { slug: "components/hover-card", status: "ready", title: "Hover Card" },
      { slug: "components/popover", status: "ready", title: "Popover" },
      { slug: "components/sheet", status: "ready", title: "Sheet" },
      { slug: "components/tooltip", status: "ready", title: "Tooltip" },
      { slug: "components/tour", status: "ready", title: "Tour" },
    ],
    title: "Overlay",
  },
  {
    items: [
      { slug: "components/client-only", status: "ready", title: "Client Only" },
      { slug: "components/link-box", status: "ready", title: "Link Box" },
      { slug: "components/presence", status: "ready", title: "Presence" },
      { slug: "components/provider", status: "ready", title: "Provider" },
      { slug: "components/visually-hidden", status: "ready", title: "Visually Hidden" },
    ],
    title: "Utilities",
  },
];

/** Astro component sidebar — same groups, only shipped Astro components. */
const astroComponentSections: NavSection[] = [
  {
    items: [
      { slug: "", status: "ready", title: "Introduction" },
      { slug: "styling", status: "ready", title: "Styling" },
    ],
    title: "Getting started",
  },
  {
    items: [
      { slug: "components/button", status: "ready", title: "Button" },
      { slug: "components/button-group", status: "ready", title: "Button Group" },
    ],
    title: "Actions",
  },
  {
    items: [
      { slug: "components/avatar", status: "ready", title: "Avatar" },
      { slug: "components/badge", status: "ready", title: "Badge" },
      { slug: "components/data-list", status: "ready", title: "Data List" },
      { slug: "components/format", status: "ready", title: "Format" },
      { slug: "components/highlight", status: "ready", title: "Highlight" },
      { slug: "components/item", status: "ready", title: "Item" },
      { slug: "components/kbd", status: "ready", title: "Kbd" },
      { slug: "components/prose", status: "ready", title: "Prose" },
      { slug: "components/stat", status: "ready", title: "Stat" },
      { slug: "components/table", status: "ready", title: "Table" },
      { slug: "components/timeline", status: "ready", title: "Timeline" },
    ],
    title: "Data Display",
  },
  {
    items: [
      { slug: "components/alert", status: "ready", title: "Alert" },
      { slug: "components/announcement", status: "ready", title: "Announcement" },
      { slug: "components/circular-progress", status: "ready", title: "Circular Progress" },
      { slug: "components/empty-state", status: "ready", title: "Empty State" },
      { slug: "components/progress", status: "ready", title: "Progress" },
      { slug: "components/skeleton", status: "ready", title: "Skeleton" },
      { slug: "components/spinner", status: "ready", title: "Spinner" },
      { slug: "components/status", status: "ready", title: "Status" },
    ],
    title: "Feedback",
  },
  {
    items: [{ slug: "components/input-group", status: "ready", title: "Input Group" }],
    title: "Forms",
  },
  {
    items: [
      { slug: "components/aspect-ratio", status: "ready", title: "Aspect Ratio" },
      { slug: "components/card", status: "ready", title: "Card" },
      { slug: "components/separator", status: "ready", title: "Separator" },
      { slug: "components/surface", status: "ready", title: "Surface" },
    ],
    title: "Layout",
  },
  {
    items: [{ slug: "components/frame", status: "ready", title: "Frame" }],
    title: "Media",
  },
  {
    items: [
      { slug: "components/breadcrumb", status: "ready", title: "Breadcrumb" },
      { slug: "components/skip-nav", status: "ready", title: "Skip Nav" },
    ],
    title: "Navigation",
  },
  {
    items: [
      { slug: "components/link-box", status: "ready", title: "Link Box" },
      { slug: "components/visually-hidden", status: "ready", title: "Visually Hidden" },
    ],
    title: "Utilities",
  },
];

const formItems: NavItem[] = [
  { slug: "forms", status: "ready", title: "Overview" },
  { slug: "forms/text-field", status: "ready", title: "Text Field" },
  { slug: "forms/autocomplete-field", status: "ready", title: "Autocomplete Field" },
  { slug: "forms/checkbox-field", status: "ready", title: "Checkbox Field" },
  { slug: "forms/date-field", status: "ready", title: "Date Field" },
  { slug: "forms/file-field", status: "ready", title: "File Field" },
  { slug: "forms/number-field", status: "ready", title: "Number Field" },
  { slug: "forms/otp-field", status: "ready", title: "Otp Field" },
  { slug: "forms/password-field", status: "ready", title: "Password Field" },
  { slug: "forms/phone-field", status: "ready", title: "Phone Field" },
  { slug: "forms/radio-group-field", status: "ready", title: "Radio Group Field" },
  { slug: "forms/rich-text-editor-field", status: "ready", title: "Rich Text Editor Field" },
  { slug: "forms/select-field", status: "ready", title: "Select Field" },
  { slug: "forms/slider-field", status: "ready", title: "Slider Field" },
  { slug: "forms/switch-field", status: "ready", title: "Switch Field" },
  { slug: "forms/tags-input-field", status: "ready", title: "Tags Input Field" },
  { slug: "forms/textarea-field", status: "ready", title: "Textarea Field" },
];

const chartItems: NavItem[] = [
  { slug: "charts", status: "ready", title: "Overview" },
  { slug: "charts/chart", status: "ready", title: "Chart" },
];

const blockItems: NavItem[] = [{ slug: "blocks", status: "ready", title: "Overview" }];

const recipeSections: NavSection[] = [
  {
    items: [{ slug: "recipes", status: "ready", title: "Overview" }],
    title: "Getting started",
  },
  {
    items: [
      { slug: "recipes/app-shell", status: "ready", title: "App Shell" },
      { slug: "recipes/card", status: "ready", title: "Card" },
    ],
    title: "Layout",
  },
  {
    items: [{ slug: "recipes/editors", status: "ready", title: "Editors" }],
    title: "Editors",
  },
  {
    items: [
      { slug: "recipes/field", status: "ready", title: "Field" },
      { slug: "recipes/input-group", status: "ready", title: "Input Group" },
      { slug: "recipes/password", status: "ready", title: "Password Input" },
      { slug: "recipes/search-field", status: "ready", title: "Search Field" },
      { slug: "recipes/sign-in-form", status: "ready", title: "Sign In" },
      { slug: "recipes/tags-input", status: "ready", title: "Tags Input" },
    ],
    title: "Forms",
  },
  {
    items: [{ slug: "recipes/overlay", status: "ready", title: "Overlay" }],
    title: "Overlay",
  },
  {
    items: [{ slug: "recipes/table", status: "ready", title: "Table" }],
    title: "Data",
  },
];

/** Astro/Vite `base`; always ends with `/` (`/` or `/pisagor/`). */
export function docsBase(): string {
  return import.meta.env.BASE_URL ?? "/";
}

/** Prefix a site path with the configured docs base. */
export function withDocsBase(path = ""): string {
  const base = docsBase();
  const clean = path.replace(/^\/+/, "");
  if (!clean) {
    const trimmed = base.replace(/\/$/, "");
    return trimmed || "/";
  }
  return `${base}${clean}`;
}

/** Drop the docs base from a pathname so framework/area parsing stays stable. */
export function stripDocsBase(pathname: string): string {
  const base = docsBase().replace(/\/$/, "");
  if (base && (pathname === base || pathname.startsWith(`${base}/`))) {
    return pathname.slice(base.length) || "/";
  }
  return pathname || "/";
}

export function getDocsArea(pathname: string): DocsArea {
  const parts = stripDocsBase(pathname).split("/").filter(Boolean);
  const section = parts[1];
  if (section === "blocks") return "blocks";
  if (section === "recipes") return "recipes";
  if (section === "forms") return "forms";
  if (section === "charts") return "charts";
  return "components";
}

/** Sidebar list for the active main-nav area. */
export function getSidebarNav(framework: Framework, area: DocsArea): NavSection[] {
  if (area === "blocks") {
    return [{ items: blockItems, title: "Blocks" }];
  }
  if (area === "recipes") {
    if (framework === "astro") {
      return [
        { items: [{ slug: "recipes", status: "soon", title: "Overview" }], title: "Recipes" },
      ];
    }
    return recipeSections;
  }
  if (area === "forms") {
    if (framework === "astro") {
      return [{ items: [{ slug: "forms", status: "soon", title: "Overview" }], title: "Forms" }];
    }
    return [{ items: formItems, title: "Forms" }];
  }
  if (area === "charts") {
    if (framework === "astro") {
      return [{ items: [{ slug: "charts", status: "soon", title: "Overview" }], title: "Charts" }];
    }
    return [{ items: chartItems, title: "Charts" }];
  }

  return framework === "astro" ? astroComponentSections : componentSections;
}

/** Full tree (mobile drawer). */
export function getDocsNav(framework: Framework): NavSection[] {
  return [
    ...getSidebarNav(framework, "components"),
    ...getSidebarNav(framework, "forms"),
    ...getSidebarNav(framework, "charts"),
    ...getSidebarNav(framework, "blocks"),
    ...getSidebarNav(framework, "recipes"),
  ];
}

/** @deprecated use getDocsNav(framework) */
export const docsNav = getDocsNav("react");

export function frameworkPath(framework: Framework, slug = "") {
  return withDocsBase(slug ? `/${framework}/${slug}` : `/${framework}`);
}

export function swapFrameworkPath(pathname: string, next: Framework) {
  const parts = stripDocsBase(pathname).split("/").filter(Boolean);
  if (parts.length === 0) return frameworkPath(next);
  parts[0] = next;
  // Accordion is react/vue only
  if (next === "astro" && (parts[1] === "accordion" || parts[2] === "accordion")) {
    return frameworkPath(next);
  }
  // forms/charts not on astro
  if (next === "astro" && (parts[1] === "forms" || parts[1] === "charts")) {
    return frameworkPath(next);
  }
  return withDocsBase(`/${parts.join("/")}`);
}
