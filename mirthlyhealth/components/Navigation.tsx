'use client';

import * as React from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

export function NavigationMenuDemo() {
  const [NavigationLevel, setNavigationlevel] = React.useState(1);
  const handleclick = (index) => {
    setNavigationlevel(index);
  };
  return (
    <nav className='p-4 border-black border-2 flex items-center justify-between'>
      <div className=''>Mirthly Health</div>
      <div className='flex bg-slate-200 rounded-3xl'>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href='/dashboard' legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), {
                    'bg-black text-white': NavigationLevel === 1,
                  })}
                  onClick={() => handleclick(1)}
                >
                  Overview
                </NavigationMenuLink>
              </Link>
              <Link href='/add' legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), {
                    'bg-black text-white': NavigationLevel === 2,
                  })}
                  onClick={() => handleclick(2)}
                >
                  Add Mood
                </NavigationMenuLink>
              </Link>

              <Link href='/addiction' legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), {
                    'bg-black text-white': NavigationLevel === 3,
                  })}
                  onClick={() => handleclick(3)}
                >
                  Addiction Control
                </NavigationMenuLink>
              </Link>
              <Link href='/tasks' legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), {
                    'bg-black text-white': NavigationLevel === 4,
                  })}
                  onClick={() => handleclick(4)}
                >
                  Tasks
                </NavigationMenuLink>
              </Link>
              <Link href='/recommendations' legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), {
                    'bg-black text-white': NavigationLevel === 5,
                  })}
                  onClick={() => handleclick(5)}
                >
                  Recommendations
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className=''>Mirthly Health</div>
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
