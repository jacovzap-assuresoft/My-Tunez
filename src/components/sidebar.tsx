import { Link, useLocation } from 'react-router-dom'
import { Home, Radio } from 'lucide-react'

import Logo from './logo'

const Sidebar = () => {
  const location = useLocation()

  const principalRoutes = [
    {
      path: '/',
      name: 'home',
      label: 'Home',
      icon: <Home />
    },
    {
      path: '/browse',
      name: 'browse',
      label: 'Browse',
      icon: <Radio />
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
    <aside className='flex flex-col w-80 px-10 py-7 gap-10'>
      <section className='flex items-center justify-start'>
        <Logo />
      </section>
      <section className='flex flex-col gap-2'>
        {principalRoutes.map(route => (
          <Link to={route.path} >
            <div
              className={`${
                location.pathname === route.path ? 'bg-gray-200 text-gray-900' : 'text-gray-600'
              } flex items-center gap-3 w-full h-12 px-4 rounded-md transition hover:text-gray-900 `}
            >
              {route.icon}
              <p className={`${
                location.pathname === route.path ? 'font-bold' : 'font-normal'
              }`}>{route.label}</p>
            </div>
          </Link>
        ))}
      </section>
      <section className='flex flex-col gap-2 p-2'>
        <h3 className='font-bold mb-3'>YOUR LIBRARY</h3>
        {libraryRoutes.map(route => (
          <Link to={route.path} >
            <div
              className={`${
                location.pathname === route.path ? 'bg-gray-200 text-gray-900' : 'text-gray-600'
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
