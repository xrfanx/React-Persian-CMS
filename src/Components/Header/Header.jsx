import "./Header.css";
import { IoSearch } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { CiBrightnessUp } from "react-icons/ci";

export default function Header() {
  return (
    <div className="header">
      <div className="admin-profile">
        <img src="/image/profile.webp" alt="admin-profile" />
        <div className="admin-profile-info">
          <h1>عرفان روزبهانی</h1>
          <h3>برنامه نویس فرانت اند</h3>
        </div>
      </div>

      <div className="header-left-section">
        <div className="search-box">
          <input type="text" placeholder="جستجو ..." />
          <button>
            <IoSearch className="IoSearch"/>
          </button>
        </div>

        <button className="header-left-icon">
          <FaRegBell />
        </button>
        <button className="header-left-icon">
          <CiBrightnessUp className="CiBrightnessUp"/>
        </button>
      </div>
    </div>
  );
}
