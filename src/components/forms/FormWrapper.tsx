import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../CustomButton";

interface FormWrapperProps {
  children: ReactNode;
  buttonLabel: string;
  isSubmitting?: boolean;
  containerStyles?: string;
  onSubmit?: () => void;
}

function FormWrapper({
  children,
  buttonLabel,
  isSubmitting,
  containerStyles,
  onSubmit,
}: FormWrapperProps) {
  return (
    <div className={cn("mt-8 w-full max-w-lg", containerStyles)}>
      <form
        onSubmit={onSubmit}
        className="flex-column flex-1 gap-2.5 space-y-3"
      >
        {children}

        <Button
          type="submit"
          title={isSubmitting ? "Submitting..." : buttonLabel}
          className={cn("!mt-8 !w-max !px-14 max-sm:!mx-auto md:mt-4")}
          disabled={isSubmitting}
          isLoading={isSubmitting}
        />
      </form>
    </div>
  );
}

export default FormWrapper;
