import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) redirect("auth-callback?origin=dashboard");
  return <div>page</div>;
};

export default page;
