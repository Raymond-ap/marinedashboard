import React from "react";
import { AiOutlineUpload, AiOutlineCheck } from "react-icons/ai";
import { BsFolder } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import TextInput from "./TextInput";

export default function ThirdForm({ nextStep, prevStep, values, handleChange }) {
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
            <p className="mb-2 text-base text-gray-600">Voyage flight number</p>
            <div className="w-full">
              <TextInput
                value={values.voyageFlightNumber}
                onChange={handleChange("voyageFlightNumber")}
                type="text"
                require={true}
              />
            </div>
          </div>
          <div>
            <p className="mb-2 text-base text-gray-600">Vessel flag</p>
            <div className="w-full">
              <TextInput
                value={values.vessalFlag}
                onChange={handleChange("vessalFlag")}
                type="text"
                require={true}
              />
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-4 my-4">
          <div>
            <p className="mb-2 text-base text-gray-600">
                Code of country of importation. Available from getutilities endpoint.
            </p>
            <div className="w-full">
              <TextInput
                value={values.codeOfCountryOfImportation}
                onChange={handleChange("codeOfCountryOfImportation")}
                type="text"
                require={true}
              />
            </div>
          </div>
          <div>
            <p className="mb-2 text-base text-gray-600">
            Code of country of arrival. Available from the getutilities endpoint{" "}
            </p>
            <div className="w-full">
              <TextInput
                value={values.codeOfCountryOfArrival}
                onChange={handleChange("codeOfCountryOfArrival")}
                type="text"
                require={true}
              />
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-4 my-4">
          <div>
            <p className="mb-2 text-base text-gray-600">
                Code of the port of loading. Available from the getutilities endpoint.
            </p>
            <div className="w-full">
              <TextInput
                value={values.codeOfPortOfLoading}
                onChange={handleChange("codeOfPortOfLoading")}
                type="text"
                require={true}
              />
            </div>
          </div>
          <div>
            <p className="mb-2 text-base text-gray-600">
            Code of the port of arrival. Available from the getutilities endpoint{" "}
            </p>
            <div className="w-full">
              <TextInput
                value={values.codeOfPortOfArrival}
                onChange={handleChange("codeOfPortOfArrival")}
                type="text"
                require={true}
              />
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-4 my-4">
          <div>
            <p className="mb-2 text-base text-gray-600">
                The sailing/flight date
            </p>
            <div className="w-full">
              <TextInput
                value={values.sailingDate}
                onChange={handleChange("sailingDate")}
                type="text"
                require={true}
              />
            </div>
          </div>
          <div>
            <p className="mb-2 text-base text-gray-600">
            Estimated arrival date
            </p>
            <div className="w-full">
              <TextInput
                value={values.estimatedArrivalDate}
                onChange={handleChange("estimatedArrivalDate")}
                type="text"
                require={true}
              />
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-4 my-4">
          <div>
            <p className="mb-2 text-base text-gray-600">
                Code of country where transshipment starts
            </p>
            <div className="w-full">
              <TextInput
                value={values.codeOfCountryTransshipmentStart}
                onChange={handleChange("codeOfCountryTransshipmentStart")}
                type="text"
                require={true}
              />
            </div>
          </div>
          <div>
            <p className="mb-2 text-base text-gray-600">
            Code of country where transshipment ends
            </p>
            <div className="w-full">
              <TextInput
                value={values.codeOfCountryTransshipmentEnd}
                onChange={handleChange("codeOfCountryTransshipmentEnd")}
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
        <button onClick={handleNextStep} className="capitalize font-semibold bg-[#234092] px-5 py-2 rounded-lg text-white">
              next
            </button>
      </div>
    </div>
  );
}
