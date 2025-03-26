import Purpose from "@/components/icons/Purpose"
import Quality from "@/components/icons/Quality"
import Parameter from "@/components/icons/Parameter"

export default function InfineonSections() {
  return (
    <div className="2xl:py-12 pb-12">
      <div className="mx-auto 2xl:max-w-8xl 2xl:pb-32 relative z-20"> 
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-gray-900 to-[#090A0B] py-6 text-left shadow-2xl 2xl:rounded-3xl px-8 xl:px-16 mx-6 rounded-2xl 2xl:mx-0">
          <div className="flex md:mb-6 mx-auto max-w-8xl justify-between flex-wrap pb-12 2xl:pb-0">
            <div className="py-8">
              <Purpose className="w-12 h-auto mb-8" />
              <p className="text-white uppercase text-[32px] font-bold leading-[1.2] my-3 max-w-[240px]">
                Technology Agnostic
              </p>
              <p className="text-white/60 max-w-sm text-[1.1rem] leading-[1.5rem] lg:text-[1.125rem] lg:leading-[1.75rem]">
                Designed with multiple interfaces in mind, ECU8TR™ boasts extensive compatibility.
              </p>
            </div>
            <div className="py-8">
              <Quality className="w-12 h-auto mb-8" />
              <p className="text-white uppercase text-[32px] font-bold leading-[1.2] my-3 max-w-[240px]">
                Command Functions
              </p>
              <p className="text-white/60 max-w-sm text-[1.1rem] leading-[1.5rem] lg:text-[1.125rem] lg:leading-[1.75rem]">
                ECU8TR™ is used to initiate functions such as balancing, register writes, and diagnostics.
              </p>
            </div>
            <div className="py-8">
              <Parameter className="w-[72px] h-auto mb-8" />
              <p className="text-white uppercase text-[32px] font-bold leading-[1.2] my-3 max-w-[240px]">
                Real-Time Detection
              </p>
              <p className="text-white/60 max-w-sm text-[1.1rem] leading-[1.5rem] lg:text-[1.125rem] lg:leading-[1.75rem]">
                Use the ECU8TR™ to find issues before they manifest, optimizing your QA operations.
              </p>
            </div>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="hidden 2xl:block absolute left-1/2 top-1/2 -z-10 size-[1024px] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
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