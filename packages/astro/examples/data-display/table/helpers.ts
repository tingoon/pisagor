export type WorkspaceUser = {
  email: string;
  id: string;
  name: string;
  role: string;
  status: "active" | "inactive" | "invited";
};

export const workspaceUsers: WorkspaceUser[] = [
  {
    email: "ada@example.com",
    id: "1",
    name: "Ada Lovelace",
    role: "Admin",
    status: "active",
  },
  {
    email: "grace@example.com",
    id: "2",
    name: "Grace Hopper",
    role: "Editor",
    status: "active",
  },
  {
    email: "alan@example.com",
    id: "3",
    name: "Alan Turing",
    role: "Viewer",
    status: "invited",
  },
  {
    email: "katherine@example.com",
    id: "4",
    name: "Katherine Johnson",
    role: "Editor",
    status: "inactive",
  },
];
