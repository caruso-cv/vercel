import Purpose from "@/components/icons/Parameter"
import Quality from "@/components/icons/Scale"
import Parameter from "@/components/icons/Future"

export default function InfineonSections() {

  return (
    <div className="2xl:py-12">

        <div className="mx-auto 2xl:max-w-8xl 2xl:pb-32 relative z-20"> 
          <div className="relative isolate overflow-hidden bg-gradient-to-b from-gray-900 to-[#090A0B] py-12 text-left shadow-2xl 2xl:rounded-3xl px-8 xl:px-16">
        <div className='flex md:mb-6 mx-auto max-w-8xl justify-between flex-wrap pb-12 2xl:pb-0'>

            <div className="py-8">
              <Purpose className="w-[72px] h-auto mb-8" />
              <p className="text-white uppercase text-[2rem] 3xl:text-[2.3rem] font-bold leading-[1.2] my-3 max-w-[15rem] ">
              Safety By Design
              </p>
              <p className="text-white/60 max-w-sm text-xl 3xl:text-2xl">
              ENERG8TE™ lets teams integrate data logging, diagnostics, failsafes, and prevention measures for battery risks.
              </p>
            </div>
            <div className="py-8">
              <Quality className="w-12 h-auto mb-8" />
              <p className="text-white uppercase text-[2rem] 3xl:text-[2.3rem] font-bold leading-[1.2] my-3 max-w-[15rem]">
              Scalable + flexible
              </p>
              <p className="text-white/60 max-w-sm text-xl 3xl:text-2xl">
              ENERG8TE™ offers hardware platform enabling software algorithms for SoX, cell balancing, charging, and discharging.
              </p>
            </div>
            <div className="py-8">
              <Parameter className="w-[60px] h-auto mb-8" />
              <p className="text-white uppercase text-[2rem] 3xl:text-[2.3rem] font-bold leading-[1.2] my-3 max-w-[15rem]">
              Future-proof
              </p>
              <p className="text-white/60 max-w-sm text-xl 3xl:text-2xl">
              As ESS technologies advance, ENERGSTE is designed to adapt, ensuring compatibility and long-term value.
              </p>
            </div>

        </div>

            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="hidden 2xl:block absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            >
              <circle r={512} cx={512} cy={512} fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                  <stop stopColor="#1188CA" />
                  <stop offset={1} stopColor="#030C6C" />
                </radialGradient>
              </defs>

            </svg>

          </div>
        </div>
  </div>



  );
}