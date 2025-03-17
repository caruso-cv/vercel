'use client'
import { useState } from 'react'
import ApplyModal from '@/components/careers/ApplyModal'

export default function ModalTrigger({ showNotification }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="uppercase rounded-md bg-[#425ACA] px-3.5 py-2.5 text-center text-[0.875rem] leading-[1.25rem] font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-indigo-500"
      >
        Join our team <span aria-hidden="true" className='pl-1'>&rarr;</span>
      </button>

      <ApplyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        showNotification={showNotification} // pass it down to the form
      />
    </>
  )
}