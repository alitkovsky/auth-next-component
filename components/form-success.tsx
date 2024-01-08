import { CheckIcon } from "@radix-ui/react-icons";

interface FormSuccessProps {
   message?: string;
};

export const FormSuccess = ({
   message,
}: FormSuccessProps) => {
   if (!message) return null;

   return (
      <div className="flex p-3 items-center gap-x-2 text-emerald-500 rounded-md bg-emerald-500/15">
         <CheckIcon className="h-5 w-5" />
         <p>{message}</p>
      </div>
   );
};