/**
 * Built-in English defaults for every library string. `Provider` `messages`
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

/** Partial overrides passed to `Provider` `messages`. */
export type ProviderMessages = Partial<Record<MessageKey, string>>;

/** Resolve `key` from `messages`, falling back to the English default. */
export function resolveMessage(
  messages: ProviderMessages | undefined,
  key: MessageKey,
): string {
  return messages?.[key] ?? defaultMessages[key];
}

/** Replace `{name}` placeholders in a message. */
export function formatMessage(
  message: string,
  values: Record<string, string | number>,
): string {
  return message.replace(/\{(\w+)\}/g, (match, name: string) =>
    name in values ? String(values[name]) : match,
  );
}
