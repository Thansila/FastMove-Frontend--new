
import { Route, Routes } from "react-router-dom"

import Footer from "./components/footer/Footer";
import HelpPageConductor from "./pages/HelpPage conductor/HelpPage";
import DashBoardConductor from "./pages/dashboard conductor/DashBoardConductor";
import DashBoardPageConductor from "./pages/dashboard conductor";
import ProfilePage from "./pages/Profile conductor";
import EditProfile from "./pages/Edit Profile conductor/components/EditProfile";
import MySchedulePage from "./pages/My Schedule conductor/components/MySchedule"
import EmergencyPage from "./pages/Emergancy conductor";
import ScanPage from "./pages/scan conductor/Scan"


function App() {
  return (
    <div className="App">
      <div >
      <Routes>

        
        <Route path="/" element={<DashBoardPageConductor/>} />
        <Route path="/Scan" element={<ScanPage/>} />
        <Route path="/Profile" element={<ProfilePage/>} />
        <Route path="/MySchedule" element={<MySchedulePage/>} />
        <Route path="/Emergency" element={<EmergencyPage/>} />
        <Route path="/HelpPage" element={<HelpPageConductor/>} />

      </Routes>
        
         
      </div>
    </div>
    
  );
}

export default App;
