/**
 * Built-in English defaults for every library UI message. `Provider` `messages`
 * are merged over these, so any subset can be overridden.
 */
export const defaultMessages = {
  "actionBar.close": "Close",
  "appShell.toggle.end": "Toggle end region",
  "appShell.toggle.start": "Toggle start region",
  "bottomNavigation.label": "Main navigation",
  "breadcrumb.label": "Breadcrumb",
  "breadcrumb.more": "More pages",
  "calendar.nextMonth": "Next month",
  "calendar.previousMonth": "Previous month",
  "calendar.today": "Today",
  "carousel.next": "Next",
  "carousel.pause": "Pause autoplay",
  "carousel.play": "Start autoplay",
  "carousel.previous": "Previous",
  "carousel.progress": "Slide {current} of {total}",
  "clipboard.copy": "Copy to clipboard",
  "colorPicker.clearColor": "Clear color",
  "colorPicker.eyeDropper": "Pick a color from the screen",
  "combobox.clear": "Clear",
  "combobox.empty": "No results found. Try a different search.",
  "combobox.toggle": "Toggle",
  "command.description": "Search for a command to run...",
  "command.empty": "No results found. Try a different search.",
  "command.placeholder": "Type a command or search...",
  "command.title": "Command Palette",
  "dataGrid.empty": "No results. Try a different search or clear filters.",
  "dataGrid.resizeColumn": "Resize column",
  "dataTable.empty": "No results. Try a different search or clear filters.",
  "datePicker.clear": "Clear",
  "datePicker.openCalendar": "Open calendar",
  "dialog.close": "Close",
  "fileInput.browse": "Choose file",
  "fileInput.placeholder": "No file chosen",
  "fileUpload.error.FILE_EXISTS": "File already added.",
  "fileUpload.error.FILE_INVALID": "File is invalid.",
  "fileUpload.error.FILE_INVALID_TYPE": "File type is not accepted.",
  "fileUpload.error.FILE_TOO_LARGE": "File is too large.",
  "fileUpload.error.FILE_TOO_SMALL": "File is too small.",
  "fileUpload.error.TOO_MANY_FILES": "Too many files.",
  "fileUpload.removeFile": "Remove file",
  "floatingPanel.maximize": "Maximize",
  "floatingPanel.minimize": "Minimize",
  "floatingPanel.restore": "Restore",
  "inputClearButton.clear": "Clear",
  "listbox.empty": "No items.",
  "menu.label": "Menu",
  "navbar.label": "Main",
  "navigationMenu.label": "Main",
  "numberInput.decrement": "Decrement",
  "numberInput.increment": "Increment",
  "passwordInput.clear": "Clear",
  "passwordInput.togglePasswordVisibility": "Toggle password visibility",
  "phoneInput.empty": "No country found. Try a different search.",
  "phoneInput.search": "Search country...",
  "phoneInput.selectCountry": "Select country",
  "popover.close": "Close",
  "resizable.resize": "Resize",
  "richTextEditor.bold": "Bold",
  "richTextEditor.bulletList": "Bullet list",
  "richTextEditor.italic": "Italic",
  "richTextEditor.label": "Rich text editor",
  "richTextEditor.orderedList": "Ordered list",
  "richTextEditor.strikethrough": "Strikethrough",
  "select.clear": "Clear selected value(s)",
  "sheet.close": "Close",
  "sidebar.description": "Displays the mobile sidebar.",
  "sidebar.title": "Sidebar",
  "sidebar.toggle": "Toggle sidebar",
  "signaturePad.clearSignature": "Clear signature",
  "skipNav.label": "Skip to content",
  "sortable.dragHandle": "Drag to reorder",
  "sortable.moved": "Moved to position {position} of {total}",
  "spinner.loading": "Loading",
  "stat.trend.down": "Decrease",
  "stat.trend.neutral": "No change",
  "stat.trend.up": "Increase",
  "tagsInput.clear": "Clear",
  "tagsInput.clearAllTags": "Clear all tags",
  "tagsInput.removeTag": "Remove tag",
  "timer.days": "days",
  "timer.hours": "hours",
  "timer.minutes": "minutes",
  "timer.pause": "Pause",
  "timer.reset": "Reset",
  "timer.restart": "Restart",
  "timer.resume": "Resume",
  "timer.seconds": "seconds",
  "timer.start": "Start",
  "toast.close": "Close",
  "tour.close": "Close",
} as const;

/** Every message key the library looks up. */
export type MessageKey = keyof typeof defaultMessages;

/** Partial UI message overrides, merged over the English defaults. */
export type Messages = Partial<Record<MessageKey, string>>;

/** Text direction of a locale. */
export type LocaleDir = "ltr" | "rtl";

