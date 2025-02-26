'use client'

import { Link }from '@/components/link'

export default function Example() {


  return (

        <div className="relative isolate px-6 lg:px-8 z-30"> 

            <div className="mx-auto max-w-4xl px-6 pb-28 text-center pt-32 lg:px-8">        

                <div className="mx-auto max-w-5xl relative z-30">
                    <p className="mt-8 sm:mt-14 lg:mt-2 text-balance text-5xl font-bold text-white sm:text-6xl uppercase">
                        Contain your energy
                    </p>
                </div>
                
                <div className="relative mt-8">
                    <p className="mx-auto text-pretty text-xl font-medium text-gray-300 sm:text-2xl mb-2">
                        Advanced BMS controllers for ESS/BESS installations.
                    </p>
                    <p className="mx-auto text-pretty text-xl font-medium text-gray-300 sm:text-2xl mb-2">
                        Designed for efficiency, safety, and reliability.
                    </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                    href="#get-started"
                    scroll={false}
                    onClick={(e) => {
                        e.preventDefault();
                        const target = document.getElementById("get-started");
                        if (target) {
                        target.scrollIntoView({ behavior: "smooth" });
                        }
                    }}
                    className="rounded-md bg-[#425ACA] px-3.5 py-2.5 text-sm sm:text-lg font-semibold text-white 3xl:text-base shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                    Get started
                    </Link>
                    <Link href="/services" className="text-sm/6 sm:text-lg font-semibold text-white 3xl:text-base">
                    Learn more <span aria-hidden="true">→</span>
                    </Link>
                </div>
                
            </div>

            </div>
           
                <div
                aria-hidden="true"
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                >
           
                <div
                    style={{
                    clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#1188CA] to-[#030C6C] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                />

            </div>
        </div>
    )
}
