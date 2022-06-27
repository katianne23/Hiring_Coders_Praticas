import { Routes as WrapperRoutes, BrowserRouter, Route} from "react-router-dom";
import Contato from "./pages/Contato";
import Home from "./pages/Home";
function Routes(){
  return(
  <WrapperRoutes>
    <BrowserRouter>
      <Route path="/" element={<Home />}/>
      <Route path="/contato/:nome" element={<Contato />}/>
    </BrowserRouter>
  </WrapperRoutes>
  )

}

export default Routes;