import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CourseForm from "@/app/(admin)/_components/course-form";
import { buttonVariants } from "@/components/ui/button";

export default function CourseCreationPage() {
  return (
    <>
      <div className="flex items-center gap-4">
        <Link
          href={"/admin-dashboard/courses"}
          className={buttonVariants({
            variant: "outline",
            size: "icon",
          })}
        >
          <ArrowLeft className="size-4" />
        </Link>
        <h1 className="text-2xl font-bold">Create Course</h1>
      </div>
      <CourseForm />
    </>
  );
}
