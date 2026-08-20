import './Sidebar.css'
import { IoHomeOutline } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { FaRegComment } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { IoBasketOutline } from "react-icons/io5";
import { MdOutlineLocalOffer } from "react-icons/md";
import { Link } from 'react-router-dom';


export default function Sidebar() {
  return (
    <div className='sidebar'>
        <h1 className='sidebar-title'>به داشبورد خود خوش آمدید</h1>

        <ul className='sidebar-links'>
            <li>
                <Link to={"/"}>
                    <IoHomeOutline />
                     صفحه اصلی
                </Link>
                
            </li>
            <li className='active'>
                <Link to={"/products"}>
                    <SlBasket />
                    محصولات
                </Link>
            </li>
            <li>
                <Link to={"/comments"}>
                    <FaRegComment />
                    کامنت‌ ها
                </Link>
            </li>
            <li>
                <Link to={"/users"}>
                    <LuUsers />
                    کاربران
                </Link>
            </li>
            <li>
                <Link to={"/orders"}>
                    <IoBasketOutline />
                    سفارشات
                </Link>
            </li>
            <li>
                <Link to={"/offs"}>
                    <MdOutlineLocalOffer />
                    تخفیف ها
                </Link>
            </li>
        </ul>   
    </div>
  )
}
