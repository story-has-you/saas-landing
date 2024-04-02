import { Fonts } from "@/components/fonts";
import { Icons } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Pricing() {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <div className="flex flex-col gap-5">
        <Fonts.h2>Pricing</Fonts.h2>
        <Fonts.bodyLarge className="opacity-50">
          Free forever. Upgrade for unlimited tasks, better security, and exclusive features.
        </Fonts.bodyLarge>
      </div>
      <div className="flex flex-row items-end justify-center gap-6 w-full">
        {/* Free Plan */}
        <div className="flex flex-col justify-end items-start p-6 border rounded-lg shadow-lg gap-8 w-1/5">
          <h2 className="text-lg font-semibold opacity-50">Free</h2>
          <p className="text-5xl font-bold">
            $0<span className="text-sm opacity-50">/month</span>
          </p>
          <Button className="w-full">Get started for free</Button>
          <ul className="mt-5 space-y-5 text-start">
            <li className="flex flex-row justify-start items-center">
              <Icons.check className="w-5 h-5" />
              Up to 5 project members
            </li>
            <li className="flex flex-row justify-start items-center">
              <Icons.check className="w-5 h-5" />
              Unlimited tasks and projects
            </li>
            <li className="flex flex-row justify-start items-center">
              <Icons.check className="w-5 h-5" />2 GB storage
            </li>
            <li className="flex flex-row justify-start items-center">
              <Icons.check className="w-5 h-5" />
              Integrations
            </li>
            <li className="flex flex-row justify-start items-center">
              <Icons.check className="w-5 h-5" />
              Basic support
            </li>
          </ul>
        </div>

        {/* Pro Plan */}
        <div className="flex flex-col justify-end items-start p-6 border rounded-lg shadow-lg gap-8 bg-black text-white w-1/5">
          <div className="flex flex-row w-full justify-between items-center">
            <h2 className="text-lg font-semibold opacity-50">Pro</h2>
            <Badge variant={"secondary"} className="text-black">
              Most popular
            </Badge>
          </div>
          <p className="text-5xl font-bold">
            $9<span className="text-sm">/month</span>
          </p>
          <Button variant="outline" className="w-full bg-white text-black">
            Sign up now
          </Button>
          <ul className="mt-5 space-y-5 text-start">
            <li className="flex flex-row justify-start items-center">
              <Icons.check className="w-5 h-5" />
              Up to 50 project members
            </li>
            <li className="flex flex-row justify-start items-center">
              <Icons.check className="w-5 h-5" />
              Unlimited tasks and projects
            </li>
            <li className="flex flex-row justify-start items-center">
              <Icons.check className="w-5 h-5" />
              50 GB storage
            </li>
            <li className="flex flex-row justify-start items-center">
              <Icons.check className="w-5 h-5" />
              Integrations
            </li>
            <li className="flex flex-row justify-start items-center">
              <Icons.check className="w-5 h-5" />
              Priority support
            </li>
            <li className="flex flex-row justify-start items-center">
              <Icons.check className="w-5 h-5" />
              Advanced analytics
            </li>
            <li className="flex flex-row justify-start items-center">
              <Icons.check className="w-5 h-5" />
              Export capabilities
            </li>
          </ul>
        </div>

        {/* Business Plan */}
        <div className="flex flex-col justify-end items-start p-6 border rounded-lg shadow-lg gap-8 w-1/5">
          <h2 className="text-lg font-semibold opacity-50">Business</h2>
          <p className="text-5xl font-bold">
            $19<span className="text-sm">/month</span>
          </p>
          <Button className="w-full">Sign up now</Button>
          <ul className="mt-5 space-y-5 text-start">
            <li className="flex flex-row justify-start items-center">
              <Icons.check className="w-5 h-5" />
              Unlimited project members
            </li>
            <li className="flex flex-row justify-start items-center">
              <Icons.check className="w-5 h-5" />
              Unlimited tasks and projects
            </li>
            <li className="flex flex-row justify-start items-center">
              <Icons.check className="w-5 h-5" />
              200 GB storage
            </li>
            <li className="flex flex-row justify-start items-center">
              <Icons.check className="w-5 h-5" />
              Integrations
            </li>
            <li className="flex flex-row justify-start items-center">
              <Icons.check className="w-5 h-5" />
              Dedicated account manager
            </li>
            <li className="flex flex-row justify-start items-center">
              <Icons.check className="w-5 h-5" />
              Custom fields
            </li>
            <li className="flex flex-row justify-start items-center">
              <Icons.check className="w-5 h-5" />
              Advanced analytics
            </li>
            <li className="flex flex-row justify-start items-center">
              <Icons.check className="w-5 h-5" />
              Export capabilities
            </li>
            <li className="flex flex-row justify-start items-center">
              <Icons.check className="w-5 h-5" />
              API access
            </li>
            <li className="flex flex-row justify-start items-center">
              <Icons.check className="w-5 h-5" />
              Advanced security features
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
