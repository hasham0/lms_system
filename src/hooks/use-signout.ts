"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";

function useSignOut() {
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
          toast.success("Signed out successfully");
        },

        onError: () => {
          toast.error("Error signing out");
        },
      },
    });
  };
  return handleLogout;
}

export default useSignOut;
