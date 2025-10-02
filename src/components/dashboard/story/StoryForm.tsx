"use client";
import { InputWithLabel } from "@/components/dashboard/basic/Input";
import { useState, ReactNode } from "react";

// ============================================
// REUSABLE MULTI-STEP FORM COMPONENTS
// ============================================

interface Step {
  title: string;
  component: ReactNode;
}

interface MultiStepFormProps {
  steps: Step[];
  onSubmit: (data: any) => void;
  formData: any;
  onFormDataChange: (data: any) => void;
}

function StepIndicator({
  steps,
  currentStep,
}: {
  steps: Step[];
  currentStep: number;
}) {
  return (
    <div className="flex justify-between mb-8 relative">
      {/* Progress Lines */}
      <div className="absolute top-5 left-0 right-0 h-1 flex items-center px-5">
        {steps.map(
          (_, index) =>
            index < steps.length - 1 && (
              <div
                key={index}
                className={`h-1 flex-1 mx-5 transition-all duration-300 ${
                  index < currentStep ? "brand" : "bg-gray-200"
                }`}
              />
            )
        )}
      </div>

      {/* Step Circles */}
      {steps.map((step, index) => (
        <div
          key={index}
          className="flex-1 flex flex-col items-center relative z-10"
        >
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
              index <= currentStep
                ? "brand text-white"
                : "bg-gray-200 text-gray-500"
            }`}
          >
            {index + 1}
          </div>
          <span
            className={`text-sm mt-2 ${
              index <= currentStep ? "textGrad font-medium" : "text-gray-400"
            }`}
          >
            {step.title}
          </span>
        </div>
      ))}
    </div>
  );
}

function MultiStepForm({
  steps,
  onSubmit,
  formData,
  onFormDataChange,
}: MultiStepFormProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <div className="rounded-xl shadow-xl p-8 w-full">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Registration Form
      </h2>

      <StepIndicator steps={steps} currentStep={currentStep} />

      {/* Form Container with Animation */}
      <div className="overflow-hidden relative" style={{ minHeight: "300px" }}>
        <div
          className="transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(${-currentStep * 100}%)`,
            display: "flex",
            width: `${steps.length * 100}%`,
          }}
        >
          {steps.map((step, index) => (
            <div key={index} className="w-full flex-shrink-0 px-1">
              {step.component}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <button
          onClick={handleBack}
          disabled={currentStep === 0}
          className={`px-6 py-2 text-white/80 borderBox rounded-lg font-medium transition-all ${
            currentStep === 0 ? "cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          Back
        </button>

        {currentStep < steps.length - 1 ? (
          <button
            onClick={handleNext}
            className="px-6 py-2 brand text-white rounded-lg font-medium hover:scale-105 hover:cursor-pointer transition-all"
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="px-6 py-2 brand text-white rounded-lg font-medium hover:bg-green-700 transition-all"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function FormField({
  label,
  name,
  type = "text",
  placeholder = "place",
  value,
  onChange,
}: FormFieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-white mb-2">
        {label}
      </label>
      <InputWithLabel
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className=""
        placeholder={placeholder}
      />
    </div>
  );
}

// ============================================
// EXAMPLE USAGE
// ============================================

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
}

export default function App() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    alert("Form submitted! Check console for data.");
  };

  const steps: Step[] = [
    {
      title: "Personal Info",
      component: (
        <div className="space-y-4">
          <FormField
            label="First Name"
            name="firstName"
            placeholder="John"
            value={formData.firstName}
            onChange={handleChange}
          />
          <FormField
            label="Last Name"
            name="lastName"
            placeholder="Doe"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
      ),
    },
    {
      title: "Contact",
      component: (
        <div className="space-y-4">
          <FormField
            label="Email"
            name="email"
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
          />
          <FormField
            label="Phone"
            name="phone"
            type="tel"
            placeholder="+1 234 567 8900"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      ),
    },
    {
      title: "Address",
      component: (
        <div className="space-y-4">
          <FormField
            label="Address"
            name="address"
            placeholder="123 Main St"
            value={formData.address}
            onChange={handleChange}
          />
          <FormField
            label="City"
            name="city"
            placeholder="New York"
            value={formData.city}
            onChange={handleChange}
          />
          <div className="grid grid-cols-2 gap-4">
            <FormField
              label="Country"
              name="country"
              placeholder="USA"
              value={formData.country}
              onChange={handleChange}
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="h-fit w-full flex items-center justify-center p-4">
      <MultiStepForm
        steps={steps}
        onSubmit={handleSubmit}
        formData={formData}
        onFormDataChange={setFormData}
      />
    </div>
  );
}
