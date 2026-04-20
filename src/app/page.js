import { Avatar, Badge, Button } from "@heroui/react";

const GREEN_AVATAR_URL = "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/green.jpg";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
        <p>Home Page</p>
        <Button>Hero Ui</Button>
        <div>
          <Badge.Anchor>
            <Avatar>
              <Avatar.Image src={GREEN_AVATAR_URL} />
              <Avatar.Fallback>JD</Avatar.Fallback>
            </Avatar>
            <Badge color="danger" size="sm">
              5
            </Badge>
          </Badge.Anchor>
        </div>
      </main>
    </div>
  );
}
