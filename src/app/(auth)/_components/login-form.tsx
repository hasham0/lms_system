"use client";

import { Chrome, GithubIcon } from "lucide-react";
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

const LoginForm = () => {
  return (
    <Card>
      {/* Header section */}
      <CardHeader>
        <CardTitle className="text-xl">Welcome back!</CardTitle>
        <CardDescription>
          Login with your GitHub account, Google account, or Email address
        </CardDescription>
      </CardHeader>

      {/* Content section */}
      <CardContent>
        {/* Social login buttons */}
        <div className="flex flex-col gap-2">
          <Button
            variant="outline"
            className="flex w-full items-center justify-center gap-2"
          >
            <GithubIcon className="size-4" />
            Sign In with GitHub
          </Button>
          <Button
            variant="outline"
            className="flex w-full items-center justify-center gap-2"
          >
            <Chrome className="size-4" />
            Sign In with Google
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
            <Input id="email" type="email" placeholder="joe@gmail.com" />
          </div>
          <Button type="submit">Continue with Email</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
