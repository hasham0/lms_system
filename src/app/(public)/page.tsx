import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import features from "@/utils/features";

export default function Home() {
  return (
    <>
      {/* hero section */}
      <section className="relative py-20">
        <div className="flex flex-col items-center space-y-8 text-center">
          <Badge variant={"outline"}>The Future of Online Education</Badge>
          <h1 className="text-4xl font-bold tracking-tighter md:text-6xl">
            Elevate your Learning Experience
          </h1>
          <p className="text-muted-foreground max-w-[700px] md:text-xl">
            Discover a new way to learn with our cutting-edge platform, designed
            to revolutionize your educational journey. Access high-quality
            courses anytime, anywhere.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/courses"
              className={buttonVariants({
                size: "lg",
              })}
            >
              Explore Courses
            </Link>
            <Link
              href="/login"
              className={buttonVariants({
                size: "lg",
                variant: "outline",
              })}
            >
              Sign In
            </Link>
          </div>
        </div>
      </section>
      {/* Features */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <Card key={index} className="transition-shadow hover:shadow-lg">
            <CardHeader>
              <div className="mb-4 text-4xl">{feature.icon}</div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </>
  );
}
