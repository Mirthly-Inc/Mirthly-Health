"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "./ui/button";

export function NavigationMenuDemo() {
  const pathname = usePathname();
  const [NavigationLevel, setNavigationlevel] = React.useState(pathname);
  const handleclick = (href: string) => {
    setNavigationlevel(href);
  };
  return (
    <nav className="p-4 border-black border-b-2 flex items-center justify-between">
      <Link href="/dashboard" className="flex gap-4 items-center">
        <Image
          className="rounded-md"
          src="/mirthly.jpg"
          height={25}
          width={35}
          alt="mirthly logo"
        />
        <div className="font-medium text-xl">Mirthly Health</div>
      </Link>
      <div className="flex bg-slate-700 rounded-3xl">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/dashboard" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    NavigationLevel === "/dashboard" && "bg-white text-black"
                  )}
                  onClick={() => handleclick("/dashboard")}
                >
                  Dashboard
                </NavigationMenuLink>
              </Link>
              <Link href="/add" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    NavigationLevel === "/add" && "bg-white text-black"
                  )}
                  onClick={() => handleclick("/add")}
                >
                  Add Mood
                </NavigationMenuLink>
              </Link>

              <Link href="/tasks" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    NavigationLevel === "/tasks" && "bg-white text-black"
                  )}
                  onClick={() => handleclick("/tasks")}
                >
                  Tasks
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex gap-4 items-center">
        <Link href="/auth">
          <Button variant="ghost">Logout</Button>
        </Link>
      </div>
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
