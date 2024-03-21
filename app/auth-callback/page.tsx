"use client";
/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { trpc } from "../_trpc/client";
import { useToast } from "@/components/ui/use-toast";

const page = () => {
  const { toast } = useToast();
  const router = useRouter();
  const searcParams = useSearchParams();
  const origin = searcParams.get("origin") || "/";

  trpc.authCallback.useMutation({
    onSuccess: ({ success }) => {
      toast({
        title: "Login success",
      });
      if (success) router.push(origin ? `/${origin}` : "/");
    },
    onError: (e) => {
      if (e.data?.code === "UNAUTHORIZED") {
        toast({
          title: "Login failed",
          description: `Please try again or contact the administrator`,
        });
        router.push("/sign-in");
      }
    },
  });
  return <div>page</div>;
};

export default page;
