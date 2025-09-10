import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import VerifyEmailOTPFORM from "../_components/verify-email-otp-form";

export default function VerifyEmail() {
  return (
    <Card className="mx-auto w-full">
      <CardHeader className="text-center">
        <CardTitle>Please check your email</CardTitle>
        <CardDescription>
          We have sent a verification email code to your email address. Please
          open the email and paste the code below
        </CardDescription>
      </CardHeader>
      <VerifyEmailOTPFORM />
    </Card>
  );
}
