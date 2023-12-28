const Logo = () => {
  return (
    <div className="flex gap-6 items-center hover:cursor-pointer select-none group">
      <img
        src='favicon.svg'
        alt=''
        className=' rotate-[-90deg] group-hover:rotate-[0] transition rounded-full w-14 h-14'
      />
      <h1 className="text-red-600 font-black text-2xl ">My Tunez</h1>
    </div>
  )
}

export default Logo
