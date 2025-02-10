"use client";

import { Fonts } from "@/components/fonts";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import "@/styles/testimonials.css";
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
    <Card className="testimonial-card">
      <CardContent className="testimonial-content">
        <Fonts.bodyMedium>{content}</Fonts.bodyMedium>
      </CardContent>
      <CardFooter>
        <div className="testimonial-footer">
          <Avatar className="testimonial-avatar">
            <AvatarImage src={user.avatar} alt={`${user.name}'s avatar`} />
            <AvatarFallback>{user.avatarFallback}</AvatarFallback>
          </Avatar>
          <div className="testimonial-user-info">
            <p className="testimonial-user-name">{user.name}</p>
            <p className="testimonial-user-account">{user.account}</p>
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
    <div className="testimonial-column">
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
    <div className="testimonials-container">
      <div className="testimonials-header">
        <Fonts.h2>{t("title")}</Fonts.h2>
        <Fonts.bodyLarge className="testimonials-description">{t("description")}</Fonts.bodyLarge>
      </div>

      <div className="testimonials-grid">
        {[0, 1, 2].map((columnIndex) => (
          <TestimonialColumn key={columnIndex} testimonials={getColumnTestimonials(columnIndex)} startIndex={columnIndex * 3} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
