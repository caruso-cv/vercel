// 'use client'

// import { useEffect, useState } from 'react'
// import Cookies from 'js-cookie'
// import Link from 'next/link'
// import Cookie from '@/components/icons/Cookie'
// import CookieDialog from '@/components/CookieDialog'

// export default function CookieBanner() {
//   const [showBanner, setShowBanner] = useState(false)
//   const [showSettingsModal, setShowSettingsModal] = useState(false)
//   const [userId, setUserId] = useState(null)

//   useEffect(() => {
//     // Generate or retrieve a user ID
//     let existingId = localStorage.getItem('userId')
//     if (!existingId) {
//       existingId = crypto.randomUUID()
//       localStorage.setItem('userId', existingId)
//     }
//     setUserId(existingId)
//   }, [])

//   // Show banner if no cookieConsent is set
//   useEffect(() => {
//     const consent = Cookies.get('cookieConsent')
//     if (!consent) {
//       setShowBanner(true)
//     }
//   }, [])

//   // Accept cookies
//   const handleAccept = () => {
//     Cookies.set('cookieConsent', 'accepted', { expires: 365 })
//     if (typeof window !== 'undefined') {
//       window.dataLayer = window.dataLayer || []
//       window.dataLayer.push({ event: 'analytics_consent', consent: 'granted' })
//       if (window.gtag) {
//         window.gtag('consent', 'update', {
//           'analytics_storage': 'granted',
//           'ad_storage': 'granted',
//         })
//       }
//     }
//     setShowBanner(false)
//   }

//   // Reject cookies
//   const handleReject = () => {
//     Cookies.set('cookieConsent', 'rejected', { expires: 365 })
//     if (typeof window !== 'undefined') {
//       window.dataLayer = window.dataLayer || []
//       window.dataLayer.push({ event: 'analytics_consent', consent: 'denied' })
//       if (window.gtag) {
//         window.gtag('consent', 'update', {
//           'analytics_storage': 'denied',
//           'ad_storage': 'denied',
//         })
//       }
//     }
//     setShowBanner(false)
//   }

//   // Open cookie settings dialog
//   const openSettings = () => {
//     setShowBanner(false)
//     setShowSettingsModal(true)
//   }

//   // Called when user clicks "Confirm My Choices" in CookieDialog
//   const handleConfirmChoices = (choices) => {
//     console.log('User choices:', choices)
//     // Optionally update analytics or other scripts based on these choices
//     setShowSettingsModal(false)
//   }

//   // Called when user clicks "Reject All" in CookieDialog
//   const handleRejectAllFromModal = () => {
//     handleReject() // reuse your global reject logic
//     setShowSettingsModal(false)
//   }

//   return (
//     <>
//       {/* Cookie Banner */}
//       {showBanner && (
//         <div className="pointer-events-none fixed bottom-0 sm:px-6 sm:pb-6 z-50">
//           <div className="pointer-events-auto ml-auto sm:max-w-xl sm:rounded-xl rounded-t-xl bg-white p-6 shadow-lg ring-1 ring-gray-900/10">
//             <p className="text-[0.875rem]/[1.5rem] sm:text-[1rem]/[1.5rem] text-gray-900">
//               We use cookies to enhance your browsing experience, analyze site traffic, and deliver personalized content.
//               By clicking “Accept all”, you consent to our use of cookies. See our{' '}
//               <Link href="/policy" className="font-semibold text-[#435FE1] hover:underline">
//                 cookie policy
//               </Link>
//               .
//             </p>
//             <div className="flex justify-between w-full pt-4">
//               {/* Accept/Reject Buttons */}
//               <div className="mt-4 flex items-center gap-x-3">
//                 <button
//                   type="button"
//                   onClick={handleAccept}
//                   className="rounded-md bg-[#435FE1] py-3 px-2.5 md:px-3.5 text-[0.75rem] leading-[1rem] font-bold tracking-[0.2px] text-white shadow-sm hover:bg-indigo-500 uppercase"
//                 >
//                   Accept all
//                 </button>
//                 <button
//                   type="button"
//                   onClick={handleReject}
//                   className="py-3 px-2.5 md:px-3.5 text-[0.75rem] leading-[1rem] font-bold tracking-[0.2px] text-gray-900 hover:bg-gray-100 rounded-md uppercase"
//                 >
//                   Reject all
//                 </button>
//               </div>

//               {/* Cookie Icon -> Opens Settings */}
//               <div className="mt-4">
//                 <button
//                   type="button"
//                   onClick={openSettings}
//                   className="relative group text-sm/6 font-semibold text-gray-900 py-0 px-0 rounded-full"
//                 >
//                   <Cookie className="w-10 hover:opacity-50" />
//                   {/* Tooltip */}
//                   <span
//                     className="
//                       pointer-events-none
//                       absolute 
//                       left-1/2 
//                       transform 
//                       -translate-x-1/2 
//                       bottom-full 
//                       mb-2 
//                       px-2 
//                       py-1 
//                       bg-black 
//                       text-white 
//                       text-xs 
//                       rounded 
//                       opacity-0 
//                       group-hover:opacity-100 
//                       transition-opacity
//                       whitespace-nowrap
//                     "
//                   >
//                     Cookies Settings
//                   </span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Cookie Settings Dialog */}
//       <CookieDialog
//         open={showSettingsModal}
//         onClose={() => setShowSettingsModal(false)}
//         onConfirm={handleConfirmChoices}
//         onRejectAll={handleRejectAllFromModal}
//         userId={userId}
//       />
//     </>
//   )
// }