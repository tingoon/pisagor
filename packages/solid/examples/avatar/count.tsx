import { Avatar, AvatarGroup } from "@pisagor/solid";

const users = [
  {
    fallback: "JD",
    name: "Jane Doe",
    src: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    fallback: "JD",
    name: "John Doe",
    src: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    fallback: "JD",
    name: "Jane Doe",
    src: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    fallback: "JD",
    name: "John Doe",
    src: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

export function Count() {
  return (
    <AvatarGroup.Root>
      {users.map((user) => (
        <Avatar alt={user.name} fallback={user.fallback} src={user.src} />
      ))}
      <AvatarGroup.Count>+5</AvatarGroup.Count>
    </AvatarGroup.Root>
  );
}
