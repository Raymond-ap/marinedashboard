import React, { useState } from "react";
import OTPInput, { ResendOTP } from "otp-input-react";

function OTP() {
  const [close, setClose] = React.useState(true);
  const [OTPCode, setOTPCODE] = useState("");

  return (
    <div
      id="popup-modal"
      tabindex="-1"
      class={`${
        close && "hidden"
      } bg-black bg-opacity-80 grid items-center justify-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full`}
    >
      <div class="relative w-full max-w-md md:h-auto">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700 p-3">
          <h3 class="mb-5 text-lg font-bold border-b border-red-500 w-12 text-red-500">
            Login
          </h3>
          <button
            onClick={() => setClose(true)}
            type="button"
            class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-toggle="popup-modal"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
          <div class="p-6 text-center">
            <h3 class="text-sm font-normal text-gray-500">
              We have sent you a{" "}
              <span className="text-black capitalize font-bold">
                one time password
              </span>
              &nbsp;to your email
            </h3>
            <p class="mt-2 text-sm font-bold text-red-500">Please Enter OTP</p>
            <div className="items-center justify-center w-full grid mt-3">
              <OTPInput
                value={OTPCode}
                onChange={setOTPCODE}
                autoFocus
                OTPLength={5}
                otpType="number"
                disabled={false}
                inputStyles={{
                  borderBottomColor: "red",
                  borderBottomWidth: "2px",
                  borderBottomStyle: "solid",
                  margin: "0 5px",
                  width: "40px",
                  borderTop: "none",
                  borderRight: "none",
                  borderLeft: "none",
                }}
              />
            </div>
            <div class="mt-5 flex flex-row gap-3 justify-center">
              <button className="outline-none w-full text-sm py-2 border font-semibold text-blue-500 border-blue-500 rounded-md">
                Resend OTP
              </button>
              <button className="outline-none w-full text-sm py-2 font-semibold rounded-md text-white bg-red-500">
                Resend OTP
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OTP;
