import HomePage from "./HomePage";
import ReelsPage from "./ReelsPage";
import MessagePage from "./MessagePage";
import SearchPage from "./SearchPage";
import LikePage from "./LikePage"; 
import CreatPage from "./CreatPage";
import DashboardPage from "./DashboardPage";
import ProfilePage from "./ProfilePage";
import MorePage from "./MorePage";
import MetaPage from "./MetaPage";
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