import { IoSearch } from "react-icons/io5"

const SearchInput = () => {
  return (
    <div className='relative'>
      <IoSearch className='absolute top-[9px] right-4' />
      <input type='text' className='w-full h-11 rounded-md bg-gray-200 px-5 text-xl border-none outline-1 outline-gray-300 transition' placeholder='Search'/>
    </div>
  )
}

export default SearchInput
