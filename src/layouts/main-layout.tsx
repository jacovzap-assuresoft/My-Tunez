import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import MusicToolbar from '../components/music-toolbar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen bg-gray-100 '>
      <div className='flex grow'>
        <Sidebar />
        <section className='flex flex-col grow overflow-y-auto max-h-screen'>
            <Navbar />
            <Outlet />
        </section>
      </div>
      <MusicToolbar />
    </div>
  )
}

export default MainLayout
