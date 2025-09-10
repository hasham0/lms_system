"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ThemeToggle } from "@/components/themes/theme-toggle";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

export default function Home() {
  const { data: session } = authClient.useSession();
  const router = useRouter();
  const signOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("Signed out successfully");
          router.push("/");
        },
      },
    });
  };
  return (
    <>
      <ThemeToggle />

      {session ? (
        <>
          <p>Session: {JSON.stringify(session)}</p>
          <p>User :{JSON.stringify(session?.user)}</p>
          <Button onClick={signOut}>Logout</Button>
        </>
      ) : (
        <Button onClick={() => router.push("/login")}>Login</Button>
      )}
    </>
  );
}
