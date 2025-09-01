import {BrowserRouter,Routes,Route} from "react-router-dom"
import Homepage from "../Components/Home"
import Dashboard from "../Components/Admin"
import NewEmployee from "../Components/Admin/newemployee"
const App=()=>{ 
return(
  <>
 <BrowserRouter>
 <Routes>
    <Route path="/" element={<Homepage/>}></Route>
    <Route path="/admin" element={<Dashboard/>}></Route>
    <Route path="/newemployee" element={<NewEmployee/>}></Route>
 </Routes>
 </BrowserRouter>
  </>

)

}
export default App