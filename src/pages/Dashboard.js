import StatusCard from "components/StatusCard";
import { GiCash } from "react-icons/gi";
import { FaRegHandshake } from "react-icons/fa";
import { AiOutlineLock, AiOutlineClockCircle } from "react-icons/ai";
import OTP from "components/OTP";

export default function Dashboard() {
  return (
    <>
    <OTP />
      <div className="px-3 md:px-8 h-32" />

      <div className="px-3 md:px-8 -mt-24">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4 gap-5">
            <StatusCard
              color="blue"
              icon={<GiCash size={28} color="white" />}
              title="monthly brokerage earn"
              amount="GHC 350,897"
            />
            <StatusCard
              color="amber"
              icon={<FaRegHandshake size={28} color="white" />}
              title="total offers"
              amount="GHC 2,356"
            />
            <StatusCard
              color="green"
              icon={<AiOutlineClockCircle size={28} color="white" />}
              title="total pending offers"
              amount="GHC 924"
            />
            <StatusCard
              color="gray"
              icon={<AiOutlineLock size={28} color="white" />}
              title="total close offerss"
              amount="GHC 49,65%"
            />
          </div>
        </div>
      </div>

      <div className="px-3 md:px-8 ">
        <div className="container mx-auto max-w-full">
          <div>
            <div className="px-3 py-2">
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 mb-4 gap-5">
                <div className="bg-white px-3 py-2 rounded-md shadow-md">
                  <h1 className="text-lg font-bold capitalize tracking-wider mb-3">
                    Offer overview
                  </h1>
                  <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 mb-4 gap-5">
                    <StatusCard
                      color="blue"
                      icon={<GiCash size={28} color="white" />}
                      title="monthly brokerage earn"
                      amount="GHC 350,897"
                    />
                    <StatusCard
                      color="amber"
                      icon={<FaRegHandshake size={28} color="white" />}
                      title="total offers"
                      amount="GHC 2,356"
                    />
                    <StatusCard
                      color="green"
                      icon={<AiOutlineClockCircle size={28} color="white" />}
                      title="total pending offers"
                      amount="GHC 924"
                    />
                    <StatusCard
                      color="gray"
                      icon={<AiOutlineLock size={28} color="white" />}
                      title="total close offerss"
                      amount="GHC 49,65%"
                    />
                  </div>
                </div>
                <div>
                  <div className="bg-white px-3 py-2 rounded-md shadow-md mb-3">
                    <div className="lg:flex lg:flex-row gap-4">
                      <button className="outline-none w-full relative bg-amber-200 flex p-2 rounded-md">
                        <p className="text-sm w-20 text-left capitalize font-semibold">
                          create distribution list
                        </p>
                        <div className="absolute right-0">
                          <GiCash size={30} color="white" />
                        </div>
                      </button>
                      <button className="outline-none w-full relative bg-green-200 flex p-2 rounded-md">
                        <p className="text-sm w-20 text-left capitalize font-semibold">
                          email broadcast
                        </p>
                        <div className="absolute right-0">
                          <GiCash size={30} color="white" />
                        </div>
                      </button>
                      <button className="outline-none w-full relative bg-blue-200 flex p-2 rounded-md">
                        <p className="text-sm w-20 text-left capitalize font-semibold">
                          close offer
                        </p>
                        <div className="absolute right-0">
                          <GiCash size={30} color="white" />
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="bg-white px-3 py-2 rounded-md shadow-md">
                    <h1 className="text-lg font-bold capitalize tracking-wider mb-3">
                      overview
                      {/* overview chat here */}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-3 md:px-8">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 mb-4 gap-5">
            <div className="bg-white px-3 py-2 rounded-md shadow-md">
              <h1 className="text-lg font-bold capitalize tracking-wider mb-3">
                distribution companies(Re-insures)
              </h1>
              <p className="text-sm font-bold tracking-wider mb-3">
                Show entries
              </p>
            </div>
            <div className="bg-white px-3 py-2 rounded-md shadow-md">
              <h1 className="text-lg font-bold capitalize tracking-wider mb-3">
                Offer list
              </h1>
              <p className="text-sm font-bold tracking-wider mb-3 bg-green-200 py-2 px-2 rounded-md">
                Recent
              </p>
              <p className="text-sm font-bold tracking-wider mb-3">
                Show entries
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
