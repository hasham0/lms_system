"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import UserDropdown from "@/app/(public)/_components/user-dropdown";
import { ThemeToggle } from "@/components/themes/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

type NavItemsTS = {
  name: string;
  href: string;
};
const navigationItems: Array<NavItemsTS> = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Courses",
    href: "/courses",
  },
  {
    name: "Dashboard",
    href: "/dashboard",
  },
];
const Navbar: FC = () => {
  const { data: session, isPending } = authClient.useSession();
  return (
    <header className="bg-background/95 backdrop-blur-[bacdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b">
      {/* logo */}
      <div className="container mx-auto flex min-h-16 items-center gap-6 px-4 md:px-6 lg:px-8">
        <Link href={"/"} className="flex items-center gap-2">
          <Image
            src={"/assets/Logo.png"}
            alt="Logo"
            width={0}
            height={0}
            className="size-8 rounded-full bg-white p-1"
          />
          <span className="text-lg font-semibold">Modern LMS</span>
        </Link>
        {/* desktop navigation */}
        <nav className="hidden md:flex md:flex-1 md:items-center md:justify-between">
          <div className="flex items-center space-x-2">
            {navigationItems.map((item, index: number) => (
              <Link
                key={index}
                href={item.href}
                className="hover:text-primary text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
          {/* user dropdown and theme toggle */}
          <div className="flex items-center gap-x-4">
            <ThemeToggle />
            {isPending ? null : session ? (
              <UserDropdown
                name={session.user.name}
                email={session.user.email}
                image={session.user.image || ""}
              />
            ) : (
              <>
                <Link
                  href={"/login"}
                  className={buttonVariants({ variant: "secondary" })}
                >
                  Login
                </Link>
                <Link href={"/login"} className={buttonVariants()}>
                  Get Started
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
