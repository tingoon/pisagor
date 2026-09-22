export type ComponentApi = "closed" | "open" | "compound-shorthand" | "compound";
export type ComponentTaxonomy = "primitive" | "standard" | "composite" | "layout" | "pattern";

export interface ComponentMeta {
  /** Public API shape. */
  api: ComponentApi;
  /** Catalog grouping. */
  taxonomy: ComponentTaxonomy;
  /** Alternate names (search / migration). */
  aliases?: string[];
}

/** Framework-agnostic component catalog metadata (formerly Storybook parameters.metadata). */
export const componentMeta = {
  accordion: {
    aliases: ["disclosure"],
    api: "compound-shorthand",
    taxonomy: "standard",
  },
  "action-bar": {
    aliases: ["bulk-actions"],
    api: "compound",
    taxonomy: "pattern",
  },
  alert: {
    api: "compound-shorthand",
    taxonomy: "standard",
  },
  "alert-dialog": {
    api: "compound-shorthand",
    taxonomy: "pattern",
  },
  announcement: {
    api: "compound-shorthand",
    taxonomy: "standard",
  },
  "app-shell": {
    api: "compound",
    taxonomy: "pattern",
  },
  "aspect-ratio": {
    api: "closed",
    taxonomy: "primitive",
  },
  autocomplete: {
    aliases: ["typeahead"],
    api: "compound-shorthand",
    taxonomy: "standard",
  },
  avatar: {
    api: "closed",
    taxonomy: "primitive",
  },
  "avatar-group": {
    api: "compound-shorthand",
    taxonomy: "standard",
  },
  badge: {
    api: "closed",
    taxonomy: "primitive",
  },
  bar: {
    aliases: ["graph"],
    api: "compound",
    taxonomy: "pattern",
  },
  "bottom-navigation": {
    aliases: ["tab-bar"],
    api: "compound",
    taxonomy: "pattern",
  },
  breadcrumb: {
    api: "compound-shorthand",
    taxonomy: "standard",
  },
  button: {
    api: "closed",
    taxonomy: "primitive",
  },
  "button-group": {
    api: "compound",
    taxonomy: "primitive",
  },
  calendar: {
    aliases: ["date-grid"],
    api: "compound",
    taxonomy: "pattern",
  },
  card: {
    api: "compound",
    taxonomy: "standard",
  },
  carousel: {
    aliases: ["slideshow"],
    api: "compound-shorthand",
    taxonomy: "standard",
  },
  checkbox: {
    api: "compound",
    taxonomy: "standard",
  },
  "circular-progress": {
    api: "closed",
    taxonomy: "primitive",
  },
  "circular-slider": {
    api: "compound",
    taxonomy: "standard",
  },
  "client-only": {
    api: "closed",
    taxonomy: "primitive",
  },
  clipboard: {
    aliases: ["copy"],
    api: "closed",
    taxonomy: "standard",
  },
  collapsible: {
    api: "compound",
    taxonomy: "standard",
  },
  "color-picker": {
    api: "compound",
    taxonomy: "standard",
  },
  combobox: {
    api: "compound-shorthand",
    taxonomy: "standard",
  },
  command: {
    aliases: ["command-palette"],
    api: "compound",
    taxonomy: "pattern",
  },
  "context-menu": {
    aliases: ["right-click-menu"],
    api: "compound",
    taxonomy: "pattern",
  },
  "data-grid": {
    aliases: ["advanced-table"],
    api: "compound",
    taxonomy: "pattern",
  },
  "data-list": {
    api: "compound-shorthand",
    taxonomy: "standard",
  },
  "data-table": {
    api: "compound",
    taxonomy: "pattern",
  },
  "date-picker": {
    api: "compound",
    taxonomy: "pattern",
  },
  dialog: {
    aliases: ["modal"],
    api: "compound-shorthand",
    taxonomy: "standard",
  },
  "download-trigger": {
    api: "closed",
    taxonomy: "primitive",
  },
  drawer: {
    aliases: ["tray"],
    api: "compound",
    taxonomy: "standard",
  },
  "dropdown-menu": {
    api: "compound",
    taxonomy: "standard",
  },
  editable: {
    api: "compound",
    taxonomy: "standard",
  },
  "empty-state": {
    api: "compound-shorthand",
    taxonomy: "standard",
  },
  field: {
    api: "compound",
    taxonomy: "standard",
  },
  file: {
    aliases: ["attachment", "file-row"],
    api: "compound-shorthand",
    taxonomy: "standard",
  },
  "file-input": {
    api: "closed",
    taxonomy: "primitive",
  },
  "file-upload": {
    aliases: ["upload"],
    api: "compound",
    taxonomy: "pattern",
  },
  "floating-panel": {
    aliases: ["window"],
    api: "compound",
    taxonomy: "pattern",
  },
  format: {
    api: "compound",
    taxonomy: "primitive",
  },
  frame: {
    api: "compound",
    taxonomy: "standard",
  },
  highlight: {
    api: "closed",
    taxonomy: "primitive",
  },
  "hover-card": {
    aliases: ["popover-card"],
    api: "compound",
    taxonomy: "standard",
  },
  "image-cropper": {
    api: "compound",
    taxonomy: "pattern",
  },
  input: {
    api: "compound",
    taxonomy: "primitive",
  },
  "input-group": {
    api: "compound",
    taxonomy: "primitive",
  },
  "input-otp": {
    api: "compound",
    taxonomy: "standard",
  },
  item: {
    api: "compound",
    taxonomy: "standard",
  },
  "json-tree-view": {
    api: "closed",
    taxonomy: "pattern",
  },
  kbd: {
    api: "compound",
    taxonomy: "primitive",
  },
  "link-box": {
    api: "compound",
    taxonomy: "primitive",
  },
  listbox: {
    aliases: ["list-box"],
    api: "compound-shorthand",
    taxonomy: "standard",
  },
  marquee: {
    api: "compound-shorthand",
    taxonomy: "standard",
  },
  menu: {
    aliases: ["nav", "navigation"],
    api: "compound",
    taxonomy: "standard",
  },
  navbar: {
    aliases: ["header"],
    api: "compound",
    taxonomy: "pattern",
  },
  "navigation-menu": {
    api: "compound",
    taxonomy: "pattern",
  },
  "number-input": {
    api: "compound",
    taxonomy: "standard",
  },
  pagination: {
    aliases: ["pager"],
    api: "compound",
    taxonomy: "standard",
  },
  "password-input": {
    api: "closed",
    taxonomy: "standard",
  },
  "phone-input": {
    api: "closed",
    taxonomy: "pattern",
  },
  popover: {
    aliases: ["flyout"],
    api: "compound",
    taxonomy: "standard",
  },
  presence: {
    api: "closed",
    taxonomy: "primitive",
  },
  progress: {
    api: "closed",
    taxonomy: "primitive",
  },
  prose: {
    api: "closed",
    taxonomy: "primitive",
  },
  provider: {
    api: "closed",
    taxonomy: "primitive",
  },
  "qr-code": {
    aliases: ["qrcode"],
    api: "compound",
    taxonomy: "standard",
  },
  "radio-group": {
    api: "compound-shorthand",
    taxonomy: "standard",
  },
  rating: {
    api: "closed",
    taxonomy: "standard",
  },
  resizable: {
    api: "compound",
    taxonomy: "standard",
  },
  "rich-text-editor": {
    aliases: ["wysiwyg", "rte"],
    api: "compound-shorthand",
    taxonomy: "standard",
  },
  "scroll-area": {
    api: "closed",
    taxonomy: "standard",
  },
  "scroll-spy": {
    aliases: ["scroll-spy"],
    api: "closed",
    taxonomy: "pattern",
  },
  scrollspy: {
    api: "closed",
    taxonomy: "standard",
  },
  "segment-group": {
    aliases: ["segmented-control"],
    api: "compound-shorthand",
    taxonomy: "standard",
  },
  select: {
    api: "compound-shorthand",
    taxonomy: "standard",
  },
  separator: {
    api: "closed",
    taxonomy: "primitive",
  },
  sheet: {
    aliases: ["side-panel"],
    api: "compound",
    taxonomy: "pattern",
  },
  sidebar: {
    aliases: ["side-nav"],
    api: "compound",
    taxonomy: "pattern",
  },
  "signature-pad": {
    api: "closed",
    taxonomy: "standard",
  },
  skeleton: {
    api: "compound",
    taxonomy: "primitive",
  },
  "skip-nav": {
    api: "compound",
    taxonomy: "standard",
  },
  slider: {
    api: "closed",
    taxonomy: "standard",
  },
  sortable: {
    aliases: ["reorder", "drag-list"],
    api: "compound",
    taxonomy: "standard",
  },
  spinner: {
    api: "closed",
    taxonomy: "primitive",
  },
  stat: {
    api: "compound-shorthand",
    taxonomy: "standard",
  },
  status: {
    api: "closed",
    taxonomy: "primitive",
  },
  steps: {
    aliases: ["stepper", "wizard"],
    api: "compound",
    taxonomy: "pattern",
  },
  surface: {
    api: "closed",
    taxonomy: "primitive",
  },
  swap: {
    api: "closed",
    taxonomy: "primitive",
  },
  switch: {
    api: "closed",
    taxonomy: "standard",
  },
  table: {
    api: "compound",
    taxonomy: "standard",
  },
  tabs: {
    aliases: ["tablist"],
    api: "compound-shorthand",
    taxonomy: "standard",
  },
  "tags-input": {
    api: "compound",
    taxonomy: "standard",
  },
  textarea: {
    api: "closed",
    taxonomy: "primitive",
  },
  timeline: {
    api: "compound-shorthand",
    taxonomy: "standard",
  },
  timer: {
    api: "compound",
    taxonomy: "standard",
  },
  toast: {
    aliases: ["snackbar"],
    api: "compound",
    taxonomy: "standard",
  },
  toggle: {
    api: "closed",
    taxonomy: "primitive",
  },
  "toggle-group": {
    api: "compound-shorthand",
    taxonomy: "standard",
  },
  toolbar: {
    api: "compound-shorthand",
    taxonomy: "pattern",
  },
  tooltip: {
    api: "closed",
    taxonomy: "standard",
  },
  tour: {
    api: "compound",
    taxonomy: "pattern",
  },
  "tree-view": {
    aliases: ["tree"],
    api: "compound",
    taxonomy: "pattern",
  },
  "visually-hidden": {
    api: "closed",
    taxonomy: "primitive",
  },
} as const satisfies Record<string, ComponentMeta>;

export type ComponentMetaId = keyof typeof componentMeta;
