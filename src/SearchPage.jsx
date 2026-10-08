import { Footer, Header } from "./Header";
import SearchContent from "./SearchContent";
import { CiSearch } from "react-icons/ci";
import Navbar from "./Navbar";


function SearchPage() {
    return (
        <div className="md:max-w-4xl mx-auto mb-10">
            <Navbar/>
            <div className="flex justify-center items-center my-6">
                <CiSearch size={18} className="relative top-half left-8" />
                <input type="search" className="border px-10 pr-[20%] py-1.5 rounded-full outline-none" placeholder="Search" />
            </div>
            <div className="">
                <SearchContent />
                <SearchContent />
                <SearchContent />
                <SearchContent />
                <SearchContent />
            </div>
            <Footer />
        </div>
    );
}

export default SearchPage;