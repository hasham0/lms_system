"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GithubIcon } from "lucide-react";

const LoginForm = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome back!</CardTitle>
        <CardDescription>
          Login With your Github Account or Google Accunt or Email Address
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button variant={"outline"} className="w-full">
          <GithubIcon className="size-4" />
          Sign In with Github
        </Button>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
