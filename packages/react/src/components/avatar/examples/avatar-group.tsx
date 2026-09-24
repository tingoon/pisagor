import { AvatarGroup } from "..";

const users = [
  {
    fallback: "JD",
    handle: "jane.doe@example.com",
    name: "Jane Doe",
    src: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    fallback: "JD",
    handle: "john.doe@example.com",
    name: "John Doe",
    src: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    fallback: "JD",
    handle: "jane.doe@example.com",
    name: "Jane Doe",
    src: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    fallback: "JD",
    handle: "john.doe@example.com",
    name: "John Doe",
    src: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

export function Group() {
  return <AvatarGroup max={4} users={users} />;
}
