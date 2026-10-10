## Import

```tsx
import { Sidebar } from "@pisagor/react";
```

## Anatomy

```tsx
<Sidebar.Provider>
  <Sidebar>
    <Sidebar.Header />
    <Sidebar.Content>
      <Sidebar.Group>
        <Sidebar.GroupLabel />
        <Sidebar.GroupContent>
          <Sidebar.Menu>
            <Sidebar.MenuItem>
              <Sidebar.MenuButton />
            </Sidebar.MenuItem>
          </Sidebar.Menu>
        </Sidebar.GroupContent>
      </Sidebar.Group>
    </Sidebar.Content>
    <Sidebar.Footer />
    <Sidebar.Rail />
  </Sidebar>
  <Sidebar.Inset>
    <Sidebar.Trigger />
  </Sidebar.Inset>
</Sidebar.Provider>
```

## Examples

### Default

Collapsible application navigation with desktop persistence and mobile sheet behavior.

:::example Default
