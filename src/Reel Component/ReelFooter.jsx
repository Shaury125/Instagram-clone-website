import { FcLike } from "react-icons/fc";
import { FaRegComment } from "react-icons/fa6";
import { BiRepost } from "react-icons/bi";
import { FaRegBookmark } from "react-icons/fa";




function ReelFooter() {
    return (
        <div className="mb-4">
            <div className="flex justify-between items-center p-4">
                <div className="flex justify-start items-center gap-8">
                    <div className="flex items-center gap-2 cursor-pointer">
                        <FcLike className="text-2xl" />
                        <p className="font-bold">45</p>
                    </div>

                    <div className="flex items-center gap-2 cursor-pointer">
                        <FaRegComment className="text-2xl" />
                        <p className="font-bold">5</p>
                    </div>

                    <div className="flex items-center gap-2 cursor-pointer">
                        <BiRepost className="text-3xl" />
                        <p className="font-bold">3</p>
                    </div>
                </div>
                <FaRegBookmark className="text-xl cursor-pointer" />

            </div>
            <p className="text-sm text-gray-500 px-5">9 September</p>
        </div>
    ); 
}

export default ReelFooter;