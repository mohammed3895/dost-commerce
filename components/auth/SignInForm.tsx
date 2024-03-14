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
import prisma from "@/lib/prisma";

const formSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .max(32),
});

const SignInForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // submit handler
  async function onSubmit(values: z.infer<typeof formSchema>) {
    await prisma.user.findUnique({ where: { email: values.email } });
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-28">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
        Dost<span className="text-primary">Commerce</span>
      </h1>
      <div className="w-full  px-28 mt-10 flex flex-col items-start justify-center">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 w-full shadow-lg p-8 rounded-lg"
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
                    <Input placeholder="Ex: john@example.com" {...field} />
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
                    <Input placeholder="********" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Submit
            </Button>
            <h3 className="text-center text-muted-foreground w-full">
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
