import Link from 'next/link';
import { CheckIcon } from '@heroicons/react/20/solid';
import Battery from '@/components/icons/Battery';
import Design from '@/components/icons/Design';
import Safety from '@/components/icons/SafetyIcon';
import InfineonSection from '@/components/services/InfineonSection';

const tiers = [
  {
    name: 'BMS Controls',
    id: 'tier-hobby',
    href: '/solutions/ecu8tr',
    buttonText: 'Discover BMS',
    description:
      'Elevate your battery management capabilities. Ensure reliable power and maximize energy efficiency.',
    features: [
      'High-performance BMS and ECU design',
      'Enhanced battery longevity',
      'Tailored solutions for EVs and renewables',
      'Industrial-grade safety and performance',
    ],
    icon: <Battery className="h-20 w-20" aria-hidden="true" />,
  },
  {
    name: 'Safety-Critical Design',
    id: 'tier-team',
    href: '/about',
    buttonText: 'Explore safety',
    description:
      'Drive safety and reliability with integrated systems that meet ISO 26262 standards.',
    features: [
      'Functional safety expertise for automotive and industrial control',
      'Compliance with ISO 26262 for highest reliability',
      'High-performance designs prioritizing occupant and environmental protection',
    ],
    icon: <Safety className="h-20 w-20" aria-hidden="true" />,
  },
  {
    name: 'Advanced Design Solutions',
    id: 'tier-enterprise',
    href: '/contact',
    buttonText: 'Get in touch',
    description:
      'Discover the next generation of innovation with tailored advanced design solutions.',
    features: [
      'Next-generation electronic systems built to your unique vision',
      'Bold prototypes leveraging cutting-edge engineering and technology',
      'Advanced analytics',
      'Expert teams tackling complex challenges with ingenuity and creativity',
    ],
    icon: <Design className="h-20 w-20" aria-hidden="true" />,
  },
];

export default function Page() {
  return (
    <div className="overflow-hidden bg-[#090A0B]">
      {/* Header / Services Section */}
      <div className="mx-auto max-w-7xl px-6 pb-96 text-center pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl relative z-30">
          <h2 className="text-base/7 3xl:text-lg font-semibold text-[#425ACA]">Services</h2>
          <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            Smarter energy solutions
          </p>
        </div>
        <div className="relative mt-6">
          <p className="mx-auto max-w-2xl text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
            Advanced BMS and ESS solutions designed for efficiency, safety, and seamless integration—optimizing performance and reliability.
          </p>
          <svg
            viewBox="0 0 1208 1024"
            className="absolute -top-10 left-1/2 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0"
          >
            <ellipse cx={604} cy={512} rx={604} ry={512} fill="url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)" />
            <defs>
              <radialGradient id="6d1bd035-0dd1-437e-93fa-59d316231eb0">
                <stop stopColor="#1188CA" />
                <stop offset={1} stopColor="#030C6C" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Tier Cards Section */}
      <div className="flow-root bg-white pb-24 sm:pb-32 relative z-10">
        <div className="-mt-80">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {tiers.map((tier) => (
                <div
                  key={tier.id}
                  className="flex flex-col justify-between rounded-3xl bg-white p-6 shadow-lg ring-1 ring-gray-900/10 sm:p-8 w-full"
                >
                  <div>
                    <h3 id={tier.id} className="text-base/7 3xl:text-lg font-semibold text-[#425ACA] pb-8">
                      {tier.name}
                    </h3>
                    <div className="mt-4 3xl:mt-6 flex items-center justify-center">
                      {tier.icon}
                    </div>
                    <p className="mt-6 3xl:mt-12 text-base/7 text-gray-600 3xl:text-lg">{tier.description}</p>
                    <ul role="list" className="mt-10 space-y-4 text-sm/6 3xl:text-base text-gray-600">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-[#425ACA]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={tier.href}
                    aria-describedby={tier.id}
                    className="mt-8 block rounded-md bg-[#425ACA] px-3.5 py-2 text-center text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#425ACA] 3xl:text-base"
                  >
                    {tier.buttonText}
                  </Link>
                </div>
              ))}
              <div className="flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:gap-y-10 sm:p-10 lg:col-span-3 lg:flex-row lg:items-center">
                <div className="lg:min-w-0 lg:flex-1">
                  <h3 className="text-base/7 font-semibold text-[#425ACA] 3xl:text-lg">Our AURIX Expertise</h3>
                  <p className="mt-1 text-base/7 text-gray-600 3xl:text-lg">
                    Unleash the full potential of Infineon’s AURIX™-MCUs with expert design support and tailored training, equipping you to harness cutting-edge technology for maximum performance and reliability.
                  </p>
                </div>
                <Link
                  href="/solutions/ecu8tr"
                  className="rounded-md px-3.5 py-2 text-sm/6 font-semibold text-[#425ACA] ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#425ACA] 3xl:text-base"
                >
                  See our solutions <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Render the Infineon Section */}
      <InfineonSection />
    </div>
  );
}