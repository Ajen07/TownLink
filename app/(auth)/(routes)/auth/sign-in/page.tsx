import SigninForm from "@/components/forms/sign-in-form";
import Image from "next/image";
import Link from "next/link";
import signInImage  from "@/assets/sign-in-image.svg";

export const description =
  "A login page with two columns. The first column has the login form with email and password. There's a Forgot your passwork link and a link to sign up if you do not have an account. The second column has a cover image.";

function Dashboard() {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[400px] gap-6  px-4 py-4 rounded-md shadow-xl">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
            <SigninForm />
          </div>

          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="#" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-sky-100 lg:block h-full">
        <Image
          src={signInImage}
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-3/4 dark:brightness-[0.2] dark:grayscale ml-auto mr-auto"
        />
      </div>
    </div>
  );
}

export default Dashboard;
