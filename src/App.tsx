import { Routes, Route } from 'react-router-dom'

import MainLayout from './layouts/main-layout'
import Albums from './pages/albums'
import Artists from './pages/artists'
import Songs from './pages/songs'
import Browse from './pages/browse'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='/albums' element={<Albums />} />
        <Route path='/artists' element={<Artists />} />
        <Route path='/songs' element={<Songs />} />
        <Route path='/browse' element={<Browse />} />
      </Route>
    </Routes>
  )
}

export default App
