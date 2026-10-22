import HomePage from "./Pages/HomePage";
import ReelsPage from "./Reel Component/ReelsPage";
import MessagePage from "./Pages/MessagePage";
import SearchPage from "./Pages/SearchPage";
import LikePage from "./Pages/LikePage"; 
import CreatPage from "./Pages/CreatPage";
import DashboardPage from "./Pages/DashboardPage";
import ProfilePage from "./Pages/ProfilePage";
import MorePage from "./Pages/MorePage";
import MetaPage from "./Pages/MetaPage";
import { Routes, Route } from "react-router-dom";


function App(){
  return (
    <div className=" min-h-screen max-w-screen">
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/reels" element={<ReelsPage />} />
        <Route path="/messages" element={<MessagePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/likes" element={<LikePage />} />
        <Route path="/create" element={<CreatPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/more" element={<MorePage />} />
        <Route path="/meta" element={<MetaPage />} />
      </Routes>
    </div>
  )
};
 
export default App;