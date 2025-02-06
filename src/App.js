import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home';
import Footerbox from './Footerbox';
import BestSeller from './BestSeller';
import Newdrops from './Newdrops';
import About from './About';
import Allcolection from './Allcolection'
import AddtoFev from './AddtoFev'
import FindaStore from './FindaStore'





const App = () => {
  return (
   <>  <Router>
        <NavBar/>
        <Routes>

        <Route path="/" element={<Home/>} />


        <Route path="BestSeller" element={<BestSeller/>} />


        
        <Route path="Newdrops" element={<Newdrops/>} />
        <Route path="About" element={<About/>} />
        <Route path="Allcolection" element={<Allcolection/>} />

        <Route path="AddtoFev" element={<AddtoFev/>} />
        <Route path="FindaStore" element={<FindaStore/>} />



       






            </Routes>
            
            <Footerbox/>
            </Router>
  </>

  )
}

export default App;
