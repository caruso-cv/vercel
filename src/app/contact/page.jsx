import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function Example() {
  return (
    <div className="relative bg-[#090A0B] overflow-x-hidden">
        <div className="relative bg-[#090A0B] pt-12">

          <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
            <div className="relative px-6 pb-2 pt-24 lg:static lg:px-8 lg:py-48">
              <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg ">
                <div
                  className="absolute inset-y-0 left-0 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2 border-r border-white/10"
                  style={{
                    WebkitMaskImage:
                      'linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(0,0,0,1) 40%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 90%)',
                    maskImage:
                      'linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(0,0,0,1) 40%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 90%)',
                  }}
                >
                  <svg
                    aria-hidden="true"
                    className="absolute inset-0 size-full stroke-[#1B1C1E] [mask-image:radial-gradient(100%_100%_at_bottom_left,white,transparent)]"
                  >
                    <defs>
                      <pattern
                        x="100%"
                        y={-1}
                        id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2"
                        width={200}
                        height={200}
                        patternUnits="userSpaceOnUse"
                      >
                        <path d="M130 200V.5M.5 .5H200" fill="none" />
                      </pattern>
                    </defs>
                    <rect fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)" width="100%" height="100%" strokeWidth={0} />
                  </svg>
                </div>
                <h2 className="text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl relative z-30 3xl:text-6xl">Get in touch</h2>
                <p className="mt-6 text-lg/8 text-gray-300 relative z-30 3xl:text-xl">
                  Our team is here to help with any questions you might have about optimizing energy storage and battery management systems. Feel free to reach out—we look forward to connecting with you.
                </p>
                <dl className="mt-10 space-y-4 text-base/7 text-gray-300 relative z-30 3xl:text-lg">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <BuildingOffice2Icon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                  </dt>
                  <dd>
                    1145 Innovation Drive, Suite 101
                    <br />
                    Kanata, Ontario, K2K 3G8
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <BuildingOffice2Icon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                  </dt>
                  <dd>
                    5270 Solar Drive, Unit 21
                    <br />
                    Mississauga, Ontario, L4W 0G7
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                  </dt>
                  <dd>
                    <a href="mailto:info@neutroncontrols.com" className="hover:text-white">
                      info@neutroncontrols.com
                    </a>
                  </dd>
                </div>
              </dl>
              </div>
            </div>
            <form action="#" method="POST" className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
              <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="first-name" className="block text-sm/6 font-semibold text-white 3xl:text-base">
                      First name
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="first-name"
                        name="first-name"
                        type="text"
                        autoComplete="given-name"
                        className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm/6 font-semibold text-white 3xl:text-base">
                      Last name
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="last-name"
                        name="last-name"
                        type="text"
                        autoComplete="family-name"
                        className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm/6 font-semibold text-white 3xl:text-base">
                      Email
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-white 3xl:text-base">
                      Phone number
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="phone-number"
                        name="phone-number"
                        type="tel"
                        autoComplete="tel"
                        className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm/6 font-semibold text-white 3xl:text-base">
                      Message
                    </label>
                    <div className="mt-2.5">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                        defaultValue={''}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex justify-end">
                  <button
                    type="submit"
                    className="rounded-md bg-[#425ACA] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 3xl:text-base"
                  >
                    Send message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
  )
}


// 'use client'

// import React, { useState } from 'react'
// import ReCAPTCHA from 'react-google-recaptcha'
// import { BuildingOffice2Icon, EnvelopeIcon } from '@heroicons/react/24/outline'

// export default function Contact() {
//   const [formStatus, setFormStatus] = useState('')
//   const [errors, setErrors] = useState({})
//   const [recaptchaToken, setRecaptchaToken] = useState(null)

//   const validateForm = (data) => {
//     const newErrors = {}
//     if (!data["first-name"]) newErrors.firstName = "First name is required"
//     if (!data["last-name"]) newErrors.lastName = "Last name is required"
//     if (!data.email) {
//       newErrors.email = "Email is required"
//     } else if (!/\S+@\S+\.\S+/.test(data.email)) {
//       newErrors.email = "Invalid email format"
//     }
//     if (!data["phone-number"]) newErrors.phone = "Phone number is required"
//     if (!data.message) newErrors.message = "Message is required"
//     if (!recaptchaToken) newErrors.recaptcha = "Please verify that you are not a robot"
//     return newErrors
//   }

