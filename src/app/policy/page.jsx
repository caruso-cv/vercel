import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid'

export const metadata = {
  title: 'Cookies',
  description: 'Cookie Policy – Understanding Our Use of Cookies',
};

export default function Example() {
  return (
    <main className="pb-12 pt-36 lg:pt-52 relative z-30">
      <div className="mx-auto max-w-8xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <p className="text-lg font-semibold text-[#425ACA] lg:text-2xl">Cookie Policy</p>
          <h1 className="mt-2 uppercase lg:mt-6 text-pretty text-4xl font-bold text-white sm:text-balance sm:text-[2.7rem] md:mt-4 leading-[1.1] max-w-xl">
            Understanding Our Use of Cookies
          </h1>
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-20 text-base/7 text-gray-200 lg:max-w-none lg:grid-cols-2 font-medium">
            <div>
              <h2 className="text-2xl font-bold text-white">What Are Cookies?</h2>
              <p className="mt-4 text-lg/8 text-gray-300 sm:text-xl/8">
                Cookies are small text files stored on your device that help us improve your browsing experience.
                They enable features such as remembering your preferences and analyzing how you interact with our site.
              </p>
              <h2 className="mt-8 text-2xl font-bold text-white">How We Use Cookies</h2>
              <p className="mt-4 text-lg/8 text-gray-300 sm:text-xl/8">
                We use cookies to ensure the proper functionality of our website, analyze site traffic, and
                personalize content. This helps us provide a seamless and customized experience for all users.
              </p>
              <h2 className="mt-8 text-2xl font-bold text-white">Your Consent</h2>
              <p className="mt-4 text-lg/8 text-gray-300 sm:text-xl/8">
                By continuing to use our website, you consent to our use of cookies as outlined in this policy.
                You can change your cookie settings at any time through your browser preferences.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Types of Cookies We Use</h2>
              <ul role="list" className="mt-4 text-lg/8 text-gray-300 sm:text-xl/8 space-y-4 font-medium">
                <li className="flex gap-x-3">
                  <CheckCircleIcon aria-hidden="true" className="mt-1 size-5 flex-none text-[#425ACA]" />
                  <span>
                    <strong className="font-bold text-white">Essential Cookies:</strong> Necessary for core site functionality.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircleIcon aria-hidden="true" className="mt-1 size-5 flex-none text-[#425ACA]" />
                  <span>
                    <strong className="font-bold text-white">Performance Cookies:</strong> Help us understand how visitors interact with our site.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircleIcon aria-hidden="true" className="mt-1 size-5 flex-none text-[#425ACA]" />
                  <span>
                    <strong className="font-bold text-white">Functional Cookies:</strong> Enhance and personalize your experience.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircleIcon aria-hidden="true" className="mt-1 size-5 flex-none text-[#425ACA]" />
                  <span>
                    <strong className="font-bold text-white">Targeting Cookies:</strong> Used for delivering personalized advertising and content.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}