import React from "react";
import { AiOutlineCheck, AiOutlineUpload } from "react-icons/ai";
import { BsFolder } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import TextInput from "./TextInput";

export default function SecondForm({ nextStep, prevStep, values, handleChange }) {
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
              Expiry date of the open cover agreement
            </p>
            <div className="w-full">
              <TextInput
                value={values.expiryDate}
                onChange={handleChange("expiryDate")}
                type="date"
                require={true}
              />
            </div>
          </div>
          <div>
            <p className="mb-2 text-base text-gray-600">
              Sum insured
            </p>
            <div className="w-full">
              <TextInput
                value={values.sumInsured}
                onChange={handleChange("sumInsured")}
                type="text"
                require={true}
              />
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-4 my-4">
          <div>
            <p className="mb-2 text-base text-gray-600">
              Extimated anual shipping
            </p>
            <div className="w-full">
              <TextInput
                value={values.estimatedAnnualShipment}
                onChange={handleChange("estimatedAnnualShipment")}
                type="text"
                require={true}
              />
            </div>
          </div>
          <div>
            <p className="mb-2 text-base text-gray-600">
              Conveyance (ship, aeroplane, etc)
            </p>
            <div className="w-full">
              <TextInput
                value={values.conveyance}
                onChange={handleChange("conveyance")}
                type="text"
                require={true}
              />
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-4 my-4">
          <div>
            <p className="mb-2 text-base text-gray-600">
              Voyages (Sea, Air)
            </p>
            <div className="w-full">
              <TextInput
                value={values.voyages}
                onChange={handleChange("voyages")}
                type="text"
                require={true}
              />
            </div>
          </div>
          <div>
            <p className="mb-2 text-base text-gray-600">
              Interested party
            </p>
            <div className="w-full">
              <TextInput
                value={values.interestedParty}
                onChange={handleChange("interestedParty")}
                type="email"
              />
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-4 my-4">
          <div>
            <p className="mb-2 text-base text-gray-600">
              Has there been loss as of today?
            </p>
            <div className="w-full">
              <TextInput
                value={values.lossOfToday}
                onChange={handleChange("lossOfToday")}
                type="text"
                require={true}
              />
            </div>
          </div>
          <div>
            <p className="mb-2 text-base text-gray-600">
              Commercial invoice number
            </p>
            <div className="w-full">
              <TextInput
                value={values.commercialInvoiceNumber}
                onChange={handleChange("commercialInvoiceNumber")}
                type="text"
                require={true}
              />
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-4 my-4">
          <div>
            <p className="mb-2 text-base text-gray-600">
              Bill of loading number
            </p>
            <div className="w-full">
              <TextInput
                value={values.billLoadingNumber}
                onChange={handleChange("billLoadingNumber")}
                type="text"
                require={true}
              />
            </div>
          </div>
          <div>
            <p className="mb-2 text-base text-gray-600">
              Vessel of flight name
            </p>
            <div className="w-full">
              <TextInput
                value={values.vesselName}
                onChange={handleChange("vesselName")}
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
          next
        </button>
      </div>
    </div>
  );
}
