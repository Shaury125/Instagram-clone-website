import { AiFillSound } from "react-icons/ai";
import ReelHeader from "./ReelHeader";

function Reel() {
    return (
        <div className="relative">
            <div>
                <div className="absolute top-2 w-full">
                    <ReelHeader />
                </div>
                <img className="w-full h-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEJAzu5aTrvg0yPTkww7slPkkHuIjxHKsxRnF6YOnvsQ&s=10" alt="image" />
                <div className="text-xl flex justify-end px-5" >
                    <div className="relative">
                        <AiFillSound className="absolute bottom-5 right-1 cursor-pointer" />
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default Reel;