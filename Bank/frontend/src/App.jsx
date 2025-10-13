import {BrowserRouter,Routes,Route} from "react-router-dom"
import Homepage from "../Components/Home"
import Dashboard from "../Components/Admin"
import NewEmployee from "../Components/Admin/newemployee"
import Branding from "../Components/Admin/Branding"

const App=()=>{ 
return(
  <>
 <BrowserRouter>
 <Routes>
    <Route path="/" element={<Homepage/>}></Route>
    <Route path="/admin" element={<Dashboard/>}></Route>
    <Route path="/newemployee" element={<NewEmployee/>}></Route>
    <Route path="/newemployee/branding" element={<Branding/>}></Route>

 </Routes>
 </BrowserRouter>
  </>

)

}
export default App