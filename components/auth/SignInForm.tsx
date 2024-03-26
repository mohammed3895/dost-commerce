"use client";
import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import BackToHome from "./BackToHome";
import { trpc } from "@/app/_trpc/client";
import { singinformSchema } from "@/lib/validations";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .max(32),
});

const SignInForm = () => {
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof singinformSchema>>({
    resolver: zodResolver(singinformSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { mutate, isPending, data } = trpc.signIn.useMutation({});

  // submit handler
  async function onSubmit(values: z.infer<typeof singinformSchema>) {
    try {
      mutate(values, {
        onSuccess: () => {
          toast({
            title: "Signed in",
            description: "You are now signed in, redirecting...",
            variant: "success",
          });

          router.push("/");
        },

        onError: (e) => {
          toast({
            title: "Failed to sign in",
            description: e.message,
            variant: "destructive",
          });
        },
      });
    } catch (error) {
      console.error(error);
      form.setError("email", {
        type: "manual",
        message: "An error occurred while signing in.",
      });
    }
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 md:p-8  bg-[url(https://images.unsplash.com/photo-1709480955041-274cfe798bb0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] !lg:bg-white lg:bg-transparent lg:bg-none">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
        Dost<span className="text-primary">Commerce</span>
      </h1>
      <div className="w-full max-w-2xl px-4  lg:px-16 mt-10 flex flex-col items-start justify-center">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 w-full shadow-lg p-8 rounded-lg bg-white"
          >
            <h1 className="text-xl font-medium tracking-tight text-primary">
              Signin to your account
            </h1>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Ex: john@example.com"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="********" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              {isPending ? (
                <span className="flex items-center justify-center gap-3">
                  <Loader2 className="w-4 h-4 animate-spin" /> Signing in
                </span>
              ) : (
                "Sign in"
              )}
            </Button>
            <h3 className="text-center text-muted-foreground w-full text-sm lg:text-base">
              Don&apos;t have an account?{" "}
              <Link href="/sign-up" className="text-primary font-semibold">
                Sign up
              </Link>
            </h3>
            <div className="w-3/4 mx-auto h-px bg-gray-50" />
            <BackToHome />
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SignInForm;
