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
import HelpPageConductor from "./pages/HelpPage";
import DashBoardConductor from "./pages/dashboard conductor/DashBoardConductor";
import DashBoardPageConductor from "./pages/dashboard conductor";
import Profile  from "./pages/Profile conductor/components/Profile";
import EditProfile from "./pages/Edit Profile conductor/components/EditProfile";
import MySchedule from "./pages/My Schedule conductor/MySchedule"
import Emergency from "./pages/Emergancy conductor/components/Emergency"



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
        
        <Route path="/" element={<DashBoardPageConductor/>} />
        <Route path="/Profile" element={<Profile/>} />
        <Route path="/EditProfile" element={<EditProfile/>} />
        <Route path="/MySchedule" element={<MySchedule/>} />
        <Route path="/Emergency" element={<Emergency/>} />
        <Route path="/HelpPage" element={<HelpPageConductor/>} />
      </Routes>
        
         
      </div>
    </div>
    
  );
}

export default App;
