import TextInput from './search-input'

const Navbar = () => {
  return (
    <nav className='bg-gray-100 h-20 p-5'>
      <div className='w-[500px]'>
        <TextInput />
      </div>
    </nav>
  )
}

export default Navbar
