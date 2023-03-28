import MainPage from "./pages/mainpage/MainPage";

import ViewBusPage from "./pages/ViewBusPage";
import { Route, Routes } from "react-router-dom"
import HelpPage from "./pages/HelpPage";

import Homepage from "./pages/Homepage/Homepage";
import DashBoard from "./pages/dashboard/DashBoard";
import DashBoardPage from "./pages/dashboard";

import Footer from "./components/footer/Footer";
import HelpPageConductor from "./pages/HelpPage";
import DashBoardConductor from "./pages/dashboard conductor/DashBoardConductor";
import DashBoardPageConductor from "./pages/dashboard conductor";
import ProfilePage from "./pages/Profile conductor";
import EditProfile from "./pages/Edit Profile conductor/components/EditProfile";
import MySchedule from "./pages/My Schedule conductor/MySchedule"
import EmergencyPage from "./pages/Emergancy conductor";



function App() {
  return (
    <div className="App">
      <div >
      <Routes>

        
        <Route path="/" element={<DashBoardPageConductor/>} />
        <Route path="/Profile" element={<ProfilePage/>} />
        <Route path="/EditProfile" element={<EditProfile/>} />
        <Route path="/MySchedule" element={<MySchedule/>} />
        <Route path="/Emergency" element={<EmergencyPage/>} />
        <Route path="/HelpPage" element={<HelpPageConductor/>} />
      </Routes>
        
         
      </div>
    </div>
    
  );
}

export default App;
