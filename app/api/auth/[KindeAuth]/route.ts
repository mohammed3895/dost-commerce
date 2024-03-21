import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextApiRequest } from "next";

export async function GET(
  request: NextApiRequest,
  { params }: { params: any }
) {
  const endpoint = params.KindeAuth;

  return handleAuth(request, endpoint);
}
