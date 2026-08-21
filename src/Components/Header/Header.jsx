import { IoSearch } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { CiBrightnessUp } from "react-icons/ci";

export default function Header() {
  return (
    <div className="sticky top-0 flex justify-between w-5xl p-4 bg-[var(--purple)] text-[var(--white)] h-20 rounded-tr-[2rem] rounded-bl-[2rem]">
      <div className="flex items-center gap-4">
        <img
          className="w-16 h-16 rounded-full object-cover shadow-[0_0_0.3rem_var(--white)] transition-all duration-300 ease-in-out"
          src="/image/profile.webp"
          alt="admin-profile"
        />
        <div className="flex flex-col">
          <h1 className="text-[1.3rem] font-extrabold">عرفان روزبهانی</h1>
          <h3 className="text-base">برنامه نویس فرانت اند</h3>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 bg-[var(--white)] rounded-tr-[0.8rem] rounded-bl-[0.8rem] p-2 w-80">
          <input
            className="border-0 outline-none bg-transparent text-[var(--purpleHard)] text-base placeholder:text-[var(--purple)]"
            type="text"
            placeholder="جستجو ..."
          />
          <button className="flex justify-center items-center relative bg-[var(--purple)] left-[-3rem] top-0 text-[var(--white)] rounded-lg outline-none border-0 cursor-pointer w-14 h-7 transition-all duration-300 ease-out hover:bg-[var(--purpleHard)] hover:border hover:border-[var(--purpleHard)] hover:text-[var(--white)]">
            <IoSearch className="scale-[1.2] transition-all duration-300 ease-out hover:rotate-[-25deg] hover:scale-110" />
          </button>
        </div>

        <button className="bg-[var(--white)] rounded-full w-10 h-10 flex items-center justify-center cursor-pointer transition-all duration-300 ease-out border-0 outline-none text-[var(--purpleHard)] hover:bg-[var(--purpleHard)] hover:text-[var(--white)] hover:border hover:border-[var(--purpleHard)] hover:shadow-[0_0_0.3rem_var(--purpleHard)] hover:rotate-45">
          <FaRegBell />
        </button>
        <button className="bg-[var(--white)] rounded-full w-10 h-10 flex items-center justify-center cursor-pointer transition-all duration-300 ease-out border-0 outline-none text-[var(--purpleHard)] hover:bg-[var(--purpleHard)] hover:text-[var(--white)] hover:border hover:border-[var(--purpleHard)] hover:shadow-[0_0_0.3rem_var(--purpleHard)] hover:rotate-45">
          <CiBrightnessUp className="scale-[1.2]" />
        </button>
      </div>
    </div>
  );
}
