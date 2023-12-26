import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
// import MusicToolbar from '../components/music-toolbar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen bg-red-500'>
      <div className='flex grow'>
        <Sidebar />
        <section className='flex flex-col grow'>
          <Navbar />
          <Outlet />
        </section>
      </div>
      {/* <MusicToolbar /> */}
    </div>
  )
}

export default MainLayout
