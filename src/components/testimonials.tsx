"use client";

import { Fonts } from "@/components/fonts";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useTranslations } from "next-intl";

interface TestimonialUser {
  name: string;
  account: string;
  avatar: string;
  avatarFallback: string;
}

interface TestimonialCardProps {
  content: string;
  user: TestimonialUser;
}

const TESTIMONIAL_USERS: TestimonialUser[] = [
  {
    name: "Olivia Martin",
    account: "@jamietechguru00",
    avatar: "/avatars/01.png",
    avatarFallback: "OM",
  },
  {
    name: "Alex Rivera",
    account: "@alexinnovates",
    avatar: "/avatars/02.png",
    avatarFallback: "AR",
  },
  {
    name: "Morgan Lee",
    account: "@morganleewhiz",
    avatar: "/avatars/03.png",
    avatarFallback: "ML",
  },
  {
    name: "Casey Jordan",
    account: "@caseyj",
    avatar: "/avatars/04.png",
    avatarFallback: "CJ",
  },
  {
    name: "Taylor Kim",
    account: "@taykimm",
    avatar: "/avatars/05.png",
    avatarFallback: "TK",
  },
  {
    name: "Riley Smith",
    account: "@rileysmith1",
    avatar: "/avatars/06.png",
    avatarFallback: "RS",
  },
  {
    name: "Jordan Patels",
    account: "@jpatelsdesign",
    avatar: "/avatars/07.png",
    avatarFallback: "JP",
  },
  {
    name: "Sam Dawson",
    account: "@dawsontechtips",
    avatar: "/avatars/08.png",
    avatarFallback: "SD",
  },
  {
    name: "Casey Harper",
    account: "@casey09",
    avatar: "/avatars/09.png",
    avatarFallback: "CH",
  },
];

const TestimonialCard: React.FC<TestimonialCardProps> = ({ content, user }) => {
  return (
    <Card className="w-[400px] gap-2 shadow-lg">
      <CardContent className="p-10">
        <Fonts.bodyMedium>{content}</Fonts.bodyMedium>
      </CardContent>
      <CardFooter>
        <div className="flex items-center gap-4 mt-2">
          <Avatar className="hidden h-9 w-9 sm:flex">
            <AvatarImage src={user.avatar} alt={`${user.name}'s avatar`} />
            <AvatarFallback>{user.avatarFallback}</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-sm font-medium leading-none">{user.name}</p>
            <p className="text-sm text-muted-foreground">{user.account}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

const TestimonialColumn: React.FC<{
  testimonials: string[];
  startIndex: number;
}> = ({ testimonials, startIndex }) => {
  const defaultUser: TestimonialUser = {
    name: "Anonymous User",
    account: "@anonymous",
    avatar: "",
    avatarFallback: "AU",
  };

  return (
    <div className="flex-col items-center justify-center flex-wrap space-y-5">
      {testimonials.map((content, index) => (
        <TestimonialCard key={startIndex + index} content={content} user={TESTIMONIAL_USERS[startIndex + index] ?? defaultUser} />
      ))}
    </div>
  );
};

const Testimonials: React.FC = () => {
  const t = useTranslations("testimonials");
  const testimonials = t.raw("cards") as string[];

  const getColumnTestimonials = (columnIndex: number) => {
    const start = columnIndex * 3;
    return testimonials.slice(start, start + 3);
  };

  return (
    <div className="w-full flex flex-col gap-16 items-center justify-center">
      <div className="flex flex-col gap-5">
        <Fonts.h2>{t("title")}</Fonts.h2>
        <Fonts.bodyLarge className="opacity-50 max-w-[700px]">{t("description")}</Fonts.bodyLarge>
      </div>

      <div className="w-full flex flex-row justify-center gap-4">
        {[0, 1, 2].map((columnIndex) => (
          <TestimonialColumn key={columnIndex} testimonials={getColumnTestimonials(columnIndex)} startIndex={columnIndex * 3} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
