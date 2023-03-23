import MainPage from "./pages/mainpage/MainPage";
import BusReg from "./pages/busReg/BusReg";
import ViewBusPage from "./pages/ViewBusPage";
import { Route, Routes } from "react-router-dom"
import HelpPage from "./pages/HelpPage";
import BusRoute from "./pages/busReg/BusReg";
import Homepage from "./pages/Homepage/Homepage";
import DashBoard from "./pages/dashboard/DashBoard";
import DashBoardPage from "./pages/dashboard";
import BusRegPage from "./pages/busReg";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div className="App">
      <div >
      <Routes>
        <Route path="/" element={<DashBoardPage/>} />
        <Route path="/BusReg" element={<BusRegPage/>} />
        <Route path="/ViewBuses" element={<ViewBusPage/>} />
        <Route path="/HelpPage" element={<HelpPage/>} />
        <Route path="/route" element={<BusRoute name="Colombo-Kandy"/>} />
        <Route path="/route_1" element={<BusRoute name="Colombo-Kalutara"/>} />
      </Routes>
        
         
      </div>
    </div>
    
  );
}

export default App;
