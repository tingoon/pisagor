# Pisagor React Component Registry

Index for `@pisagor/react`, `@pisagor/react-form`, `@pisagor/react-charts`.

Use this skill only for **react**. Sibling skills: `vue`, `astro`.

## Overlays & Popups
- **AlertDialog** (`alert-dialog`) — Interrupts the user with a focused confirmation before a destructive or irreversible action proceeds. `./references/primitives/alert-dialog.md`
- **Command** (`command`) — Offers a searchable command palette for jumping to actions, pages, or settings from the keyboard. `./references/primitives/command.md`
- **ContextMenu** (`context-menu`) — Opens a menu of actions at the pointer so users can act on an item in its surrounding context. `./references/primitives/context-menu.md`
- **Dialog** (`dialog`) — Focuses attention on a task or decision in a modal layer above the current page. `./references/primitives/dialog.md`
- **Drawer** (`drawer`) — Slides a panel over the page for secondary tasks or details without leaving the current context. `./references/primitives/drawer.md`
- **DropdownMenu** (`dropdown-menu`) — Opens a dropdown list of actions or destinations from a trigger for navigation and contextual commands. `./references/primitives/dropdown-menu.md`
- **FloatingPanel** (`floating-panel`) — Presents draggable, resizable content in a floating window for tools or inspectors. `./references/primitives/floating-panel.md`
- **HoverCard** (`hover-card`) — Reveals richer preview content when the user pauses over a trigger, without opening a full overlay. `./references/primitives/hover-card.md`
- **Menu** (`menu`) — Always-visible list of navigation links or actions. For popup menus opened from a trigger, use Dropdown Menu. `./references/primitives/menu.md`
- **Popover** (`popover`) — Anchors extra content to a trigger for compact forms, menus, or details without a full modal. `./references/primitives/popover.md`
- **Sheet** (`sheet`) — Slides a panel in from the edge of the screen for secondary tasks on mobile and desktop. `./references/primitives/sheet.md`
- **Tooltip** (`tooltip`) — Explains a control or label on hover or focus with a short message that does not block interaction. `./references/primitives/tooltip.md`

## Selection & Input
- **Autocomplete** (`autocomplete`) — Helps users pick one option from a long list by typing to filter suggestions as they go. `./references/primitives/autocomplete.md`
- **Calendar** (`calendar`) — Lets users browse dates and pick a day, month, or range on a familiar calendar grid. `./references/primitives/calendar.md`
- **Checkbox** (`checkbox`) — Lets users turn an individual option on or off, alone or as part of a multi-select list. `./references/primitives/checkbox.md`
- **ColorPicker** (`color-picker`) — Lets users choose a color visually and fine-tune it with sliders or numeric inputs. `./references/primitives/color-picker.md`
- **Combobox** (`combobox`) — Internal selection engine that combines search with a filterable list. Prefer Select, Autocomplete, or Listbox in application code. `./references/primitives/combobox.md`
- **DatePicker** (`date-picker`) — Lets users pick a date or range from a calendar inside a field or popover. `./references/primitives/date-picker.md`
- **Editable** (`editable`) — Turns static text into inline editing so users can update a value where it is shown. `./references/primitives/editable.md`
- **Field** (`field`) — Wraps a form control with label, description, and error text so inputs are easier to understand and fix. `./references/primitives/field.md`
- **FileInput** (`file-input`) — Captures one or more files from the user with native file-picker styling aligned to Input. `./references/primitives/file-input.md`
- **FileUpload** (`file-upload`) — Lets users choose files to upload with drag-and-drop or a file picker and shows upload progress. `./references/primitives/file-upload.md`
- **Input** (`input`) — Captures a single line of text from the user for names, search terms, and other short values. `./references/primitives/input.md`
- **InputGroup** (`input-group`) — Combines inputs with icons, buttons, or labels in one control so related actions stay together. `./references/primitives/input-group.md`
- **InputOtp** (`input-otp`) — Collects one-time passcodes as separate digits so users can enter and review verification codes. `./references/primitives/input-otp.md`
- **Listbox** (`listbox`) — Lets users choose one or more options from a scrollable list with clear selection states. `./references/primitives/listbox.md`
- **NumberInput** (`number-input`) — Captures numeric values with optional steppers and validation for quantities and settings. `./references/primitives/number-input.md`
- **PasswordInput** (`password-input`) — Collects passwords with a show-hide control so users can enter credentials securely and verify them. `./references/primitives/password-input.md`
- **RadioGroup** (`radio-group`) — Lets users pick exactly one option from a small set of related choices. `./references/primitives/radio-group.md`
- **Rating** (`rating`) — Collects or displays a star-style score so users can rate or review at a glance. `./references/primitives/rating.md`
- **SegmentGroup** (`segment-group`) — Switches between a few related views or modes with segmented controls that show the current choice. `./references/primitives/segment-group.md`
- **Select** (`select`) — Lets users choose one option from a dropdown list when screen space for all choices is limited. `./references/primitives/select.md`
- **SignaturePad** (`signature-pad`) — Captures a handwritten signature on a canvas for approvals and forms. `./references/primitives/signature-pad.md`
- **Slider** (`slider`) — Lets users pick a value along a track by dragging a thumb, optionally with labeled steps. `./references/primitives/slider.md`
- **Switch** (`switch`) — Toggles a setting on or off with immediate visual feedback. `./references/primitives/switch.md`
- **TagsInput** (`tags-input`) — Lets users add and remove multiple tags or chips as they build a list of values. `./references/primitives/tags-input.md`
- **Textarea** (`textarea`) — Captures longer text such as messages, notes, and descriptions over multiple lines. `./references/primitives/textarea.md`
- **Toggle** (`toggle`) — Stays pressed or released to turn a single option on or off, similar to a checkbox styled as a button. `./references/primitives/toggle.md`
- **ToggleGroup** (`toggle-group`) — Lets users choose one or more pressed states from a row of related toggle buttons. `./references/primitives/toggle-group.md`

