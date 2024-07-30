"use client";

import React, { useState } from "react";
import CustomFormField, {
  FormFieldType,
} from "@/components/forms/CustomFormField";
import FormWrapper from "@/components/forms/FormWrapper";
import { useToast } from "@/components/ui/use-toast";
import { InferType } from "yup";
import { useFormik } from "formik";
import { PasswordSchema } from "@/schema";
import { cn } from "@/lib/utils";
import { AlertTriangle } from "@/constants/icons";

function Password({ user }: { user?: any }) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const onSubmit = async (values: InferType<typeof PasswordSchema>) => {
    setIsLoading(true);
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      current_password: user?.currentPassword || "123456",
      new_password: "123456",
      confirm_password: "123456",
    },
    validationSchema: PasswordSchema,
    onSubmit,
  });

  return (
    <FormWrapper
      buttonLabel="Update"
      onSubmit={handleSubmit}
      isSubmitting={isLoading}
    >
      <CustomFormField
        fieldType={FormFieldType.INPUT}
        name="current_password"
        label="Current password"
        field={{
          value: values.current_password,
          type: "password",
        }}
        onChange={handleChange}
      />

      <CustomFormField
        fieldType={FormFieldType.INPUT}
        name="new_password"
        label="New Password"
        field={{ value: values.new_password, type: "password" }}
        onChange={handleChange}
      />

      <div className="relative w-full">
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          name="confirm_password"
          label="Confirm new password"
          field={{ value: values.confirm_password, type: "password" }}
          onChange={handleChange}
          errors={errors}
          touched={touched}
        />

        <span
          className={cn(
            "ml-3 mt-1.5 block text-base",
            errors?.["confirm_password"] && "row-flex-start",
          )}
        >
          <AlertTriangle size={16} className="text-red-500" />
          {/* {errors?.["confirm_password"]} */}
        </span>
      </div>
    </FormWrapper>
  );
}

export default Password;
