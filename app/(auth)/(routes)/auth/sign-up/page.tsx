import SignupForm from "@/components/forms/sign-up-form";
import Image from "next/image";
import Link from "next/link";
import signInImage from "@/assets/sign-in-image.svg";

const Signup = () => {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[400px] gap-6  px-4 py-4 rounded-md shadow-xl">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <p className="text-balance text-muted-foreground">
              Enter your name and email below to sign up to your account
            </p>
            <SignupForm />
          </div>

          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/auth/sign-in" className="underline">
              Login
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-sky-100 lg:block h-screen">
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
};

export default Signup;
