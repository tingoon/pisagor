## Import

```ts
import { Steps } from "@pisagor/vue";
```

## Anatomy

```vue
<Steps>
  <Steps.List>
    <Steps.Item>
      <Steps.Trigger>
        <Steps.Indicator />
      </Steps.Trigger>
      <Steps.Separator />
    </Steps.Item>
  </Steps.List>
  <Steps.Content />
  <Steps.CompletedContent />
  <Steps.PrevTrigger />
  <Steps.NextTrigger />
</Steps>
```

## Examples

### Default

Show progress through a linear multi-step flow.

:::example Default

### Vertical

Use a vertical layout when the steps should read top to bottom.

:::example Vertical

### Title

Emphasize step titles for scannable wizard chrome.

:::example Title

### Description

Add step descriptions when titles alone are not enough.

:::example Description

### Icon

Lead steps with icons when symbols speed recognition.

:::example Icon

### Controlled

Manage state from the parent when other UI must stay in sync with this steps.

:::example Controlled

### Loading

Show a loading step while async work finishes before continuing.

:::example Loading
