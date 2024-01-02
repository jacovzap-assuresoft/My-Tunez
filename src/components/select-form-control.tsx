interface Option {
  label: string
  value: string
}


interface SelectFormControlProps {
  isRequired?: boolean
  label: string
  onSelect: (value: string) => void
  value: string
  options: Option[]
}

const SelectFormControl = ({
  label,
  isRequired,
  onSelect,
  value,
  options
}: SelectFormControlProps) => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='space-x-2'>
        {' '}
        <label htmlFor=''>{label}</label>
        {isRequired && <span className='text-red-600'>*</span>}
      </div>
      <select
        value={value}
        onChange={event => onSelect(event.target.value)}
        className='w-full h-11 rounded-md bg-gray-100 px-3 font-normal text-md border-none outline-1 outline-gray-300 transition text-gray-800'
      >
        <option value='' disabled>
          Select an option
        </option>
        {options.map((option: Option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SelectFormControl
