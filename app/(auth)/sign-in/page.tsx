import AuthBanner from "@/components/auth/AuthBanner";
import SignInForm from "@/components/auth/SignInForm";
import React from "react";

const SignInPage = () => {
  return (
    <div className="w-full h-full flex items-center justify-between gap-0">
      <AuthBanner />
      <SignInForm />
    </div>
  );
};

export default SignInPage;
