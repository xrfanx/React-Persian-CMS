import { useState, useEffect, useRef } from "react";

export default function ProfilePopup({ onClose }) {
  const MAIN_URL = "http://localhost:3000/api";
  const [adminInfo, setAdminInfo] = useState({});
  const popupRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchAdminInfo = async () => {
      try {
        const adminInfo = await fetch(`${MAIN_URL}/admins`, {
          headers: {
            authorization: token,
          },
        });
        console.log("status", adminInfo.status);

        const admin = await adminInfo.json();
        console.log("admin", admin);
        setAdminInfo(admin);
      } catch (error) {
        console.error("خطا در دریافت اطلاعات داشبورد:", error);
      }
    };

    fetchAdminInfo();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <>
      {/* Popup */}
      <div
        className="fixed top-20  w-80
        bg-(--white) text-(--purpleHard)
        rounded-2xl shadow-2xl p-5
        border border-purple-300/30"
        ref={popupRef}
      >
        {/* Profile Header */}
        <div className="flex flex-col items-center">
          <img
            src={adminInfo.img || "/image/noprofile.png"}
            alt="admin-profile"
            onError={(e) => {
              e.currentTarget.src = "/image/noprofile.png";
            }}
            className="w-24 h-24 rounded-full object-cover
            shadow-[0_0_0.5rem_var(--purple)]
            border-4 border-(--purple)"
          />

          <h2 className="text-xl font-bold mt-3">
            {adminInfo.firstname + " " + adminInfo.lastname}
          </h2>

          <span className="text-sm opacity-70 mt-1">{adminInfo.task}</span>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-5" />

        {/* Profile Info */}
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <span className="text-sm opacity-70">نام کاربری</span>

            <span className="font-semibold">{adminInfo.username}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm opacity-70">نقش</span>

            <span className="font-semibold">ادمین</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm opacity-70">وضعیت</span>

            <span className="text-emerald-600 font-semibold">فعال</span>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="w-full mt-6 py-2
          bg-(--purple) text-(--white)
          rounded-xl cursor-pointer
          transition-all duration-300
          hover:bg-(--purpleHard)"
        >
          بستن
        </button>
        <button
          className="w-full mt-2 py-2
          bg-(--purple) text-(--white)
          rounded-xl cursor-pointer
          transition-all duration-300
          hover:bg-(--purpleHard)"
        >
          تغییر پسورد
        </button>
        <button
          className="w-full mt-6 py-2
          bg-[rgb(255,39,39)] text-(--white)
          rounded-xl cursor-pointer border border-[rgb(255,39,39)]
          transition-all duration-300
          hover:bg-(--white) hover:text-[rgb(255,39,39)] hover:border hover:border-[rgb(255,39,39)]"
        >
          خروج از حساب کاربری
        </button>
      </div>
    </>
  );
}
