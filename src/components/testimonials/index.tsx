import { Fonts } from "@/components/fonts";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const users = [
  { name: "Olivia Martin", account: "@jamietechguru00", avatar: "/avatars/01.png", avatarFallback: "OM" },
  { name: "Alex Rivera", account: "@alexinnovates", avatar: "/avatars/02.png", avatarFallback: "AR" },
  { name: "Morgan Lee", account: "@morganleewhiz", avatar: "/avatars/03.png", avatarFallback: "ML" },
  { name: "Casey Jordan", account: "@caseyj", avatar: "/avatars/04.png", avatarFallback: "CJ" },
  { name: "Taylor Kim", account: "@taykimm", avatar: "/avatars/05.png", avatarFallback: "TK" },
  { name: "Riley Smith", account: "@rileysmith1", avatar: "/avatars/06.png", avatarFallback: "RS" },
  { name: "Jordan Patels", account: "@jpatelsdesign", avatar: "/avatars/07.png", avatarFallback: "JP" },
  { name: "Sam Dawson", account: "@dawsontechtips", avatar: "/avatars/08.png", avatarFallback: "SD" },
  { name: "Casey Harper", account: "@casey09", avatar: "/avatars/09.png", avatarFallback: "CH" },
];

export default function Testimonials({ lang }: { lang: any }) {
  return (
    <div className="flex flex-col gap-16 items-center justify-center">
      <div className="flex flex-col gap-5">
        <Fonts.h2>{lang.title}</Fonts.h2>
        <Fonts.bodyLarge className="opacity-50">{lang.description}</Fonts.bodyLarge>
      </div>
      <div className="w-full flex flex-row justify-center gap-4">
        {[0, 1, 2].map((columnIndex) => (
          <div className="flex-col items-center justify-center flex-wrap space-y-5" key={columnIndex}>
            {lang.cards.slice(columnIndex * 3, columnIndex * 3 + 3).map((content: any, index: number) => {
              const userIndex = columnIndex * 3 + index;
              const user = users[userIndex];
              return (
                <Card className="w-[350px] gap-2 shadow-lg" key={index}>
                  <CardContent className="p-10">
                    <Fonts.bodyMedium>{content}</Fonts.bodyMedium>
                  </CardContent>
                  <CardFooter>
                    <div className="flex items-center gap-4 mt-2">
                      {user ? (
                        <>
                          <Avatar className="hidden h-9 w-9 sm:flex">
                            <AvatarImage src={user.avatar} alt="Avatar" />
                            <AvatarFallback>{user.avatarFallback}</AvatarFallback>
                          </Avatar>
                          <div className="grid gap-1">
                            <p className="text-sm font-medium leading-none">{user.name}</p>
                            <p className="text-sm text-muted-foreground">{user.account}</p>
                          </div>
                        </>
                      ) : (
                        <div className="grid gap-1">
                          <p className="text-sm font-medium leading-none">Anonymous User</p>
                          <p className="text-sm text-muted-foreground">@anonymous</p>
                        </div>
                      )}
                    </div>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
