import AuthBanner from "@/components/auth/AuthBanner";
import SignUpForm from "@/components/auth/SignUpForm";
import React from "react";

const SignUpPage = () => {
  return (
    <div className="w-full h-screen flex items-center justify-between gap-0">
      <AuthBanner />
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
