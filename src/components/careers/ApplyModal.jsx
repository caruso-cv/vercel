'use client'
import { useState } from 'react'
import { Dialog, DialogTitle, DialogBody } from '@/components/careers/Dialog'
import FileInput from '@/components/careers/FileInput'

export default function ApplyModal({ isOpen, onClose }) {
  // Define job options with name and description
  const jobOptions = [
    {
      name: 'General Application',
      description:
        'Seeking talented individuals with automotive industry experience to join our team. Apply now to unleash your potential with Neutron Controls!',
    },
    {
      name: 'Embedded Software Engineer',
      description:
        'Passionate about embedded software development? Join our automotive-focused team and shape the future of cutting-edge solutions.',
    },
  ]

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: jobOptions[0].name,
    resume: null,
    coverLetter: null,
  })

  const selectedJob = jobOptions.find(
    (job) => job.name === formData.position
  )

  const handleChange = (e) => {
    const { name, value, files } = e.target
    if (files) {
      setFormData({ ...formData, [name]: files[0] })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    onClose()
  }

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <div className="p-6">
        <DialogTitle className="mb-4">Join Our Team</DialogTitle>
        <DialogBody>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 md:text-base"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 md:text-base"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 md:text-base"
              >
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            {/* Position */}
            <div>
              <label
                htmlFor="position"
                className="block text-sm font-medium text-gray-700 md:text-base"
              >
                Position
              </label>
              <select
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 pr-12 appearance-none md:mb-4"
                style={{ backgroundPosition: 'right 1rem center' }}
              >
                {jobOptions.map((job) => (
                  <option key={job.name} value={job.name}>
                    {job.name}
                  </option>
                ))}
              </select>
              <div className="mt-2 text-sm text-gray-600 md:text-base md:pb-4">
                {selectedJob?.description}
              </div>
            </div>

            {/* Cover Letter */}
            <div>
              <label
                htmlFor="coverLetter"
                className="block text-sm font-medium text-gray-700 md:text-base"
              >
                Upload Cover Letter
              </label>
              <FileInput
                id="coverLetter"
                name="coverLetter"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                fileName={
                  formData.coverLetter ? formData.coverLetter.name : ''
                }
              />
            </div>

            {/* Resume */}
            <div>
              <label
                htmlFor="resume"
                className="block text-sm font-medium text-gray-700 md:text-base"
              >
                Upload Resume
              </label>
              <FileInput
                id="resume"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                fileName={formData.resume ? formData.resume.name : ''}
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 mt-2">
              <button
                type="button"
                onClick={onClose}
                className="rounded-md text-sm px-4 py-2 text-black/70 font-semibold hover:bg-gray-100 md:text-base"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-[#425ACA] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 md:text-base"
              >
                Submit <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </form>
        </DialogBody>
      </div>
    </Dialog>
  )
}