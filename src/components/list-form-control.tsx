import { X } from 'lucide-react'

import Button from './button'

interface ListFormControl {
  isRequired?: boolean
  label: string
  onAdd: () => void
  onRemove: (index: number) => void
  list: string[]
  value: string
  onInput: (value: string) => void
}

const ListFormControl = ({
  label,
  isRequired,
  value,
  list,
  onAdd,
  onRemove,
  onInput
}: ListFormControl) => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='space-x-2'>
        {' '}
        <label htmlFor=''>{label}</label>
        {isRequired && <span className='text-red-600'>*</span>}
      </div>
      <div className='p-2 w-full min-h-11 flex items-center gap-2 flex-wrap rounded-md px-3 font-normal text-md border border-gray-300 text-gray-800'>
        {list.map((item, index) => (
          <div
            className='bg-gray-100 flex rounded-sm py-1 px-2 relative group'
            key={index}
          >
            <p>{item}</p>
            <button
              type='button'
              onClick={() => onRemove(index)}
              className='bg-gray-300 flex items-center justify-center rounded-full h-4 w-4 text-black transition
               hover:bg-red-700 absolute right-[-5px] top-[-4px] opacity-0 group-hover:opacity-100 hover:text-white '
            >
              <X className='w-3 h-3 '/>
            </button>
          </div>
        ))}
      </div>
      <div className='flex space-x-3'>
        <input
          type='text'
          value={value}
          placeholder={label}
          onChange={event => onInput(event.target.value)}
          className='w-full h-11 rounded-md bg-gray-100 px-3 font-normal text-md border-none outline-1 outline-gray-200 transition text-gray-800'
        />
        <Button label={'+'} onClick={onAdd} />
      </div>
    </div>
  )
}

export default ListFormControl
