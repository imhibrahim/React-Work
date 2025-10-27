import {BrowserRouter,Routes,Route,Navigate } from "react-router-dom"
import Homepage from "../Components/Home"
import Dashboard from "../Components/Admin"
import NewEmployee from "../Components/Admin/newemployee"
import Branding from "../Components/Admin/Branding"
import HomeLayout from "../Components/Layout/HomeLayout"
import NewTransection from "../Components/shared/Newtransection"

const App=()=>{ 
   const role = localStorage.getItem("role");
return(
  <>
 <BrowserRouter>
 <Routes>
    <Route path="/" element={<Homepage/>}></Route>
    {/* <Route path="/admin" element={<Dashboard/>}></Route> */}
    <Route path="/admin" element={role === "admin" ? <Dashboard /> : <Navigate to="/" replace />}/>
    <Route path="/newemployee" element={<NewEmployee/>}></Route>
    <Route path="/newemployee/branding" element={<Branding/>}></Route>
    <Route path="/user" element={<NewTransection/>}></Route>

 </Routes>
 </BrowserRouter>
  </>
 
)

}
export default App