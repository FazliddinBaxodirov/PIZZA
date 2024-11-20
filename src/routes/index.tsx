import { Route, Routes } from "react-router-dom"
import { Home, Save } from "../pages"

const CustomRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/save" element={<Save/>}/>
    </Routes>
  )
}

export default CustomRoutes