import Safety from "@/components/icons/Safety"
import Scale from "@/components/icons/Scale"
import Future from "@/components/icons/Future"

export default function InfineonSections() {

  return (
    <div className="bg-gradient-to-b from-gray-900 py-24 sm:py-32 px-12">


            
            <div className="flex mt-12 mx-auto max-w-8xl justify-between flex-wrap">
              <div className="py-8">
                <Safety className="w-12 h-auto mb-8" />
                <p className="text-white uppercase text-[2rem] 3xl:text-[2.8rem] font-bold leading-[1.2] my-3 max-w-[17rem] text-balance">
                Safety by design
                </p>
                <p className="text-white/60 max-w-sm text-xl 3xl:text-2xl">
                ENERG8TE™ lets teams integrate data logging, diagnostics, failsafes, and prevention measures for battery risks.
                </p>
              </div>
              <div className="py-8">
                <Scale className="w-12 h-auto mb-8" />
                <p className="text-white uppercase text-[2rem] 3xl:text-[2.8rem] font-bold leading-[1.2] my-3 max-w-[17rem] text-balance">
                Scalable + flexible
                </p>
                <p className="text-white/60  max-w-sm text-xl 3xl:text-2xl">
                ENERG8TE™ offers hardware platform enabling software algorithms for SoX, cell balancing, charging, and discharging.
                </p>
              </div>
              <div className="py-8">
                <Future className="w-[72px] h-auto mb-8" />
                <p className="text-white uppercase text-[2rem] 3xl:text-[2.8rem] font-bold leading-[1.2] my-3 max-w-[28rem] text-balance">
                Future-proof design
                </p>
                <p className="text-white/60  max-w-sm text-xl 3xl:text-2xl">
                As ESS technologies advance, ENERGSTE is designed to adapt, ensuring compatibility and long-term value.
                </p>
              </div>
            </div>
          </div>



  );
}