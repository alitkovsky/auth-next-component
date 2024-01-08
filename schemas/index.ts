import * as zod from "zod";

export const LoginSchema = zod.object({
   email: zod.string().email({
      message: "Email is required",
   }),
   password: zod.string().min(1, {
      message: "Password is required",
   }),
});

export const RegisterSchema = zod.object({
   name: zod.string().min(1, {
      message: "Name is required",
   }),
   email: zod.string().email({
      message: "Email is required",
   }),
   password: zod.string().min(8, {
      message: "Minimum 8 characters required",
   }),
});