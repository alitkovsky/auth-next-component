import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface FormErrorProps {
   message?: string;
};

export const FormError = ({
   message,
}: FormErrorProps) => {
   if (!message) return null;

   return (
      <div className="flex p-3 items-center gap-x-2 text-destructive rounded-md bg-destructive/15">
         <ExclamationTriangleIcon className="h-5 w-5" />
         <p>{message}</p>
      </div>
   );
};