import { Routes, Route } from "react-router-dom"

import MainLayout from "./layouts/main-layout"

const App = () => {
  return (
   <Routes>
    <Route path="/" element={<MainLayout/>}>
      <Route path="/artists"/>
    </Route>
   </Routes>
  )
}

export default App
