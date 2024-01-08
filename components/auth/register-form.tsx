"use client";

import * as zod from "zod";
import { useState, useTransition } from "react";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { RegisterSchema } from "@/schemas";
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-errors";
import { FormSuccess } from "@/components/form-success";
import { register } from "@/actions/register";

export const RegisterForm = () => {
   const [error, setError] = useState<string | undefined>("");
   const [success, setSuccess] = useState<string | undefined>("");
   const [isPending, startTransition] = useTransition();

   const form = useForm<zod.infer<typeof RegisterSchema>>({ resolver: zodResolver(RegisterSchema),
   defaultValues: { name: "", email: "", password: "", },
   });

   const onSubmit = (values: zod.infer<typeof RegisterSchema>) => {
      setError("");
      setSuccess("");

      startTransition(() => {
         register(values)
            .then ((data) => {
               setError(data.error);
               setSuccess(data.success);
            })
      });
   };

   return (
      <CardWrapper
         headerLabel="Let's create a new profiel!"
         backButtonLabel="Already have an account? Login."
         backButtonHref="/auth/login"
         showSocial
      >
         <Form {...form}>
            <form
               onSubmit={form.handleSubmit(onSubmit)}
               className="space-y-6"
            >
               <div className="space-y-4">
                  <FormField
                     control={form.control}
                     name="name"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>Name</FormLabel>
                           <FormControl>
                              <Input
                              {...field}
                              disabled={isPending}
                              type="name"
                              placeholder="John Doe"
                              />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name="email"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>Email</FormLabel>
                           <FormControl>
                              <Input
                              {...field}
                              disabled={isPending}
                              type="email"
                              placeholder="john.doe@example.com"
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
                              <Input
                              {...field}
                              disabled={isPending}
                              type="password"
                              placeholder="******"
                              />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
               </div>
               <FormError message={error} />
               <FormSuccess message={success} />
               <Button
                  disabled={isPending}
                  type="submit"
                  className="w-full"
               >
                  Register
               </Button>
            </form>
         </Form>
      </CardWrapper>
   );
};