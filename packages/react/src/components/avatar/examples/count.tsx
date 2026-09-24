import { Avatar, AvatarGroup } from "..";

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
        <Avatar alt={user.name} fallback={user.fallback} key={user.src} src={user.src} />
      ))}
      <AvatarGroup.Count>+5</AvatarGroup.Count>
    </AvatarGroup.Root>
  );
}
