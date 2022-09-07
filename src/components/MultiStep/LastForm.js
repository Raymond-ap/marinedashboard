import React from "react";
import { AiOutlineUpload, AiOutlineCheck } from "react-icons/ai";
import { BsFolder } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import TextInput from "./TextInput";

export default function LastForm({ nextStep, prevStep, values, handleChange }) {
  const handleNextStep = (e) => {
    e.preventDefault();
    nextStep();
  };

  const handlePrevStep = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <div className="mx-auto lg:w-max p-2">
      <div className="my-5 flex items-center gap-1">
        <div className="border-2 bg-[#234092] rounded-full p-2 ">
          <AiOutlineCheck className="text-white text-lg" />
        </div>
        <div className="w-64 h-0.5 rounded-full bg-[#234092]" />
        <div className="border-2 bg-[#234092] rounded-full p-2 ">
          <AiOutlineCheck className="text-white text-lg" />
        </div>
        <div className="w-64 h-0.5 rounded-full bg-[#234092]" />
        <div className="border-2 bg-[#234092] rounded-full p-2 ">
          <AiOutlineCheck className="text-white text-lg" />
        </div>
        <div className="w-64 h-0.5 rounded-full bg-[#234092]" />
        <div className="border-2 border-gray-300 rounded-full p-1 ">
          <BsFolder className="text-gray-300 text-lg" />
        </div>
      </div>

      <div className="bg-white p-3 rounded-md shadow-lg my-10">
        <div className="grid lg:grid-cols-2 gap-4 my-4">
          <div>
            <p className="mb-2 text-base text-gray-600">
              The location where transit starts. Eample Portor or Warehouse
            </p>
            <div className="w-full">
              <TextInput
                value={values.locationOfTransStart}
                onChange={handleChange("locationOfTransStart")}
                type="text"
                require={true}
              />
            </div>
          </div>
          <div>
            <p className="mb-2 text-base text-gray-600">
              The location where transit ends. Eample Portor or Warehouse
            </p>
            <div className="w-full">
              <TextInput
                value={values.locationOfTransEnd}
                onChange={handleChange("locationOfTransEnd")}
                type="text"
                require={true}
              />
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-4 my-4">
          <div>
            <p className="mb-2 text-base text-gray-600">
              Name of item on the invoice. Available from the getutilities
              endpoint
            </p>
            <div className="w-full">
              <TextInput
                value={values.nameOfItemOnInvoice}
                onChange={handleChange("nameOfItemOnInvoice")}
                type="text"
                require={true}
              />
            </div>
          </div>
          <div>
            <p className="mb-2 text-base text-gray-600">
              Name of package used. Available from the getutilities endpoint
            </p>
            <div className="w-full">
              <TextInput
                value={values.nameOfPackageUsed}
                onChange={handleChange("nameOfPackageUsed")}
                type="text"
                require={true}
              />
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-4 my-4">
          <div>
            <p className="mb-2 text-base text-gray-600">Cost of item</p>
            <div className="w-full">
              <TextInput
                value={values.costOfItem}
                onChange={handleChange("costOfItem")}
                type="text"
                require={true}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between">
        <button
          onClick={handlePrevStep}
          className="capitalize font-semibold bg-[#e41d21] px-5 py-2 rounded-lg text-white"
        >
          previous
        </button>
        <button
          onClick={handleNextStep}
          className="capitalize font-semibold bg-[#234092] px-5 py-2 rounded-lg text-white"
        >
          submit
        </button>
      </div>
    </div>
  );
}
