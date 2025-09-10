"use client";

import { ChangeEvent, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Chrome, GithubIcon, Loader2, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { authClient } from "@/lib/auth-client";

const LoginForm = () => {
  const router = useRouter();
  const [githubPending, startGithubTransition] = useTransition();
  const [googlePending, startGoogleTransition] = useTransition();
  const [email, setEmail] = useState("");
  const [emailPending, startEmailTransition] = useTransition();

  /* <!-- Social Login Handler --> */
  const signInWithSocialAccount = async (provider: "github" | "google") => {
    await authClient.signIn.social({
      provider,
      callbackURL: "/",
      fetchOptions: {
        onSuccess: () => {
          toast.success(
            `Signed in with ${provider}, you will be redirected...`
          );
        },
        onError: (error) => {
          toast.error(error.error.message);
        },
      },
    });
  };

  /* <!-- Email Login Handler --> */
  const signWithEmail = () => {
    startEmailTransition(async () => {
      await authClient.emailOtp.sendVerificationOtp({
        email,
        type: "sign-in",
        fetchOptions: {
          onSuccess: () => {
            toast.success(`Signed in with email, you will be redirected...`);
            router.push(`/verify-email?email=${email}`);
          },
          onError: () => {
            toast.error("Error while signing in with email");
          },
        },
      });
    });
  };

  return (
    <Card>
      {/* Header section */}
      <CardHeader>
        <CardTitle className="text-xl">Welcome back!</CardTitle>
        <CardDescription>
          Login with your GitHub, Google or Email Account
        </CardDescription>
      </CardHeader>

      {/* Content section */}
      <CardContent>
        {/* Social login buttons */}
        <div className="flex flex-col gap-2">
          <Button
            variant="outline"
            className="flex w-full items-center justify-center gap-2"
            onClick={() =>
              startGithubTransition(() => signInWithSocialAccount("github"))
            }
          >
            {githubPending ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                <span>Loading...</span>
              </>
            ) : (
              <>
                <GithubIcon className="size-4" />
                Sign In with GitHub
              </>
            )}
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              startGoogleTransition(() => signInWithSocialAccount("google"))
            }
            className="flex w-full items-center justify-center gap-2"
          >
            {googlePending ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                <span>Loading...</span>
              </>
            ) : (
              <>
                <Chrome className="size-4" />
                Sign In with Google
              </>
            )}
          </Button>
        </div>

        {/* Divider */}
        <div className="my-4 flex items-center">
          <Separator className="flex-1" />
          <span className="text-muted-foreground px-2 text-sm">
            Or continue with
          </span>
          <Separator className="flex-1" />
        </div>

        {/* Email login form */}
        <form className="grid gap-3">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="joe@gmail.com"
              value={email}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setEmail(event.target.value)
              }
            />
          </div>
          <Button type="submit" disabled={emailPending} onClick={signWithEmail}>
            {emailPending ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                <span>Loading...</span>
              </>
            ) : (
              <>
                <Send className="size-4" />
                Continue with Email
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
