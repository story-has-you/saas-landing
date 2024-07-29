import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";

type UserAvatarProps = {
  lang: any;
  user: User | null;
  locale?: string | string[] | undefined;
};

export default function UserAvatar({ user, lang, locale }: UserAvatarProps) {
  const logout = async () => {
    await signOut({ callbackUrl: `/${locale}` });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarImage src={user?.image!} />
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>
          {user?.name}
          <div className="truncate text-sm text-gray-500">{user?.email}</div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logout}>{lang.logout}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
