import { headers } from "next/headers";
import { redirect } from "next/navigation";
import type { Metadata } from "next";
import LoginForm from "@/app/(auth)/_components/login-form";
import { auth } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Login",
};
export default async function LoginPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (session) {
    return redirect("/");
  }
  return <LoginForm />;
}
