import { Link, useLocation } from 'react-router-dom'
import { IoHome, IoRadio } from "react-icons/io5";

import Logo from './logo'

const Sidebar = () => {
  const location = useLocation()

  const principalRoutes = [
    {
      path: '/',
      name: 'home',
      label: 'Home',
      icon: <IoHome className='w-6 h-6' />
    },
    {
      path: '/browse',
      name: 'browse',
      label: 'Browse',
      icon: <IoRadio className='w-6 h-6'/>
    }
  ]

  const libraryRoutes = [
    {
      path: '/albums',
      name: 'albums',
      label: 'Albums'
    },
    {
      path: '/songs',
      name: 'songs',
      label: 'Songs'
    },
    {
      path: '/artists',
      name: 'artists',
      label: 'Artists'
    }
  ]

  return (
    <aside className='flex flex-col min-w-80 px-10 py-7 gap-5'>
      <section className='flex items-center justify-start mb-7'>
        <Logo />
      </section>
      <section className='flex flex-col gap-2'>
        {principalRoutes.map(route => (
          <Link to={route.path} key={route.name}>
            <div
              className={`${
                location.pathname === route.path ? 'bg-gray-50 text-gray-900' : 'text-gray-600'
              } flex items-center gap-3 w-full h-12 px-4 rounded-md transition hover:text-gray-900 `}
            >
              {route.icon}
              <p className={`${
                location.pathname === route.path ? 'font-semibold' : 'font-medium'
              }`}>{route.label}</p>
            </div>
          </Link>
        ))}
      </section>
      <section className='flex flex-col gap-2 p-2'>
        <h3 className='font-bold mb-3'>YOUR LIBRARY</h3>
        {libraryRoutes.map(route => (
          <Link to={route.path} key={route.name}>
            <div
              className={`${
                location.pathname === route.path ? 'bg-gray-50 text-gray-900' : 'text-gray-600'
              } flex items-center gap-3 w-full h-12 px-4 rounded-md transition hover:text-gray-900 `}
            >
              <p className={`${
                location.pathname === route.path ? 'font-bold' : 'font-normal'
              }`}>{route.label}</p>
            </div>
          </Link>
        ))}
      </section>
      <hr />
    </aside>
  )
}

export default Sidebar
