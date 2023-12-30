import { useNavigate } from 'react-router-dom'

const Logo = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }
  return (
    <div
      className='flex gap-2 items-center hover:cursor-pointer select-none group'
      onClick={handleClick}
    >
      <img
        src='favicon.svg'
        alt=''
        className=' rotate-[-90deg] group-hover:rotate-[0] transition rounded-full w-12 h-12'
      />
      <h1 className='text-red-700 font-black text-[27px] '>My Tunez</h1>
    </div>
  )
}

export default Logo
