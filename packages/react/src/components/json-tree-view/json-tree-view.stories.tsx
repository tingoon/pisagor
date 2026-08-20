import { JsonTreeView } from "@pisagor/react";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: JsonTreeView,
  parameters: {
    docs: {
      api: "closed",
      checklist: {
        accessibleColor: true,
        definedBehaviors: true,
        definedOptions: true,
        interactiveStates: true,
        keyboardInteractions: true,
        platformScales: true,
      },
      description: {
        component:
          "Explores nested JSON as an expandable tree so structured data is easier to inspect.",
      },
      taxonomy: "pattern",
    },
  },
  title: "Components/Data Display/JSON Tree View",
});

export const Default = meta.story({
  args: {
    data: defaultData(),
    defaultExpandedDepth: 1,
  },
});

export const DataTypes = meta.story({
  args: {
    data: dataTypesData(),
    defaultExpandedDepth: 2,
  },
});

export const ExpandDepth = meta.story({
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <p className="mb-2 font-medium text-foreground text-sm">
          defaultExpandedDepth={0} (all collapsed)
        </p>
        <JsonTreeView data={expandDepthData()} defaultExpandedDepth={0} />
      </div>
      <div>
        <p className="mb-2 font-medium text-foreground text-sm">defaultExpandedDepth={2}</p>
        <JsonTreeView data={expandDepthData()} defaultExpandedDepth={2} />
      </div>
    </div>
  ),
});

export const MapSet = meta.story({
  args: {
    data: mapSetData(),
    defaultExpandedDepth: 1,
  },
});

function defaultData() {
  return {
    address: {
      city: "Anytown",
      state: "CA",
      street: "123 Main St",
      zip: "12345",
    },
    age: 30,
    email: "john.doe@example.com",
    name: "John Doe",
  };
}

function dataTypesData() {
  return {
    address: {
      city: "Anytown",
      coordinates: { lat: 37.7749, lng: -122.4194 },
      state: "CA",
      street: "123 Main St",
      zip: 12_345,
    },
    age: 30,
    avatar: null,
    balance: 1234.56,
    createdAt: new Date("2024-01-15T14:22:00.000Z"),
    description: undefined,
    email: "john.doe@example.com",
    isActive: true,
    isVerified: false,
    lastLogin: new Date("2024-01-12T00:00:00.000Z"),
    name: "John Doe",
    score: -42,
    scores: [95, 87, 92, 78, 100],
    tags: ["pattern", "data-display"],
  };
}

function mapSetData() {
  return {
    preferences: new Map([
      ["theme", "dark"],
      ["language", "en"],
      ["notifications", "enabled"],
    ]),
    visitedPages: new Set(["/home", "/profile", "/settings"]),
  };
}

function expandDepthData() {
  return {
    user: {
      profile: {
        name: "Jane Doe",
        settings: {
          notifications: true,
          theme: "dark",
        },
      },
    },
  };
}
