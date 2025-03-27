import Image from 'next/image'
import HeroButton from './HeroButton'

export default function HeroMobile() {

  return (
    <div className="bg-white">

      {/* Slide 1 */}
      <section className="block" aria-label="Energy Storage Section">
        <div>
          <div>
            <div className="relative isolate overflow-hidden bg-gray-900 min-h-full">
              <div className="absolute inset-0 z-0">
                <Image
                  src="/hero/energy.webp"
                  alt="energy storage systems"
                  fill
                  className="object-cover"
                  sizes="100vw"
                  quality={20}
                  priority
                />
              </div>

              {/* Shader for hero image */}
              <div className="absolute inset-0 bg-black bg-opacity-70 z-10" />

              <div className="relative mx-auto max-w-8xl px-6 lg:px-8 2xl:px-0 z-20 h-full">

                {/* Spacer for Navbar */}
                <div className='pt-[85px]'></div>

                <div className="flex flex-col h-full z-20 justify-center py-[100px]">
                  <div className="max-w-2xl select-text ">   
                    <h1 className="text-balance uppercase text-5xl font-bold text-white sm:text-[83.2px] whitespace-pre-line">
                      Contain your energy
                    </h1>
                    <p className="mt-8 text-xl sm:text-4xl font-medium text-gray-100">
                      Advanced BMS controllers for <br /> ESS/BESS installations.
                    </p>
                    <div className="mt-10 flex items-left justify-start gap-x-6">
                      <HeroButton buttonText="GET STARTED" href="#get-started" scrollId="get-started"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </section>

      {/* Slide 2 */}
      <section className="block mt-4" aria-label="Battery Testing Section">
      <div>
        <div>
          <div className="relative isolate overflow-hidden bg-gray-900 min-h-full">
            <div className="absolute inset-0 z-0">
              <Image
                src="/hero/test.webp"
                alt="Battery factory point tester robot"
                fill
                className="object-cover"
                sizes="100vw"
                quality={20}
                loading="lazy"
              />
            </div>

            {/* Shader for hero image */}
            <div className="absolute inset-0 bg-black bg-opacity-70 z-10" />

            <div className="relative mx-auto max-w-8xl px-6 lg:px-8 2xl:px-0 z-20 h-full">


              <div className="flex flex-col h-full z-20 justify-center py-[100px]">
                <div className="max-w-2xl select-text ">   
                  <h2 className="text-balance uppercase text-5xl font-bold text-white sm:text-[83.2px] whitespace-pre-line">
                    Test your limits
                  </h2>
                  <p className="mt-8 text-xl sm:text-4xl font-medium text-gray-100">
                  Battery factory point tester.
                  </p>
                  <div className="mt-10 flex items-left justify-start gap-x-6">
                    <HeroButton buttonText="GET STARTED" href="#ecu8tr" scrollId="ecu8tr"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
      </section>
    </div>
  );
}