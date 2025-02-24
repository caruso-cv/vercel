'use client'
import clsx from 'clsx'

export default function FileInput({ id, name, accept, onChange, fileName }) {
  return (
    <div className="mt-1">
      <label
        htmlFor={id}
        className="cursor-pointer inline-block rounded-md bg-gray-100 hover:bg-gray-200 px-3 py-2 text-sm 3xl:text-base font-medium text-gray-700 mt-1"
      >
        Choose File
      </label>
      <input
        id={id}
        name={name}
        type="file"
        accept={accept}
        onChange={onChange}
        className="hidden"
      />
      {fileName && (
        <span className="ml-2 text-sm text-gray-600">{fileName}</span>
      )}
    </div>
  )
}