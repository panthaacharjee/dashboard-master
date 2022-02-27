import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar"
import Sidebar from './Component/Sidebar/Sidebar'
import Overview from './Component/Body/Overview/Overview'
import Bond from "./Component/Body/Bond/Bond";
import BondAprove from "./Component/Body/Bond/BondAprove";
import Stake from "./Component/Body/Stake/Stake";
import BetSlip from "./Component/Body/BetSlip/BetSlip";
import { useState } from "react";



function App() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar=()=>{
    setSidebar(!sidebar)
  }
  return (
    <Router>
      <Navbar showSidebar={showSidebar} />
      <div className="body">
        <div className="sidebar">
          <Sidebar sidebar={sidebar} showSidebar={showSidebar} />
        </div>
        <div className="content">
          <Routes>
              <Route  exact={true} path="/"  element={<Overview/>} />
              <Route  exact={true} path="/bond"  element={<Bond/>} />
              <Route  exact={true} path="/bond/aprove"  element={<BondAprove/>} />
              <Route exact={true}  path="/stake" element={<Stake/>}/>
              <Route exact={true} path="/bet-slip" element={<BetSlip/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
