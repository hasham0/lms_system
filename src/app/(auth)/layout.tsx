import type { ReactNode } from "react";

type Props = { children: ReactNode };

export default function AuthLayout({ children }: Props) {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center">
      <div className="flex w-full max-w-sm flex-col gap-6">{children}</div>
    </div>
  );
}
