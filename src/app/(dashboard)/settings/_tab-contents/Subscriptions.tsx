"use client";

import CustomFormField, {
  FormFieldType,
} from "@/components/forms/CustomFormField";
import FormWrapper from "@/components/forms/FormWrapper";
import { PricingTabs } from "@/components/tabs/PricingTab";
import { useToast } from "@/components/ui/use-toast";
import { pricingTabIDs } from "@/constants";
import { useFormik } from "formik";
import { useState } from "react";

function Subscriptions() {
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState(pricingTabIDs[0]);
  const { toast } = useToast();

  const changeTab = (id: string) => {
    id && setActiveTab(id);
  };

  const onSubmit = async (values: any) => {
    setIsLoading(true);
  };

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      monthly_plan: "",
      daily_plaan: "120",
      fee: "5000",
    },
    validationSchema: null,
    onSubmit,
  });

  return (
    <div className="flex-column flex gap-8">
      <PricingTabs
        activeTab={activeTab}
        changeTab={changeTab}
        tabIDs={pricingTabIDs}
      />

      <FormWrapper
        buttonLabel="Update"
        onSubmit={handleSubmit}
        isSubmitting={isLoading}
        containerStyles="mt-4"
      >
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          name="monthly_plan"
          label="Plan Duration (Months)"
          field={{
            value: values.monthly_plan,
          }}
          onChange={handleChange}
        />

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          name="daily_plan"
          label="Plan Duration (Days)"
          field={{ value: values.daily_plaan }}
          onChange={handleChange}
        />

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          name="fee"
          label="Subscription Fee (N)"
          field={{ value: values.fee }}
          onChange={handleChange}
        />
      </FormWrapper>
    </div>
  );
}

export default Subscriptions;
