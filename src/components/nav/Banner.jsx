import { useState, useEffect } from 'react'
import { XMarkIcon } from '@heroicons/react/20/solid'

export default function Example() {
  // State to control banner visibility.
  const [showBanner, setShowBanner] = useState(true)
  // State to trigger the fade-in animation on mount.
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    // Trigger the fade-in effect after the component mounts.
    setAnimate(true)
  }, [])

  if (!showBanner) return null

  return (
    <div
      className={`flex items-center gap-x-6 bg-[#455FE1] px-6 py-2.5 sm:px-3.5 sm:before:flex-1 transition-opacity duration-500 ${
        animate ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <p className="text-base text-white">
        <a
          href="https://www.conferenceharvester.com/floorplan/v2/index.asp?EventKey=NKBNQWPK"
          className="hover:underline"
        >
          <strong className="font-semibold">APEC 2025 </strong>
          <svg
            viewBox="0 0 2 2"
            aria-hidden="true"
            className="mx-2 inline size-0.5 fill-current"
          >
            <circle r={1} cx={1} cy={1} />
          </svg>
          <span className='hidden sm:inline'>
            Join us in Atlanta from March 16 - 25 <span className='hidden md:inline'>to see our BMS for ESS demo and
            offering </span> at the Infineon booth 1331 &nbsp;
            <span aria-hidden="true">&rarr;</span>
          </span>
          <span className='inline sm:hidden'>
            March 16 - 25, Booth 1331&nbsp;
            <span aria-hidden="true">&rarr;</span>
          </span>

        </a>
      </p>
      <div className="flex flex-1 justify-end">
        <button
          type="button"
          className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
          onClick={() => setShowBanner(false)}
        >
          <span className="sr-only">Dismiss</span>
          <XMarkIcon aria-hidden="true" className="size-5 text-white" />
        </button>
      </div>
    </div>
  )
}