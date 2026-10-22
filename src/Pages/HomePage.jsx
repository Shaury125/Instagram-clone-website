import { Header } from "./Header";
import { Footer } from "./Header";
import Reels from "./Reels";
import StorySection from "./StorySection";
import { LuSend } from "react-icons/lu";
import { BsThreeDots } from "react-icons/bs";
import SideChat from "./SideChat";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";


function HomePage() {
    return (
        <div className="sm:min-h-screen md:ml-20 lg:flex">
            <Header />
            <Navbar />
            <div className="lg:max-w-[61%]">
                <StorySection />
                <Reels />
            </div>
            <Link to="/messages" className="hidden sm:flex items-center gap-3 fixed bottom-23 cursor-pointer right-10 text-2xl p-4 rounded-full shadow-xl/30 bg-white md:px-8 md:bottom-8">
                <LuSend />
                <p className="hidden md:block text-base">Messages</p>
                <BsThreeDots className="hidden md:block text-base" />
            </Link>
            <SideChat />
            <Footer />
        </div>
    )
}

export default HomePage;