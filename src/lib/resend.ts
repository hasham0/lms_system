import { Resend } from "resend";
import { env } from "@/lib/env";

const resend = new Resend(env.RESET_API_KEY);

export default resend;