//   const handleSubmit = async (event) => {
//     event.preventDefault()
//     setFormStatus('')
//     setErrors({})

//     // Honeypot check (should remain empty)
//     const honeypot = event.target.honeypot.value
//     if (honeypot) {
//       return
//     }

//     const formData = new FormData(event.target)
//     // Append the reCAPTCHA token manually
//     formData.append("recaptchaToken", recaptchaToken)
//     // Remove honeypot field from the data
//     formData.delete("honeypot")

//     const data = Object.fromEntries(formData.entries())
//     const validationErrors = validateForm(data)
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors)
//       return
//     }

//     try {
//       const response = await fetch('/api/contact', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(data)
//       })

//       if (response.ok) {
//         setFormStatus('success')
//         event.target.reset()
//         setRecaptchaToken(null) // reset the recaptcha token after successful submission
//       } else {
//         setFormStatus('error')
//       }
//     } catch (err) {
//       console.error('Submission error:', err)
//       setFormStatus('error')
//     }
//   }

//   return (
//     <div className="relative bg-[#090A0B] overflow-x-hidden">
//       <div className="relative bg-[#090A0B] pt-12">
//         <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
//           {/* Left Side – Contact Information */}
//           <div className="relative px-6 pb-2 pt-24 lg:static lg:px-8 lg:py-48">
//             <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
//               <div
//                 className="absolute inset-y-0 left-0 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2 border-r border-white/10"
//                 style={{
//                   WebkitMaskImage:
//                     'linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(0,0,0,1) 40%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 90%)',
//                   maskImage:
//                     'linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(0,0,0,1) 40%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 90%)'
//                 }}
//               >
//                 <svg
//                   aria-hidden="true"
//                   className="absolute inset-0 w-full h-full stroke-[#1B1C1E] [mask-image:radial-gradient(100%_100%_at_bottom_left,white,transparent)]"
//                 >
//                   <defs>
//                     <pattern
//                       x="100%"
//                       y={-1}
//                       id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2"
//                       width={200}
//                       height={200}
//                       patternUnits="userSpaceOnUse"
//                     >
//                       <path d="M130 200V.5M.5 .5H200" fill="none" />
//                     </pattern>
//                   </defs>
//                   <rect fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)" width="100%" height="100%" strokeWidth={0} />
//                 </svg>
//               </div>
//               <h2 className="text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl relative z-30">
//                 Get in touch
//               </h2>
//               <p className="mt-6 text-lg/8 text-gray-300 relative z-30">
//                 Our team is here to help with any questions you might have about optimizing energy storage and battery management systems.
//                 Feel free to reach out—we look forward to connecting with you.
//               </p>
//               <dl className="mt-10 space-y-4 text-base/7 text-gray-300 relative z-30">
//                 <div className="flex gap-x-4">
//                   <dt className="flex-none">
//                     <span className="sr-only">Address</span>
//                     <BuildingOffice2Icon aria-hidden="true" className="h-7 w-6 text-gray-400" />
//                   </dt>
//                   <dd>
//                     1145 Innovation Drive, Suite 101
//                     <br />
//                     Kanata, Ontario, K2K 3G8
//                   </dd>
//                 </div>
//                 <div className="flex gap-x-4">
//                   <dt className="flex-none">
//                     <span className="sr-only">Address</span>
//                     <BuildingOffice2Icon aria-hidden="true" className="h-7 w-6 text-gray-400" />
//                   </dt>
//                   <dd>
//                     5270 Solar Drive, Unit 21
//                     <br />
//                     Mississauga, Ontario, L4W 0G7
//                   </dd>
//                 </div>
//                 <div className="flex gap-x-4">
//                   <dt className="flex-none">
//                     <span className="sr-only">Email</span>
//                     <EnvelopeIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
//                   </dt>
//                   <dd>
//                     <a href="mailto:info@neutroncontrols.com" className="hover:text-white">
//                       info@neutroncontrols.com
//                     </a>
//                   </dd>
//                 </div>
//               </dl>
//             </div>
//           </div>

