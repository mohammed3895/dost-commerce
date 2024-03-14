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

const formSchema = z.object({
  firstname: z.string().email(),
  lastname: z.string().email(),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .max(32),
  confirmpassword: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .max(32),
});

const SignUpForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
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
            <h1 className="text-xl font-medium tracking-tight text-primary mb-4">
              Create new account
            </h1>
            <div className="flex items-center justify-between gap-6">
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Ex: John" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Ex: Doe" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
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
            <FormField
              control={form.control}
              name="confirmpassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="********" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Submit
            </Button>
            <h3 className="text-center text-muted-foreground w-full">
              Already have an account?{" "}
              <Link href="/sign-in" className="text-primary font-semibold">
                Sign in
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

export default SignUpForm;
