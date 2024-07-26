"use client";

import { Icons } from "@/components/icons";
import Login from "@/components/login";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { i18n, Locale } from "@/config/locale";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useState } from "react";

type NavigationProps = {
  lang: any;
  user: User | null;
};

const UserAvatar = ({ user, lang }: NavigationProps) => {
  const logout = async () => {
    await signOut();
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
};

export default function Navigation({ lang, user }: NavigationProps) {
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();
  const [langName] = useState<string>(i18n.languages.find((item) => item.lang === params.lang)?.language ?? i18n.defaultLocaleName);
  const handleLanguageChange = (locale: Locale) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    const newPath = segments.join("/");
    router.push(newPath);
  };
  return (
    <div className="flex flex-row justify-between items-center p-5 z-0">
      <Icons.logo className="w-5 h-5" />
      <div className="flex flex-row justify-center items-center overflow-hidden z-20 gap-5 rounded-none text-black">
        {lang.links.map((item: any) => (
          <div key={item}>
            <Link href={item.href} target="_blank" className="opacity-60">
              {item.text}
            </Link>
          </div>
        ))}

        <Select onValueChange={handleLanguageChange}>
          <SelectTrigger className="w-[130px]  border-gray-200 text-gray-800 hover:bg-white transition-colors duration-200 focus:ring-0 focus:ring-offset-0 focus:border-gray-300 focus:outline-none">
            <SelectValue placeholder={langName} />
          </SelectTrigger>
          <SelectContent className="bg-white border-gray-200 rounded-md overflow-hidden shadow-lg">
            {i18n.languages.map((item) => (
              <SelectItem
                key={item.lang}
                value={item.lang}
                className="text-gray-800 hover:bg-gray-100 focus:bg-gray-100 cursor-pointer transition-colors duration-200 focus:ring-0 focus:outline-none"
              >
                {item.language}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {user ? (
          <UserAvatar user={user} lang={lang} />
        ) : (
          <Dialog>
            <DialogTrigger asChild>
              <Button className="rounded-xl">{lang.buttonText}</Button>
            </DialogTrigger>
            <Login lang={lang.login} />
          </Dialog>
        )}
      </div>
    </div>
  );
}