## Layout & Navigation
- **Accordion** (`accordion`) — Lets users expand and collapse sections of content so they can scan headings and open only what they need. `./references/primitives/accordion.md`
- **ActionBar** (`action-bar`) — Surfaces bulk actions when one or more items are selected, keeping primary tools close without cluttering the page. `./references/primitives/action-bar.md`
- **AppShell** (`app-shell`) — Multi-region application shell with draggable side panels and an optional inspector for dashboard layouts. `./references/primitives/app-shell.md`
- **BottomNavigation** (`bottom-navigation`) — Gives mobile users quick access to the main sections of an app from a bar fixed to the bottom of the screen. `./references/primitives/bottom-navigation.md`
- **Breadcrumb** (`breadcrumb`) — Shows where the user is within a hierarchy and lets them jump back to earlier levels. `./references/primitives/breadcrumb.md`
- **Carousel** (`carousel`) — Steps through a set of slides or images so users can browse one item at a time without leaving the page. `./references/primitives/carousel.md`
- **Collapsible** (`collapsible`) — Hides and reveals a section of content behind a trigger so users can keep dense pages manageable. `./references/primitives/collapsible.md`
- **Navbar** (`navbar`) — Top application bar with brand, navigation, and action slots. Pair with Sidebar for dashboard layouts. `./references/primitives/navbar.md`
- **NavigationMenu** (`navigation-menu`) — Displays a horizontal set of navigation links so users can move between top-level sections. `./references/primitives/navigation-menu.md`
- **Pagination** (`pagination`) — Moves through long lists or result sets page by page with previous, next, and numbered links. `./references/primitives/pagination.md`
- **Resizable** (`resizable`) — Splits space between panels with draggable handles so users can adjust layout to their needs. `./references/primitives/resizable.md`
- **ScrollArea** (`scroll-area`) — Scrolls overflow content with styled scrollbars and optional fade edges that match the surrounding interface. `./references/primitives/scroll-area.md`
- **Sidebar** (`sidebar`) — Provides a collapsible application sidebar with keyboard shortcut, mobile sheet fallback, and nested menu primitives. `./references/primitives/sidebar.md`
- **Steps** (`steps`) — Guides users through a multi-step flow and shows which stage they are on. `./references/primitives/steps.md`
- **Tabs** (`tabs`) — Organizes related content into panels that users switch between without leaving the page. `./references/primitives/tabs.md`
- **Toolbar** (`toolbar`) — Organizes a section heading on the left and related actions on the right for list and page headers. `./references/primitives/toolbar.md`
- **Tour** (`tour`) — Walks new users through key parts of the interface step by step with guided highlights. `./references/primitives/tour.md`
- **TreeView** (`tree-view`) — Browses nested folders or categories in an expandable tree for files, navigation, and hierarchies. `./references/primitives/tree-view.md`

