## Import

```ts
import { TagsInput } from "@pisagor/vue";
```

## Anatomy

```vue
<TagsInput>
  <TagsInput.Context>
    {({ value }) => value.map((tag, index) => <TagsInput.Item />)}
  </TagsInput.Context>
</TagsInput>
```

## Examples

### Variants

Choose field emphasis to match surrounding inputs.

:::example Variants

### Sizes

Match size to form density.

:::example Sizes

### With Combobox

Suggest tags from a list while still allowing custom entry.

:::example WithCombobox

### Controlled

Drive the tag list from the parent when form state lives above.

:::example Controlled

### Controlled Input Value

Drive the text being typed from the parent.

:::example ControlledInputValue

### Disabled

Show that tags cannot change.

:::example Disabled

### Invalid

Surface a validation error for the tags field.

:::example Invalid

### Max Tags

Cap how many tags can be added.

:::example MaxTags

### Max With Overflow

Handle overflow when users hit the tag limit.

:::example MaxWithOverflow

### Max Length

Limit characters per tag so values stay short.

:::example MaxLength

### Validation

Reject invalid tags and explain why.

:::example Validation

### Custom Delimiter

Split on custom characters when users paste or type delimited lists.

:::example CustomDelimiter

### Blur Behavior

Control what happens to typed text when the field loses focus.

:::example BlurBehavior

### Paste Behavior

Define how pasted text becomes one or many tags.

:::example PasteBehavior

### Disable Editing

Prevent editing existing tags when only add and remove should be allowed.

:::example DisableEditing

### Sanitize Value

Clean tag text before it is committed.

:::example SanitizeValue
