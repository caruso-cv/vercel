'use client'
import { useState } from 'react'
import { Dialog, DialogTitle, DialogBody } from '@/components/careers/Dialog'
import FileInput from '@/components/careers/FileInput'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'

export default function ApplyModal({ isOpen, onClose, showNotification }) {
  const jobOptions = [
    {
      name: 'General Application',
      description: 'Seeking passionate professionals experienced in battery management and energy storage solutions.',
    },
    {
      name: 'Embedded Software Engineer',
      description: 'Passionate about embedded software development? Join our innovative team and shape the future of battery management and energy storage solutions.',
    },
  ]

  const defaultPosition = jobOptions.length > 0 ? jobOptions[0].name : ''

  // Local state for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: defaultPosition,
    coverLetter: null,  // optional
    resume: null,       // required, max 5MB
  })

  // Validation errors
  const [errors, setErrors] = useState({})
  // Loading state for the submit button
  const [isSubmitting, setIsSubmitting] = useState(false)

  // For dynamic job descriptions
  const selectedJob = jobOptions.find((job) => job.name === formData.position)

  const handleChange = (e) => {
    const { name, value, files } = e.target
    if (files) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  // Basic validation
  const validateForm = (data) => {
    const newErrors = {}
    if (!data.name) newErrors.name = 'Required *'
    if (!data.email) {
      newErrors.email = 'Required *'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email)) {
      newErrors.email = 'Invalid email'
    }
    if (!data.phone) {
      newErrors.phone = 'Required *'
    } else {
      if (!/^[0-9-]+$/.test(data.phone)) {
        newErrors.phone = 'only digits & dashes allowed'
      } else {
        const digitsOnly = data.phone.replace(/-/g, '')
        if (digitsOnly.length < 10) {
          newErrors.phone = 'must have at least 10 digits'
        }
      }
    }
    if (!data.resume) {
      newErrors.resume = 'Required *'
    } else if (data.resume.size > 5 * 1024 * 1024) {
      newErrors.resume = 'File too large. Max 5MB'
    }
    return newErrors
  }

  // reCAPTCHA
  const { executeRecaptcha } = useGoogleReCaptcha()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrors({})
    setIsSubmitting(true)

    // Validate fields
    const validationErrors = validateForm(formData)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setIsSubmitting(false)
      return
    }

    // reCAPTCHA token
    let recaptchaToken = ''
    if (executeRecaptcha) {
      try {
        recaptchaToken = await executeRecaptcha('careers_form')
        console.log('Recaptcha token:', recaptchaToken)
      } catch (err) {
        console.error('Error executing reCAPTCHA:', err)
      }
    } else {
      console.error('executeRecaptcha not available')
    }

    // Build FormData
    const data = new FormData()
    data.append('name', formData.name)
    data.append('email', formData.email)
    data.append('phone', formData.phone)
    data.append('position', formData.position)
    if (formData.coverLetter) {
      data.append('coverLetter', formData.coverLetter)
    }
    data.append('resume', formData.resume)
    data.append('captchaToken', recaptchaToken)

    // POST request
    try {
      const response = await fetch('/api/careers', {
        method: 'POST',
        body: data,
      })

      if (response.ok) {
        showNotification?.({
          type: 'success',
          title: 'Application submitted!',
          message: 'Thanks for applying at Neutron Controls!',
        })
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          position: defaultPosition,
          coverLetter: null,
          resume: null,
        })
      } else {
        showNotification?.({
          type: 'error',
          title: 'Submission failed',
          message: 'Please try again later.',
        })
      }
    } catch (error) {
      console.error('Submission error:', error)
      showNotification?.({
        type: 'error',
        title: 'Submission failed',
        message: 'An unexpected error occurred. Please try again.',
      })
    } finally {
      // Always close the modal after submission attempt
      onClose()
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <div className="p-6">
        <DialogTitle className="mb-4 uppercase">Join Our Team</DialogTitle>
        <DialogBody>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-[0.875rem] leading-[1.25rem] font-medium text-gray-700"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder={errors.name === 'Required *' ? 'Required *' : ''}
                className={`mt-1 block w-full border rounded-md p-2 ${
                  errors.name ? 'border-red-500 placeholder:text-red-400' : ''
                }`}
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-[0.875rem] leading-[1.25rem] font-medium text-gray-700"
              >
                Email
                {errors.email && errors.email !== 'Required *' && (
                  <span className="ml-2 text-red-400">({errors.email})</span>
                )}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={errors.email === 'Required *' ? 'Required *' : ''}
                className={`mt-1 block w-full border rounded-md p-2 ${
                  errors.email ? 'border-red-500 placeholder:text-red-400' : ''
                }`}
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-[0.875rem] leading-[1.25rem] font-medium text-gray-700"
              >
                Phone Number
                {errors.phone && errors.phone !== 'Required *' && (
                  <span className="ml-2 text-red-400">({errors.phone})</span>
                )}
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder={errors.phone === 'Required *' ? 'Required *' : ''}
                className={`mt-1 block w-full border rounded-md p-2 ${
                  errors.phone ? 'border-red-500 placeholder:text-red-400' : ''
                }`}
              />
            </div>

            {/* Position */}
            <div>
              <label
                htmlFor="position"
                className="block text-[0.875rem] leading-[1.25rem] font-medium text-gray-700"
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
              {selectedJob?.description && (
                <div className="mt-2 text-[0.875rem] leading-[1.25rem] text-gray-600 md:pb-4">
                  {selectedJob.description}
                </div>
              )}
            </div>

            {/* Cover Letter (Optional) */}
            <div>
              <label
                htmlFor="coverLetter"
                className="block text-[0.875rem] leading-[1.25rem] font-medium text-gray-700"
              >
                Upload Cover Letter
              </label>
              <FileInput
                id="coverLetter"
                name="coverLetter"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                fileName={formData.coverLetter ? formData.coverLetter.name : ''}
              />
            </div>

            {/* Resume (Required) */}
            <div>
              <label
                htmlFor="resume"
                className="block text-[0.875rem] leading-[1.25rem] font-medium text-gray-700"
              >
                Upload Resume
                {errors.resume && (
                  <span className="ml-2 text-red-400">({errors.resume})</span>
                )}
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
                className="uppercase rounded-md text-[0.875rem] leading-[1.25rem] px-4 py-2 text-black/70 font-semibold hover:bg-gray-100"
              >
                Cancel
              </button>

              {/* If isSubmitting is true, show a spinner instead */}
              {isSubmitting ? (
                <div className="flex items-center px-3.5 py-2.5 bg-indigo-500 font-semibold uppercase text-[0.875rem] text-white rounded-md">
                  <div className="w-4 h-4 border-2 border-indigo-200 border-t-transparent rounded-full animate-spin mr-2"></div>
                  <span>Submitting...</span>
                </div>
              ) : (
                <button
                  type="submit"
                  className="rounded-md uppercase bg-[#425ACA] px-3.5 py-2.5 text-[0.875rem] leading-[1.25rem] font-semibold text-white shadow-sm hover:bg-indigo-500"
                >
                  Submit <span aria-hidden="true">&rarr;</span>
                </button>
              )}
            </div>
          </form>
        </DialogBody>
      </div>
    </Dialog>
  )
}