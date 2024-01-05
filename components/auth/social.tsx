"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-separator";

export const Social = () => {
   return (
      <div className="flex flex-col w-full items-center gap-y-3">
         <div className="flex w-full items-center justify-center gap-x-3">
         <Separator className="h-[1px] w-full bg-slate-200" />
         <p className="text-sm">or</p>
         <Separator className="h-[1px] w-full bg-slate-200" />
         </div>
         <Button
            size="lg"
            className="flex w-full"
            variant="outline"
            onClick={() => {}}
         >
            <FcGoogle
               className="h-5 w-5"
            />
            <p className="pl-2">Login with Google</p>
         </Button>
         <Button
            size="lg"
            className="flex w-full"
            variant="outline"
            onClick={() => {}}
         >
            <FaGithub
               className="h-5 w-5"
            />
            <p className="pl-2">Login with GitHub</p>
         </Button>
      </div>
   );
};