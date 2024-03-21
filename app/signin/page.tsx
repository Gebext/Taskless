"use client";

import React from "react";
import { SignIn } from "@clerk/nextjs";

const page = () => {
  return (
    <div>
      <SignIn></SignIn>
    </div>
  );
};

export default page;