## Content & Display
- **Announcement** (`announcement`) — Draws attention to a short product or marketing message without blocking the rest of the interface. `./references/primitives/announcement.md`
- **AspectRatio** (`aspect-ratio`) — Keeps media and embedded content at a consistent width-to-height ratio as the layout changes. `./references/primitives/aspect-ratio.md`
- **Avatar** (`avatar`) — Shows who a user is in the interface — usually a profile photo, or initials or an icon when there is no image or it has not loaded yet. `./references/primitives/avatar.md`
- **Badge** (`badge`) — Labels content with a compact status, category, or count so users can scan it quickly. `./references/primitives/badge.md`
- **Card** (`card`) — Groups related content and actions into a contained surface that people can scan and compare. `./references/primitives/card.md`
- **ClientOnly** (`client-only`) — Renders content only in the browser so server output stays stable when a feature depends on client APIs. `./references/primitives/client-only.md`
- **DataList** (`data-list`) — Presents label-value pairs in a readable list for summaries, metadata, and detail views. `./references/primitives/data-list.md`
- **DownloadTrigger** (`download-trigger`) — Starts a file download when activated so users can save content without navigating away. `./references/primitives/download-trigger.md`
- **EmptyState** (`empty-state`) — Shows a centered placeholder when a view has no data and offers the next relevant actions. `./references/primitives/empty-state.md`
- **File** (`file`) — Represents a file such as an uploaded attachment or downloadable document with its name and metadata. `./references/primitives/file.md`
- **Format** (`format`) — Formats numbers, bytes, and relative times for display so values read naturally in the user locale. `./references/primitives/format.md`
- **Frame** (`frame`) — Embeds external content in a framed viewport with a consistent chrome around it. `./references/primitives/frame.md`
- **Highlight** (`highlight`) — Emphasizes matching words inside text so search results and queries are easier to spot. `./references/primitives/highlight.md`
- **ImageCropper** (`image-cropper`) — Lets users crop and adjust an image selection before saving or uploading it. `./references/primitives/image-cropper.md`
- **Item** (`item`) — Lays out a row of media, title, description, and actions for lists, menus, and pickers. `./references/primitives/item.md`
- **JsonTreeView** (`json-tree-view`) — Explores nested JSON as an expandable tree so structured data is easier to inspect. `./references/primitives/json-tree-view.md`
- **Kbd** (`kbd`) — Displays keyboard shortcuts in a monospace badge so users know which keys to press. `./references/primitives/kbd.md`
- **LinkBox** (`link-box`) — Makes an entire card or tile clickable while keeping nested buttons usable underneath. `./references/primitives/link-box.md`
- **Marquee** (`marquee`) — Scrolls content horizontally in a continuous loop for logos, quotes, or promotional strips. `./references/primitives/marquee.md`
- **Presence** (`presence`) — Animates elements in and out of the tree so enter and exit transitions feel smooth. `./references/primitives/presence.md`
- **Prose** (`prose`) — Styles long-form written content with readable typography for articles, docs, and markdown. `./references/primitives/prose.md`
- **QrCode** (`qr-code`) — Displays a scannable QR code so users can open links or share data with a phone camera. `./references/primitives/qr-code.md`
- **Scrollspy** (`scrollspy`) — Highlights navigation links to show which section is currently visible while scrolling. `./references/primitives/scrollspy.md`
- **Separator** (`separator`) — Visually divides sections of content so grouped information is easier to scan. `./references/primitives/separator.md`
- **Sortable** (`sortable`) — Lets users reorder a list by dragging items or moving them with Alt and arrow keys. `./references/primitives/sortable.md`
- **Stat** (`stat`) — Displays a metric with supporting context so users can quickly scan performance and changes. `./references/primitives/stat.md`
- **Surface** (`surface`) — Provides a semantic background layer for grouped content such as cards and panels, with automatic elevation for nested sections. `./references/primitives/surface.md`
- **Swap** (`swap`) — Swaps between two pieces of content with a transition, such as play and pause icons. `./references/primitives/swap.md`
- **Table** (`table`) — Presents rows and columns of data in a structured grid for comparison and scanning. `./references/primitives/table.md`
- **Timeline** (`timeline`) — Shows a sequence of events or milestones so users can follow progress over time. `./references/primitives/timeline.md`
- **VisuallyHidden** (`visually-hidden`) — Hides text from the screen while keeping it available to screen readers and other assistive technology. `./references/primitives/visually-hidden.md`

