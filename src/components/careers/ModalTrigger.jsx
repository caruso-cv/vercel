'use client'
import { useState } from 'react'
import ApplyModal from '@/components/careers/ApplyModal'

export default function ModalTrigger() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="rounded-md bg-[#425ACA] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 3xl:text-base"
      >
        Join our team <span aria-hidden="true">&rarr;</span>
      </button>

      <ApplyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}