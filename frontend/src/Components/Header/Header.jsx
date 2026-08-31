import { IoSearch } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { CiBrightnessUp } from "react-icons/ci";

export default function Header() {

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark");
};

  return (
    <div className="sticky top-0 z-10 flex flex-col md:flex-row justify-between items-center w-full p-4 bg-(--purple) text-(--white) h-auto md:h-20 gap-4 md:gap-0 rounded-tr-4xl rounded-bl-4xl">
      <div className="flex items-center gap-4">
        <img
          className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover shadow-[0_0_0.3rem_var(--white)] transition-all duration-300 ease-in-out"
          src="/image/profile.webp"
          alt="admin-profile"
        />
        <div className="flex flex-col">
          <h1 className="text-lg md:text-[1.3rem] font-bold">عرفان روزبهانی</h1>
          <h3 className="text-sm md:text-base">برنامه نویس فرانت اند</h3>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 w-full md:w-auto">
        <div className="flex items-center gap-2 bg-(--white) rounded-tr-[0.8rem] rounded-bl-[0.8rem] p-2 w-full max-w-xs md:w-80">
          <input
            className="w-full border-0 outline-none bg-transparent text-(--purpleHard)
             text-base placeholder:text-(--purple)"
            type="text"
            placeholder="جستجو ..."
          />
          <button className="flex justify-center items-center shrink-0 text-center bg-(--purple)
            top-0 text-(--white) rounded-lg outline-none border-0 cursor-pointer w-14 h-7 
            transition-all duration-300 ease-out hover:bg-(--purpleHard) hover:border hover:border-(--purpleHard)
             hover:text-(--white)">
            <IoSearch className="w-5 h-5 transition-all duration-300 ease-out hover:rotate-[-25deg]" />
          </button>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <button className="bg-(--white) rounded-full w-10 h-10 flex items-center justify-center cursor-pointer transition-all duration-300 ease-out border-0 outline-none text-(--purpleHard) hover:bg-(--purpleHard) hover:text-(--white) hover:border hover:border-(--purpleHard) hover:shadow-[0_0_0.3rem_var(--purpleHard)] hover:rotate-45">
            <FaRegBell />
          </button>
          <button className="bg-(--white) rounded-full w-10 h-10 flex items-center
           justify-center cursor-pointer transition-all duration-300 ease-out border-0 outline-none
            text-(--purpleHard) hover:bg-(--purpleHard) hover:text-(--white)
             hover:border hover:border-(--purpleHard) hover:shadow-[0_0_0.3rem_var(--purpleHard)] hover:rotate-45"
             onClick={toggleDarkMode}
             >
            <CiBrightnessUp className="scale-[1.2]" />
          </button>
        </div>
      </div>
    </div>
  );
}