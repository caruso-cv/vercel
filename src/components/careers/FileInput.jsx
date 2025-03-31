'use client'

export default function FileInput({ id, name, accept, onChange, fileName, error, errorId }) {
  const labelText =
    name === 'resume'
      ? 'Upload Resume'
      : name === 'coverLetter'
      ? 'Upload Cover Letter'
      : 'Upload File'

  return (
    <div className="mt-1">
      <label htmlFor={id} className="block">
        <span className="block text-sm font-medium text-gray-700">
          {labelText}
        </span>
        <span
          className={`cursor-pointer inline-block rounded-md px-3 py-2 text-sm font-medium mt-1 ${
            error ? 'bg-red-100 text-red-700 hover:bg-red-200' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Choose File
        </span>
        <input
          id={id}
          name={name}
          type="file"
          accept={accept}
          onChange={onChange}
          className="sr-only"
          aria-describedby={error ? errorId : undefined}
          aria-label={labelText}
        />
      </label>

      {fileName && (
        <span className="ml-2 text-sm text-gray-600">{fileName}</span>
      )}
    </div>
  )
}