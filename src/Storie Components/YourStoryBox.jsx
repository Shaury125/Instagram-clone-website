import { FaCirclePlus } from "react-icons/fa6";


function YourStoryBox() {
    return (
        <div className="w-20 h-25">
            <div className="w-20 h-20 rounded-full cursor-pointer">
                <img className="rounded-full w-18 relative top-1 left-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUy-t00mImJn20OoJQGOZ-hpNBUnrKty6pmaC96C6r_Q&s=10" alt="Story" />
                <FaCirclePlus className="bg-white rounded-full text-xl border-2 border-white relative bottom-4.5 left-12.5" />
            </div>
            <p className="text-center text-xs mt-1">Your Story</p>
        </div>
    );
}

export default YourStoryBox;