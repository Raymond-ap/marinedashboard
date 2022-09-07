import React from "react";
import { AiOutlineUpload } from "react-icons/ai";
import { BsFolder } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import TextInput from "./TextInput";

export default function FirstForm({ nextStep, values, handleChange }) {
  const handleNextStep = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="mx-auto lg:w-max p-2">
      <div className="my-5 flex items-center gap-1">
        <div className="border-2 border-[#234092] rounded-full p-1 ">
          <AiOutlineUpload className="text-[#234092] text-lg" />
        </div>
        <div className="w-64 h-0.5 rounded-full bg-gray-300" />
        <div className="border-2 border-gray-300 rounded-full p-1 ">
          <RiSendPlaneFill className="text-gray-300 text-lg" />
        </div>
        <div className="w-64 h-0.5 rounded-full bg-gray-300" />
        <div className="border-2 border-gray-300 rounded-full p-1 ">
          <BsFolder className="text-gray-300 text-lg" />
        </div>
        <div className="w-64 h-0.5 rounded-full bg-gray-300" />
        <div className="border-2 border-gray-300 rounded-full p-1 ">
          <BsFolder className="text-gray-300 text-lg" />
        </div>
      </div>

      <div className="bg-white p-3 rounded-md shadow-lg my-10">
        <div className="grid lg:grid-cols-2 gap-4 my-4">
          <div>
            <p className="mb-2 text-base text-gray-600">
              The currency of the policy
            </p>
            <div className="w-full">
              <TextInput
                value={values.currency}
                onChange={handleChange("currency")}
                type="text"
                require={true}
              />
            </div>
          </div>
          <div>
            <p className="mb-2 text-base text-gray-600">
              Name of Intermediary if any
            </p>
            <div className="w-full">
              <TextInput
                value={values.intermediaryName}
                onChange={handleChange("intermediaryName")}
                type="text"
                require={true}
              />
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-4 my-4">
          <div>
            <p className="mb-2 text-base text-gray-600">Customer type</p>
            <div className="w-full">
              <TextInput
                value={values.customerType}
                placeholder={"Individual or Business"}
                onChange={handleChange("customerType")}
                type="text"
                require={true}
              />
            </div>
          </div>
          <div>
            <p className="mb-2 text-base text-gray-600">Full customer name</p>
            <div className="w-full">
              <TextInput
                value={values.customerName}
                onChange={handleChange("customerName")}
                type="text"
                require={true}
              />
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-4 my-4">
          <div>
            <p className="mb-2 text-base text-gray-600">
              Phone number of customer
            </p>
            <div className="w-full">
              <TextInput
                value={values.customerPhoneNumber}
                onChange={handleChange("customerPhoneNumber")}
                type="text"
                require={true}
              />
            </div>
          </div>
          <div>
            <p className="mb-2 text-base text-gray-600">
              Email address of customer
            </p>
            <div className="w-full">
              <TextInput
                value={values.customerEmail}
                onChange={handleChange("customerEmail")}
                type="email"
              />
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-4 my-4">
          <div>
            <p className="mb-2 text-base text-gray-600">
              Business or residential address of customer
            </p>
            <div className="w-full">
              <TextInput
                value={values.customerAddress}
                onChange={handleChange("customerAddress")}
                type="text"
                require={true}
              />
            </div>
          </div>
          <div>
            <p className="mb-2 text-base text-gray-600">
              Ecowas card number of customer or individual
            </p>
            <div className="w-full">
              <TextInput
                value={values.ecowasCardNumber}
                onChange={handleChange("ecowasCardNumber")}
                type="text"
                require={true}
              />
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-4 my-4">
          <div>
            <p className="mb-2 text-base text-gray-600">
              TIN number of a business customer
            </p>
            <div className="w-full">
              <TextInput
                value={values.TINNumber}
                onChange={handleChange("TINNumber")}
                type="text"
                require={true}
              />
            </div>
          </div>
          <div>
            <p className="mb-2 text-base text-gray-600">
              Inception data of the open cover
            </p>
            <div className="w-full">
              <TextInput
                value={values.inceptionDate}
                onChange={handleChange("inceptionDate")}
                type="date"
                require={true}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between">
        <div />
        <button
          onClick={handleNextStep}
          className="capitalize font-semibold bg-[#234092] px-5 py-2 rounded-lg text-white"
        >
          next
        </button>
      </div>
    </div>
  );
}
