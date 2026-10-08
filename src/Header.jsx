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
import Navbar from "./Navbar";



export function Header() {
    return (
        <div className="text-center text-2xl flex justify-between items-center px-4 py-2 group sm:px-0 md:py-0">

            <Link to="/create"  className="sm:hidden md:hidden" ><FiPlus/></Link>

            <div className="flex items-end gap-1 ml-15 font-sansita sm:ml-0 sm:px-4 sm:font-sans sm:items-center md:hidden">
                <h1 className="font-bold">Instagram</h1>
                <IoIosArrowDown className="hidden sm:font-thin sm:pt-2 md:flex lg:flex" />
            </div>

            <div className="relative md:hidden">
                <CiSearch className="hidden sm:block absolute top-3.5 left-4 text-lg" />
                <input type="search" placeholder="Search" className="hidden  sm:block text-black bg-gray-100 px-11 py-2.5 text-base border-none outline-none rounded-full" />
            </div>

            <Link to="/likes" className="sm:hidden md:hidden lg:hidden"><FaRegHeart /></Link>

        </div >
    )
};

export function Footer() {
    return (
        <div className="text-center text-2xl flex justify-between items-center p-4 fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 sm:px-10 md:hidden">
            <Link to="/"><GoHomeFill className="cursor-pointer" /></Link>
            <Link to="/search" className="sm:hidden"><IoIosSearch className="sm:hidden cursor-pointer" /></Link>
            <Link to="/reels"><BsPlayBtn className="cursor-pointer" /></Link>
            <Link to="/create" className="hidden sm:flex"><FiPlus className="hidden sm:flex cursor-pointer" /></Link>
            <Link to="/messages"><LuSend className="cursor-pointer" /></Link>
            <Link to="/search" className="hidden sm:flex"><IoIosSearch className="hidden sm:flex cursor-pointer" /></Link>
            <Link to="/dashboard" className="hidden sm:flex"><HiOutlineChartSquareBar className="hidden sm:flex cursor-pointer" /></Link>
            <Link to="/profile"><img className="rounded-full z-2 w-7 cursor-pointer" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUy-t00mImJn20OoJQGOZ-hpNBUnrKty6pmaC96C6r_Q&s=10" alt="Story" /></Link>
        </div>
    );
};