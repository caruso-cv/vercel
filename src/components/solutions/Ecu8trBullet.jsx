import Purpose from "@/components/icons/Purpose"
import Quality from "@/components/icons/Quality"
import Parameter from "@/components/icons/Parameter"

export default function InfineonSections() {

  return (
    <div className="bg-gradient-to-b from-gray-900 py-24 sm:py-32 px-12">


            
            <div className="flex md:mt-12 md:mb-6 mx-auto max-w-8xl justify-between flex-wrap">
              <div className="py-8">
                <Purpose className="w-12 h-auto mb-8" />
                <p className="text-white uppercase text-[2rem] md:text-[2.5rem] 3xl:text-[3rem] font-bold leading-[1.2] my-3 max-w-[15rem] ">
                  Purposeful design
                </p>
                <p className="text-white/60 max-w-sm text-xl md:text-2xl">
                  Verifies cell monitors in battery modules/packs, ensuring precision, reliability.
                </p>
              </div>
              <div className="py-8">
                <Quality className="w-12 h-auto mb-8" />
                <p className="text-white uppercase text-[2rem] md:text-[2.5rem] 3xl:text-[3rem] font-bold leading-[1.2] my-3 max-w-[15rem]">
                  Quality management
                </p>
                <p className="text-white/60 max-w-sm text-xl md:text-2xl">
                  Early detection and resolution prevent production failures and expensive warranty repairs.
                </p>
              </div>
              <div className="py-8">
                <Parameter className="w-[72px] h-auto mb-8" />
                <p className="text-white uppercase text-[2rem] md:text-[2.5rem] 3xl:text-[3rem] font-bold leading-[1.2] my-3 max-w-[15rem]">
                  Parameter insight
                </p>
                <p className="text-white/60 max-w-sm text-xl md:text-2xl">
                  Provides detailed insights into essential parameters like cell voltage and temperature.
                </p>
              </div>
            </div>
          </div>



  );
}