//           {/* Right Side – Contact Form */}
//           <form onSubmit={handleSubmit} method="POST" className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
//             <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
//               <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
//                 <div>
//                   <label htmlFor="first-name" className="block text-sm/6 font-semibold text-white">
//                     First name
//                   </label>
//                   <div className="mt-2.5">
//                     <input
//                       id="first-name"
//                       name="first-name"
//                       type="text"
//                       autoComplete="given-name"
//                       className={`block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white placeholder:text-gray-500 focus:outline-indigo-500 ${errors.firstName ? 'border border-red-500' : ''}`}
//                       required
//                     />
//                     {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
//                   </div>
//                 </div>
//                 <div>
//                   <label htmlFor="last-name" className="block text-sm/6 font-semibold text-white">
//                     Last name
//                   </label>
//                   <div className="mt-2.5">
//                     <input
//                       id="last-name"
//                       name="last-name"
//                       type="text"
//                       autoComplete="family-name"
//                       className={`block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white placeholder:text-gray-500 focus:outline-indigo-500 ${errors.lastName ? 'border border-red-500' : ''}`}
//                       required
//                     />
//                     {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
//                   </div>
//                 </div>
//                 <div className="sm:col-span-2">
//                   <label htmlFor="email" className="block text-sm/6 font-semibold text-white">
//                     Email
//                   </label>
//                   <div className="mt-2.5">
//                     <input
//                       id="email"
//                       name="email"
//                       type="email"
//                       autoComplete="email"
//                       className={`block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white placeholder:text-gray-500 focus:outline-indigo-500 ${errors.email ? 'border border-red-500' : ''}`}
//                       required
//                     />
//                     {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//                   </div>
//                 </div>
//                 <div className="sm:col-span-2">
//                   <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-white">
//                     Phone number
//                   </label>
//                   <div className="mt-2.5">
//                     <input
//                       id="phone-number"
//                       name="phone-number"
//                       type="tel"
//                       autoComplete="tel"
//                       className={`block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white placeholder:text-gray-500 focus:outline-indigo-500 ${errors.phone ? 'border border-red-500' : ''}`}
//                       required
//                     />
//                     {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
//                   </div>
//                 </div>
//                 <div className="sm:col-span-2">
//                   <label htmlFor="message" className="block text-sm/6 font-semibold text-white">
//                     Message
//                   </label>
//                   <div className="mt-2.5">
//                     <textarea
//                       id="message"
//                       name="message"
//                       rows={4}
//                       className={`block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white placeholder:text-gray-500 focus:outline-indigo-500 ${errors.message ? 'border border-red-500' : ''}`}
//                       required
//                     />
//                     {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
//                   </div>
//                 </div>

//                 {/* Google reCAPTCHA */}
//                 <div className="sm:col-span-2 mt-4">
//                   <ReCAPTCHA
//                     sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
//                     onChange={(token) => setRecaptchaToken(token)}
//                     onExpired={() => setRecaptchaToken(null)}
//                   />
//                   {errors.recaptcha && <p className="text-red-500 text-sm mt-1">{errors.recaptcha}</p>}
//                 </div>

//                 {/* Honeypot field (hidden) */}
//                 <div style={{ display: 'none' }}>
//                   <label htmlFor="honeypot">Leave this field empty</label>
//                   <input id="honeypot" name="honeypot" type="text" autoComplete="off" />
//                 </div>
//               </div>
//               <div className="mt-8 flex justify-end">
//                 <button
//                   type="submit"
//                   className="rounded-md bg-[#425ACA] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-indigo-500"
//                 >
//                   Send message
//                 </button>
//               </div>
//               {formStatus === 'success' && <p className="mt-4 text-green-400">Thank you for your message!</p>}
//               {formStatus === 'error' && <p className="mt-4 text-red-400">There was an error. Please try again later.</p>}
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }