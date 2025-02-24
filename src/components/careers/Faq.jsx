'use client'

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { motion } from 'framer-motion'

function PlusIcon({ className, ...props }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
      {...props}
    >
      <line x1="12" y1="5" x2="12" y2="19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="5" y1="12" x2="19" y2="12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MinusIcon({ className, ...props }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
      {...props}
    >
      <line x1="5" y1="12" x2="19" y2="12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const faqs = [
  {
    question: "About Us",
    answer:
      "Neutron Controls is a trailblazing engineering design services company that thrives on innovation and collaboration. With a focus on delivering exceptional hardware and software solutions, we are a Preferred Design House for Infineon Technologies. Our diverse team of experts is committed to pushing the boundaries of technology and driving impactful solutions in the automotive and industrial sectors."
  },
  {
    question: "Why Apply?",
    answer:
      "Are you a forward-thinker with a passion for innovation? Do you see yourself contributing to cutting-edge projects that shape the future of technology? Whether you’re an engineer, a business strategist, an HR professional, or possess other valuable skills, Neutron Controls offers you an opportunity to unleash your potential and be part of a team that creates meaningful impact."
  },
  {
    question: "What We Offer",
    answer: (
      <ul className="list-disc list-inside">
        <li>A dynamic and inclusive work environment that encourages collaboration and creativity.</li>
        <li>Opportunities to work on exciting projects that challenge the status quo.</li>
        <li>Exposure to emerging technologies and industry trends.</li>
        <li>A platform to learn from seasoned professionals and industry leaders.</li>
        <li>Flexibility to shape your career path based on your unique skills and interests.</li>
        <li>The chance to be a vital part of a company that values innovation, diversity, and excellence.</li>
      </ul>
    )
  },
  {
    question: "How to Apply",
    answer:
      "We are excited that you’re interested in embarking on this journey with us. Our application process is open-ended and designed to allow you to articulate your experience, skills, interests, and aspirations. Please submit the following: Resume/CV, Cover Letter, and if applicable, a Portfolio showcasing your work. We welcome applicants from all backgrounds to join us in shaping the future of technology. Please note that only successful applicants will be contacted."
  }
];

export default function Faq() {
  return (
    <div className="bg-[#090A0B]">
      <div className="mx-auto px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Frequently asked questions
          </h2>
          <dl className="mt-16 divide-y divide-white/10">
            {faqs.map((faq) => (
              <Disclosure key={faq.question} as="div" className="hover:bg-[#0e0f10] ">
                {({ open }) => (
                  <>
                    <dt>
                      <DisclosureButton className="group flex w-full items-center justify-between text-left text-white p-6 rounded-md transition-colors duration-200">
                        <span className="text-base font-semibold 3xl:text-xl">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusIcon className="h-6 w-6" />
                          ) : (
                            <PlusIcon className="h-6 w-6" />
                          )}
                        </span>
                      </DisclosureButton>
                    </dt>
                    {/* Using static ensures the panel remains mounted so we can animate its open/close state */}
                    <DisclosurePanel
                      static
                      as={motion.dd}
                      className="overflow-hidden text-gray-200 3xl:text-lg"
                      animate={open ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Wrapping the content with a DisclosureButton (rendered as a div)
                          makes the whole answer area clickable to close the panel */}
                      <DisclosureButton as="div" className="w-full cursor-pointer">
                        <div className="p-6">{faq.answer}</div>
                      </DisclosureButton>
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}