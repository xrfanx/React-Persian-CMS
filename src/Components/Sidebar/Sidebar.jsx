import { IoHomeOutline } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { FaRegComment } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { IoBasketOutline } from "react-icons/io5";
import { MdOutlineLocalOffer } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="fixed bg-(--purple) w-56 h-screen transition-all duration-300 ease-in-out flex-1">
      <h1 className="text-(--white) text-2xl p-4 text-center border-b border-(--white)">
        به داشبورد خود خوش آمدید
      </h1>

      <ul className="list-none p-0 m-0 text-right pb-4 mb-4 flex flex-col gap-4 items-center justify-center mt-4">
        <li className="p-2 rounded-lg transition-all duration-300 ease-in-out cursor-pointer flex items-center justify-center gap-2 text-base text-[var(--white)] no-underline w-[55%] border border-[var(--white)] hover:bg-[var(--purpleHard)] first:rounded-tl-[1.2rem] first:mb-4 first:mt-2">
          <Link
            className="no-underline text-[var(--white)] flex items-center justify-between w-full"
            to={"/"}
          >
            <IoHomeOutline />
            صفحه اصلی
          </Link>
        </li>
        <li className="p-2 rounded-lg transition-all duration-300 ease-in-out cursor-pointer flex items-center justify-center gap-2 text-base text-[var(--white)] no-underline w-[55%] border border-[var(--white)] bg-[var(--purpleHard)] hover:bg-[var(--purpleHard)]">
          <Link
            className="no-underline text-[var(--white)] flex items-center justify-between w-full"
            to={"/products"}
          >
            <SlBasket />
            محصولات
          </Link>
        </li>
        <li className="p-2 rounded-lg transition-all duration-300 ease-in-out cursor-pointer flex items-center justify-center gap-2 text-base text-[var(--white)] no-underline w-[55%] border border-[var(--white)] hover:bg-[var(--purpleHard)]">
          <Link
            className="no-underline text-[var(--white)] flex items-center justify-between w-full"
            to={"/comments"}
          >
            <FaRegComment />
            کامنت‌ ها
          </Link>
        </li>
        <li className="p-2 rounded-lg transition-all duration-300 ease-in-out cursor-pointer flex items-center justify-center gap-2 text-base text-[var(--white)] no-underline w-[55%] border border-[var(--white)] hover:bg-[var(--purpleHard)]">
          <Link
            className="no-underline text-[var(--white)] flex items-center justify-between w-full"
            to={"/users"}
          >
            <LuUsers />
            کاربران
          </Link>
        </li>
        <li className="p-2 rounded-lg transition-all duration-300 ease-in-out cursor-pointer flex items-center justify-center gap-2 text-base text-[var(--white)] no-underline w-[55%] border border-[var(--white)] hover:bg-[var(--purpleHard)]">
          <Link
            className="no-underline text-[var(--white)] flex items-center justify-between w-full"
            to={"/orders"}
          >
            <IoBasketOutline />
            سفارشات
          </Link>
        </li>
        <li className="p-2 rounded-lg transition-all duration-300 ease-in-out cursor-pointer flex items-center justify-center gap-2 text-base text-[var(--white)] no-underline w-[55%] border border-[var(--white)] hover:bg-[var(--purpleHard)]">
          <Link
            className="no-underline text-[var(--white)] flex items-center justify-between w-full"
            to={"/offs"}
          >
            <MdOutlineLocalOffer />
            تخفیف ها
          </Link>
        </li>
      </ul>
    </div>
  );
}
