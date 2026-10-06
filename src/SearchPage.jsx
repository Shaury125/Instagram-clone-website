import { Footer, Header } from "./Header";
import SearchContent from "./SearchContent";
import { CiSearch } from "react-icons/ci";


function SearchPage() {
    return (
        <div className="max-w-4xl mx-auto mb-10">
            <Header />
            <div className="flex justify-center items-center my-6">
                <CiSearch size={18} className="relative top-half left-8" />
                <input type="search" className="border px-10 pr-80 py-1.5 rounded-full outline-none" placeholder="Search" />
            </div>
            <div>
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