import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: {
    default: "Authentication",
    template: "%s | Authentication",
  },
};
const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center px-4">
      {/* Back Button */}
      <Link
        href="/"
        className={
          buttonVariants({ variant: "outline" }) +
          " absolute top-4 left-4 flex items-center gap-2"
        }
      >
        <ArrowLeft className="size-4" />
        Back
      </Link>

      {/* Wrapper */}
      <div className="flex w-full max-w-sm flex-col gap-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 self-center font-medium"
        >
          <Image
            src="/assets/Logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full bg-white p-1"
          />
          <span className="text-lg font-semibold">Modern LMS</span>
        </Link>
        {children}
        {/* terms and policy */}
        <div className="text-balance text-center text-xs text-muted-foreground">
          By clicking continue, you agree to our&nbsp;
          <span className="hover:text-primary hover:underline">
            Term of Service
          </span>
          &nbsp;and&nbsp;
          <span className="hover:text-primary hover:underline">
            Privacy Policy
          </span>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
