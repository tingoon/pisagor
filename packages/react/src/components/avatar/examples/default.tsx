import { Avatar } from "..";

export function Default() {
  return (
    <Avatar
      alt="Jane Doe"
      fallback="JD"
      src="https://randomuser.me/api/portraits/women/5.jpg"
    />
  );
}
