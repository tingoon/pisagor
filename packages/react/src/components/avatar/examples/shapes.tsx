import { Avatar } from "..";

export function Shapes() {
  return (
    <div className="flex flex-wrap gap-2">
      <Avatar
        alt="Jane Doe"
        fallback="JD"
        shape="square"
        src="https://randomuser.me/api/portraits/women/5.jpg"
      />
      <Avatar
        alt="John Doe"
        fallback="JD"
        shape="rounded"
        src="https://randomuser.me/api/portraits/men/12.jpg"
      />
      <Avatar
        alt="Jane Doe"
        fallback="JD"
        shape="circle"
        src="https://randomuser.me/api/portraits/women/44.jpg"
      />
    </div>
  );
}
