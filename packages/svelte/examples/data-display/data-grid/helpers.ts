export type User = {
  department: string;
  email: string;
  id: string;
  joinedAt: string;
  name: string;
  role: "Admin" | "Editor" | "Viewer";
  status: "active" | "inactive" | "invited";
};

const DEPARTMENTS = [
  "Engineering",
  "Design",
  "Marketing",
  "Sales",
  "Support",
] as const;
const FIRST_NAMES = [
  "Alice",
  "Bruno",
  "Clara",
  "David",
  "Elena",
  "Felix",
  "Grace",
  "Hugo",
  "Iris",
  "Jonas",
  "Kira",
  "Leo",
  "Maya",
  "Noah",
  "Olivia",
];
const ROLES: User["role"][] = ["Admin", "Editor", "Viewer"];
const STATUSES: User["status"][] = ["active", "inactive", "invited"];

export const allUsers: User[] = Array.from({ length: 48 }, (_, index) => ({
  department: DEPARTMENTS[index % DEPARTMENTS.length] ?? "Engineering",
  email: `user${index + 1}@example.com`,
  id: String(index + 1),
  joinedAt: new Date(
    2020 + (index % 5),
    index % 12,
    (index % 28) + 1,
  ).toISOString(),
  name: `${FIRST_NAMES[index % FIRST_NAMES.length] ?? "Alex"} ${String.fromCharCode(65 + (index % 26))}.`,
  role: ROLES[index % ROLES.length] ?? "Viewer",
  status: STATUSES[index % STATUSES.length] ?? "active",
}));

export const userColumns = [
  { accessorKey: "name", enableSorting: true, header: "Name" },
  { accessorKey: "email", enableSorting: true, header: "Email" },
  { accessorKey: "role", enableSorting: true, header: "Role" },
  { accessorKey: "department", header: "Department" },
  { accessorKey: "status", header: "Status" },
] as const;
