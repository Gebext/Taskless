import React from "react";
import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import SignInImage from "../../public/signin.png";

const Page = () => {
  return (
    <div className="w-full md:w-10/12 lg:w-10/12 mx-auto my-24 lg:flex lg:flex-row-reverse">
      <div className="lg:w-6/12 flex justify-center">
        <SignIn />
      </div>
      <div className="mr-6 hidden lg:block">
        <h1 className="text-center font-bold text-3xl">Taskless</h1>
        <h2 className="text-center font-semibold text-xl">
          Simplifying Productivity, One Task at a Time.
        </h2>
        <Image src={SignInImage} alt="Sign in" />
      </div>
    </div>
  );
};

export default Page;