## Feedback & Status
- **Alert** (`alert`) — Shows a brief message that helps users notice important information — such as updates, warnings, or errors — with an optional title, icon, and actions. `./references/primitives/alert.md`
- **CircularProgress** (`circular-progress`) — Shows how far along a task is on a circular track, including indeterminate loading when the duration is unknown. `./references/primitives/circular-progress.md`
- **CircularSlider** (`circular-slider`) — Lets users choose a value by dragging around a circular control instead of a straight track. `./references/primitives/circular-slider.md`
- **Progress** (`progress`) — Shows how complete a task is along a track, including indeterminate loading when progress is unknown. `./references/primitives/progress.md`
- **Skeleton** (`skeleton`) — Placeholder shapes that pulse while content loads so layouts feel stable instead of empty. `./references/primitives/skeleton.md`
- **Spinner** (`spinner`) — Shows that something is loading when the wait time is short and a progress bar is not needed. `./references/primitives/spinner.md`
- **Status** (`status`) — Signals state with a small colored dot so users can see availability or severity at a glance. `./references/primitives/status.md`
- **Timer** (`timer`) — Counts up or down through intervals so users can track elapsed time or remaining time. `./references/primitives/timer.md`
- **Toast** (`toast`) — Shows brief feedback messages that appear and dismiss automatically after an action completes. `./references/primitives/toast.md`

## Actions
- **Button** (`button`) — Triggers an action or navigation when clicked, with styles that reflect how important the action is. `./references/primitives/button.md`
- **ButtonGroup** (`button-group`) — Groups related actions together so users can compare choices and pick one option from a set. `./references/primitives/button-group.md`
- **Clipboard** (`clipboard`) — Copies text to the clipboard with clear feedback so users can reuse values without selecting manually. `./references/primitives/clipboard.md`

## Heavy modules
- **DataGrid** (`data-grid`) — Displays large or interactive tabular datasets with grid behaviors such as column resize and virtualization. Prefer Data Table for basic lists. `./references/primitives/data-grid.md`
- **DataTable** (`data-table`) — Renders basic tabular data with columns and rows. Prefer Data Grid when you need resize, virtualization, or advanced interactions. `./references/primitives/data-table.md`
- **PhoneInput** (`phone-input`) — Collects phone numbers with a searchable country selector and consistent international formatting. `./references/primitives/phone-input.md`
- **RichTextEditor** (`rich-text-editor`) — Lets users write and format rich text with common styles such as bold, lists, and emphasis. `./references/primitives/rich-text-editor.md`

## Form fields
- **AutocompleteField** (`autocomplete-field`) — Collects text with typeahead suggestions, label, and optional validation message. `./references/primitives/autocomplete-field.md`
- **CheckboxField** (`checkbox-field`) — Lets the user confirm a choice with a checkbox, label, and optional validation message. `./references/primitives/checkbox-field.md`
- **DateField** (`date-field`) — Picks a date from a calendar with label and optional validation message. `./references/primitives/date-field.md`
- **FileField** (`file-field`) — Uploads one or more files with a label and optional validation message. `./references/primitives/file-field.md`
- **NumberField** (`number-field`) — Adjusts a numeric value with steppers, label, and optional validation message. `./references/primitives/number-field.md`
- **OtpField** (`otp-field`) — Collects a one-time code across separate digit slots with optional validation message. `./references/primitives/otp-field.md`
- **PasswordField** (`password-field`) — Captures a password with show-hide control, label, and optional validation message. `./references/primitives/password-field.md`
- **PhoneField** (`phone-field`) — Collects a phone number with country selection and optional validation message. `./references/primitives/phone-field.md`
- **RadioGroupField** (`radio-group-field`) — Lets the user pick one option from a short list with an optional validation message. `./references/primitives/radio-group-field.md`
- **RichTextEditorField** (`rich-text-editor-field`) — Edits formatted text with a toolbar, label, and optional validation message. `./references/primitives/rich-text-editor-field.md`
- **SelectField** (`select-field`) — Lets the user pick one option from a dropdown with label and optional validation message. `./references/primitives/select-field.md`
- **SliderField** (`slider-field`) — Sets a value along a range with a label and optional validation message. `./references/primitives/slider-field.md`
- **SwitchField** (`switch-field`) — Toggles a setting on or off with a label and optional validation message. `./references/primitives/switch-field.md`
- **TagsInputField** (`tags-input-field`) — Adds and removes multiple tags with a label and optional validation message. `./references/primitives/tags-input-field.md`
- **TextField** (`text-field`) — Collects a single line of text with a label and optional validation message. `./references/primitives/text-field.md`
- **TextareaField** (`textarea-field`) — Collects multiple lines of text with a label and optional validation message. `./references/primitives/textarea-field.md`

## Charts
- **Chart** (`chart`) — Wraps charts in themed, accessible layout so data visualizations match the rest of the interface. `./references/primitives/chart.md`

## Utilities
- **Provider** (`provider`) — Wraps the app with locale, icons, and toasts. `./references/primitives/provider.md`
- **SkipNav** (`skip-nav`) — Lets keyboard users jump past repetitive navigation straight to the main content. `./references/primitives/skip-nav.md`

