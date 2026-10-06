import { FiPlus } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { BsPlayBtn } from "react-icons/bs";
import { LuSend } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import { IoPeopleCircleSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { IoIosMenu } from "react-icons/io";
import { FaMeta } from "react-icons/fa6";
import { Link } from "react-router-dom";



export function Header() {


    return (
        <div className="text-center text-2xl flex justify-between items-center px-4 py-2 group sm:px-0 md:py-0">

            <div className="hidden md:flex flex-col items-center box-border justify-between bg-white z-1 fixed left-0 top-0 bottom-0 p-6 duration-300 hover:pr-40">
                {/* div one */}
                <div>
                    <IoLogoInstagram size={35} className="duration-700 group-hover:rotate-[1turn]" />
                </div>

                {/* div two */}
                <div className="flex flex-col gap-8">
                    <Link to="/" className="flex items-center relative gap-3 cursor-pointer group/bg">
                        <div className="absolute -left-100 px-23 py-5 rounded-lg duration-100 bg-gray-200 group-hover/bg:-left-3"></div>
                        <GoHomeFill className="text-3xl z-2" />
                        <h1 className="absolute -left-100 duration-300 text-base group-hover:left-13">Home</h1>
                    </Link>

                    <Link to="/reels" className="flex items-center relative gap-3 cursor-pointer group/bg">
                        <div className="absolute -left-100 px-23 py-5 rounded-lg duration-100 bg-gray-200 group-hover/bg:-left-3"></div>
                        <BsPlayBtn className="z-2" />
                        <h1 className="absolute -left-100 duration-300 text-base group-hover:left-13">
                            Reels
                        </h1>
                    </Link>

                    <Link to="/messages" className="flex items-center relative gap-3 cursor-pointer group/bg">
                        <div className="absolute -left-100 px-23 py-5 rounded-lg duration-100 bg-gray-200 group-hover/bg:-left-3"></div>
                        <LuSend className="z-2" />
                        <h1 className="absolute -left-100 duration-300 text-base group-hover:left-13">Messages</h1>
                    </Link>

                    <Link to="/search" className="flex items-center relative gap-3 cursor-pointer group/bg">
                        <div className="absolute -left-100 px-23 py-5 rounded-lg duration-100 bg-gray-200 group-hover/bg:-left-3"></div>
                        <IoIosSearch className="text-3xl z-2" />
                        <h1 className="absolute -left-100 duration-300 text-base group-hover:left-13">Search</h1>
                    </Link>

                    <Link to="/likes" className="flex items-center relative gap-3 cursor-pointer group/bg">
                        <div className="absolute -left-100 px-23 py-5 rounded-lg duration-100 bg-gray-200 group-hover/bg:-left-3"></div>
                        <FaRegHeart className="z-2" />
                        <h1 className="absolute -left-100 duration-300 text-base group-hover:left-13">Likes</h1>
                    </Link>

                    <Link to="/create" className="flex items-center relative gap-3 cursor-pointer group/bg">
                        <div className="absolute -left-100 px-23 py-5 rounded-lg duration-100 bg-gray-200 group-hover/bg:-left-3"></div>
                        <FiPlus className="text-3xl z-2" />
                        <h1 className="absolute -left-100 duration-300 text-base group-hover:left-13">Create</h1>
                    </Link>

                    <Link to="/dashboard" className="flex items-center relative gap-3 cursor-pointer group/bg">
                        <div className="absolute -left-100 px-23 py-5 rounded-lg duration-100 bg-gray-200 group-hover/bg:-left-3"></div>
                        <HiOutlineChartSquareBar className="text-3xl z-2" />
                        <h1 className="absolute -left-100 duration-300 text-base group-hover:left-13">Dashboard</h1>
                    </Link>

                    <Link to="/profile" className="flex items-center relative gap-3 cursor-pointer group/bg">
                        <div className="absolute -left-100 px-23 py-5 rounded-lg duration-100 bg-gray-200 group-hover/bg:-left-3"></div>
                        <img className="rounded-full z-2 w-7 cursor-pointer" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUy-t00mImJn20OoJQGOZ-hpNBUnrKty6pmaC96C6r_Q&s=10" alt="Story" />
                        <h1 className="absolute -left-100 duration-300 text-base group-hover:left-13">Profile</h1>
                    </Link>
                </div>

                {/* div three */}
                <div className="flex flex-col gap-5">
                    <Link to="/more" className="flex items-center relative gap-3 cursor-pointer group/bg">
                        <div className="absolute -left-100 px-23 py-5 rounded-lg duration-100 bg-gray-200 group-hover/bg:-left-3"></div>
                        <IoIosMenu className="text-3xl z-2" />
                        <h1 className="absolute -left-100 duration-300 text-base group-hover:left-13">More</h1>
                    </Link>

                    <Link to="/meta" className="flex items-center relative gap-3 cursor-pointer group/bg">
                        <div className="absolute -left-100 px-23 py-5 rounded-lg duration-100 bg-gray-200 group-hover/bg:-left-3"></div>
                        <FaMeta className="z-2" />
                        <h1 className="absolute -left-100 duration-300 text-base group-hover:left-13 whitespace-nowrap">Also From Meta</h1>
                    </Link>
                </div>


            </div >

            <FiPlus className="sm:hidden md:hidden" />

            <div className="flex items-end gap-1 ml-15 font-sansita sm:ml-0 sm:px-4 sm:font-sans sm:items-center md:hidden">
                <h1 className="font-bold">Instagram</h1>
                <IoIosArrowDown className="hidden sm:font-thin sm:pt-2 md:flex lg:flex" />
            </div>

            <div className="relative md:hidden">
                <CiSearch className="hidden sm:block absolute top-3.5 left-4 text-lg" />
                <input type="search" placeholder="Search" className="hidden  sm:block text-black bg-gray-100 px-11 py-2.5 text-base border-none outline-none rounded-full" />
            </div>

            <FaRegHeart className="sm:hidden md:hidden lg:hidden" />

        </div >
    )
};

export function Footer() {
    return (
        <div className="text-center text-2xl flex justify-between items-center p-4 fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 sm:px-10 md:hidden">
            <GoHomeFill className="cursor-pointer" />
            <IoIosSearch className="hidden sm:block cursor-pointer" />
            <Link to="/reels"><BsPlayBtn className="cursor-pointer" /></Link>
            <FiPlus className="hidden sm:block cursor-pointer" />
            <LuSend className="cursor-pointer" />
            <IoIosSearch className="sm:hidden cursor-pointer" />
            <HiOutlineChartSquareBar className="hidden sm:block cursor-pointer" />
            <img className="rounded-full z-2 w-7 cursor-pointer" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUy-t00mImJn20OoJQGOZ-hpNBUnrKty6pmaC96C6r_Q&s=10" alt="Story" />
        </div>
    );
};