import { Fonts } from "@/components/fonts";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const cards = [
  {
    content: "This app has completely transformed how I manage my projects and deadlines.",
    name: "Olivia Martin",
    account: "@jamietechguru00",
    avatar: "/avatars/01.png",
    avatarFallback: "OM",
  },
  {
    content: "Our team’s productivity has skyrocketed since we started using this tool.",
    name: "Alex Rivera",
    account: "@alexinnovates",
    avatar: "/avatars/02.png",
    avatarFallback: "AR",
  },
  {
    content:
      "The ability to collaborate in real-time, combined with powerful project tracking features, has made it indispensable for our daily operations.",
    name: "Morgan Lee",
    account: "@morganleewhiz",
    avatar: "/avatars/03.png",
    avatarFallback: "ML",
  },
  {
    content: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    name: "Casey Jordan",
    account: "@caseyj",
    avatar: "/avatars/04.png",
    avatarFallback: "CJ",
  },
  {
    content:
      "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    name: "Taylor Kim",
    account: "@taykimm",
    avatar: "/avatars/05.png",
    avatarFallback: "TK",
  },

  {
    content: "The customizability and integration capabilities of this app are top-notch.",
    name: "Riley Smith",
    account: "@rileysmith1",
    avatar: "/avatars/06.png",
    avatarFallback: "RS",
  },
  {
    content:
      "Adopting this app for our team has streamlined our project management and improved communication across the board. ",
    name: "Jordan Patels",
    account: "@jpatelsdesign",
    avatar: "/avatars/07.png",
    avatarFallback: "JP",
  },
  {
    content: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    name: "Sam Dawson",
    account: "@dawsontechtips",
    avatar: "/avatars/08.png",
    avatarFallback: "SD",
  },
  {
    content: " Its user-friendly interface and robust features support our diverse needs. ",
    name: "Casey Harper",
    account: "@casey09",
    avatar: "/avatars/09.png",
    avatarFallback: "SD",
  },
];

export function Testimonials() {
  return (
    <div className="flex flex-col gap-16 items-center justify-center">
      <Fonts.h2>We have worked with hundreds of amazing people</Fonts.h2>
      <div className="w-full flex flex-row justify-center gap-4">
        {[0, 1, 2].map((index) => (
          <div className="flex-col items-center justify-center flex-wrap space-y-5" key={index}>
            {cards.slice(index * 3, index * 3 + 3).map((card, index) => (
              <Card className="w-[350px] gap-2 shadow-lg" key={index}>
                <CardContent className="p-10">
                  <Fonts.bodyMedium>{card.content}</Fonts.bodyMedium>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center gap-4 mt-2">
                    <Avatar className="hidden h-9 w-9 sm:flex">
                      <AvatarImage src={card.avatar} alt="Avatar" />
                      <AvatarFallback>{card.avatarFallback}</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                      <p className="text-sm font-medium leading-none">{card.name}</p>
                      <p className="text-sm text-muted-foreground">{card.account}</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
