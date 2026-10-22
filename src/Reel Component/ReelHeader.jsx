import Profilebox from "./Profilebox";
import { CiMusicNote1 } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";



function ReelHeader() {
    return (
        <div className="w-full flex justify-between items-center px-4">

            <div className="flex justify-start items-center gap-2">
                <Profilebox />
                <div className="flex flex-col justify-center items-start">
                    <h1 className="text-lg font-bold cursor-pointer">amitk9771</h1>
                    <div className="flex justify-start items-center gap-1 text-sm cursor-pointer">
                        <CiMusicNote1 />
                        <p>Shaury_Sharma_125</p>
                        <p>.Bam Bam Bambai</p>
                    </div>
                </div>
            </div> 
            <CiMenuFries className="text-xl cursor-pointer"/>
        </div>
    );
}

export default ReelHeader;