/**
 * Message lookup returned as `useLocale().m`. Returns `override` when it is not
 * `null`/`undefined`, otherwise the resolved message for `key`.
 */
export interface MessageLookup {
  (key: MessageKey): string;
  <T>(key: MessageKey, override: T): NonNullable<T> | string;
}

/** Locale settings accepted by `Provider` and `Provider.Locale`. */
export interface LocaleConfig {
  /** BCP 47 locale for Ark components (date / number formatting). */
  locale?: string;
  /** Text direction. Derived from `locale` when omitted. */
  dir?: LocaleDir;
  /** Partial UI message overrides merged over the parent `Provider`. */
  messages?: Messages;
}

/** Resolved locale context returned by `useLocale()`. */
export interface LocaleContextValue {
  /** BCP 47 locale. Defaults to `en-US`. */
  locale: string;
  /** Text direction, derived from `locale` unless explicitly given. */
  dir: LocaleDir;
  /** Every UI message: English defaults merged with `Provider` overrides. */
  messages: Record<MessageKey, string>;
  /** Look up a message, preferring `override` when it is set. */
  m: MessageLookup;
}

const RTL_SCRIPTS = new Set([
  "Adlm",
  "Arab",
  "Armi",
  "Avst",
  "Hebr",
  "Mand",
  "Mend",
  "Nkoo",
  "Rohg",
  "Samr",
  "Syrc",
  "Thaa",
]);

const RTL_LANGS = new Set([
  "ae",
  "ar",
  "arc",
  "bcc",
  "bqi",
  "ckb",
  "dv",
  "fa",
  "glk",
  "he",
  "ku",
  "mzn",
  "nqo",
  "pnb",
  "ps",
  "sd",
  "ug",
  "ur",
  "yi",
]);

/** Text direction of a BCP 47 locale (same rules as Ark's `LocaleProvider`). */
export function getLocaleDir(locale: string): LocaleDir {
  try {
    const script = new Intl.Locale(locale).maximize().script;
    if (script) return RTL_SCRIPTS.has(script) ? "rtl" : "ltr";
  } catch {
    // Invalid tag or no Intl.Locale: fall back to the language subtag.
  }
  return RTL_LANGS.has(locale.split(/[-_]/)[0]?.toLowerCase() ?? "")
    ? "rtl"
    : "ltr";
}

/** Bind a message lookup to a fully resolved message record. */
export function createMessageLookup(
  messages: Record<MessageKey, string>,
): MessageLookup {
  return ((key: MessageKey, override?: unknown) =>
    override ?? messages[key]) as MessageLookup;
}

/**
 * Resolve a locale context from `config` merged over `parent` (or the English
 * defaults). A new `locale` without `dir` re-derives the direction.
 */
export function resolveLocale(
  config: LocaleConfig = {},
  parent?: LocaleContextValue,
): LocaleContextValue {
  const locale = config.locale ?? parent?.locale ?? "en-US";
  const dir =
    config.dir ??
    (config.locale == null && parent ? parent.dir : getLocaleDir(locale));
  const overrides: Messages = {};
  for (const [key, value] of Object.entries(config.messages ?? {})) {
    if (value != null) overrides[key as MessageKey] = value;
  }
  const messages = {
    ...(parent?.messages ?? defaultMessages),
    ...overrides,
  } as Record<MessageKey, string>;
  return { dir, locale, m: createMessageLookup(messages), messages };
}

/** Default locale context: `en-US`, `ltr`, English messages. */
export const defaultLocale: LocaleContextValue = resolveLocale();

/** Replace `{name}` placeholders in a message. */
export function formatMessage(
  message: string,
  values: Record<string, string | number>,
): string {
  return message.replace(/\{(\w+)\}/g, (match, name: string) =>
    name in values ? String(values[name]) : match,
  );
}

/** Animation settings shared through `Provider` `motion`. */
export interface MotionConfig {
  /**
   * When true, collapses animation and transition durations (e.g. e2e and unit
   * tests). Defaults to `false`.
   */
  disabled: boolean;
}

/** Default `Provider` motion settings. */
export const defaultMotion: MotionConfig = { disabled: false };

/** Resolved value returned by `useProviderValue()`. */
export interface ProviderContextValue {
  locale: LocaleContextValue;
  motion: MotionConfig;
}

/** Presence + resolved defaults shared with nested Providers. */
export type ProviderConfig = ProviderContextValue;

export const defaultProviderConfig: ProviderConfig = {
  locale: defaultLocale,
  motion: defaultMotion,
};

/** Build the `useProviderValue()` value, filling in defaults. */
export function resolveProviderValue(
  locale: LocaleContextValue | undefined,
  motion: MotionConfig | undefined,
): ProviderContextValue {
  return { locale: locale ?? defaultLocale, motion: motion ?? defaultMotion };
}
