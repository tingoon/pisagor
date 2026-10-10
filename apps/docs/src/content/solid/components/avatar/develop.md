## Import

```tsx
import { Avatar } from "@pisagor/solid";
```

## Examples

### Default

The standard avatar for a single person.

:::example Default

### Sizes

Match avatar size to list density — smaller in dense rows, larger in profiles.

:::example Sizes

### Shapes

Choose round or squared geometry to match the surrounding visual language.

:::example Shapes

### Count

Show how many people are represented when listing everyone would take too much space.

:::example Count

### Fallbacks

Fall back to initials or an icon when no photo is available.

:::example Fallbacks

### Group

Overlap several avatars in a row for shared ownership or participants.

:::example Group

### Compound

Compose `AvatarGroup.Root` with `Avatar` children when each avatar needs its own props.

:::example Compound

## Customization

### Custom recipe

Extend `avatarRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
