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
import { AlertTriangle, CheckCircle } from "@/constants/icons";

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
          onBlur={handleBlur}
          errors={errors}
          touched={touched}
        />

        <span
          className={cn(
            "ml-2.5 mt-2 hidden text-xs",
            touched?.["confirm_password"] && "row-flex-start gap-1.5",
          )}
        >
          {errors?.["confirm_password"] && touched?.["confirm_password"] ? (
            <>
              <AlertTriangle size={16} className="error-text" />
              <span className="error-text">{errors?.["confirm_password"]}</span>
            </>
          ) : (
            !errors?.["confirm_password"] &&
            touched?.["confirm_password"] && (
              <>
                <CheckCircle size={16} className="success-text" />
                <span className="success-text">Password Matched</span>
              </>
            )
          )}
        </span>
      </div>
    </FormWrapper>
  );
}

export default Password;
