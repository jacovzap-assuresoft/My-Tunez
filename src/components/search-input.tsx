import { Search } from 'lucide-react'

const SearchInput = () => {
  return (
    <div className='relative'>
      <Search className='absolute top-[9px] right-4' />
      <input type='text' className='w-full h-11 rounded-md bg-gray-200 px-5 text-xl border-none outline-1 outline-gray-400 transition' placeholder='Search'/>
    </div>
  )
}

export default SearchInput
