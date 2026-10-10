## Import

```tsx
import { Tour } from "@pisagor/solid";
```

## Anatomy

```tsx
<Tour>
  <Tour.Trigger />
  <Tour.Content>
    <Tour.Header>
      <Tour.ProgressText />
      <Tour.Title />
      <Tour.Description />
    </Tour.Header>
    <Tour.Footer>
      <Tour.PreviousStep />
      <Tour.NextStep />
    </Tour.Footer>
  </Tour.Content>
</Tour>
```

## Examples

### Default

Walk through key UI with guided highlight steps.

:::example Default

### Progress

Show how far through the tour the user has gone.

:::example Progress

### Step Types

Use different step presentations for varied teaching moments.

:::example StepTypes

### Async

Load or advance steps asynchronously when targets appear later.

:::example Async

### Events

Hook step lifecycle events to analytics or custom logic.

:::example Events

### Keyboard Navigation

Move between steps with the keyboard.

:::example KeyboardNavigation

### Skip

Let users exit the tour without finishing every step.

:::example Skip

### Wait For Click

Pause until the user clicks a target before continuing.

:::example WaitForClick

### Wait For Element

Wait until a target exists in the DOM before highlighting it.

:::example WaitForElement

### Wait For Input

Wait for input in a field before advancing.

:::example WaitForInput

## Customization

### Class names

Pass `className` for a one-off change to a single element.

Override spacing when the default does not fit the surrounding layout.

:::example CustomSpacing

### Custom recipe

Extend `tourRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
