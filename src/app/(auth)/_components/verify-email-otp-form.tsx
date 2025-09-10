"use client";

import { useState, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { authClient } from "@/lib/auth-client";

const VerifyEmailOTPFORM = () => {
  const params = useSearchParams();
  const router = useRouter();
  const [otp, setOtp] = useState("");
  const [otpPending, startOTPTransition] = useTransition();
  const email = params.get("email") as string;
  const isOtpComplete = otp.length === 6;

  /* <!-- verify otp handler  --> */
  const verifyOtp = async () => {
    startOTPTransition(async () => {
      await authClient.signIn.emailOtp({
        email,
        otp,
        fetchOptions: {
          onSuccess: () => {
            toast.success("Email Verified");
            router.push("/");
          },
          onError: () => {
            toast.error("Error verifying Email");
          },
        },
      });
    });
  };

  return (
    <CardContent className="space-y-6">
      <div className="flex flex-col items-center space-y-2">
        <InputOTP maxLength={6} value={otp} onChange={(value) => setOtp(value)}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <p className="text-muted-foreground text-sm">
          Enter the 6-digit code sent to your email
        </p>
      </div>
      <Button
        disabled={otpPending || !isOtpComplete}
        onClick={verifyOtp}
        className="w-full"
      >
        {otpPending ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            <span>Loading...</span>
          </>
        ) : (
          <span>Verify Account</span>
        )}
      </Button>
    </CardContent>
  );
};

export default VerifyEmailOTPFORM;
