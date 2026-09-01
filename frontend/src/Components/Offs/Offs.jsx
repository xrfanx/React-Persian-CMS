import { useState, useEffect } from "react";
import ErrorBox from "../ErrorBox/ErrorBox";
import HotToast from "../HotToast/HotToast";
import { toast } from "react-hot-toast";

export default function Offs() {
  const [offs, setOffs] = useState([]);
  
  // استیت‌های فرم ثبت کد تخفیف جدید
  const [code, setCode] = useState("");
  const [percent, setPercent] = useState("");
  const [expireDate, setExpireDate] = useState("");

  const MAIN_URL = "http://localhost:3000/api/offs";

  // 1. دریافت تمامی کدهای تخفیف (Get all Offs)
  const getAllOffs = async () => {
    try {
      const res = await fetch(`${MAIN_URL}/`);
      if (res.ok) {
        const data = await res.json();
        setOffs(data);
      }
    } catch (error) {
      console.error("خطا در دریافت لیست کدهای تخفیف:", error);
    }
  };

  useEffect(() => {
    getAllOffs();
  }, []);

  // 2. ایجاد کد تخفیف جدید (Add New Off)
  const handleCreateOff = async (e) => {
    e.preventDefault();

    if (!code || !percent) {
      toast.error("لطفاً تمامی فیلدهای ضروری را پر کنید.");
      return;
    }

    const newOffData = {
      code,
      percent,
      expireDate: expireDate || "بدون انقضا",
      isActive: 0,
    };

    try {
      const res = await fetch(`${MAIN_URL}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newOffData),
      });

      if (res.ok) {
        getAllOffs();
        setCode("");
        setPercent("");
        setExpireDate("");
      }
    } catch (error) {
      console.error("خطا در ایجاد کد تخفیف:", error);
    }
  };

  // 3. حذف کد تخفیف (Delete Main Off)
  const handleDeleteOff = async (offID) => {
    try {
      const res = await fetch(`${MAIN_URL}/${offID}`, {
        method: "DELETE",
      });

      if (res.ok) {
        getAllOffs();
        toast.success("کد تخفیف با موفقیت حذف شد!");
      }
    } catch (error) {
      console.error("خطا در حذف کد تخفیف:", error);
      toast.error("خطا در حذف کد تخفیف");
    }
  };

  // 4. فعال / غیرفعال‌سازی کد تخفیف (Accept / Reject Main Off Code)
  const handleToggleOffStatus = async (offID, currentStatus) => {
    const newStatus = currentStatus === 1 ? 0 : 1;

    try {
      const res = await fetch(`${MAIN_URL}/active-off/${offID}/${newStatus}`, {
        method: "PUT",
      });

      if (res.ok) {
        getAllOffs();
        toast.success("وضعیت کد تخفیف با موفقیت تغییر یافت!");
      }
    } catch (error) {
      console.error("خطا در تغییر وضعیت کد تخفیف:", error);
      toast.error("خطا در تغییر وضعیت کد تخفیف");
    }
  };

  return (
    <div className="w-full min-h-screen p-4 text-white">
      <HotToast />

      <div className="bg-(--purple) p-6 rounded-2xl mb-8 shadow-lg">
        <h2 className="text-xl font-bold mb-4 border-b border-purple-400 pb-2">
          افزودن کد تخفیف جدید
        </h2>
        <form onSubmit={handleCreateOff} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm mb-1">کد تخفیف</label>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="مثلا: OFF50"
              className="w-full p-2.5 rounded-lg bg-white/10 border border-purple-300 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">درصد تخفیف</label>
            <input
              type="number"
              value={percent}
              onChange={(e) => setPercent(e.target.value)}
              placeholder="مثلا: 20"
              className="w-full p-2.5 rounded-lg bg-white/10 border border-purple-300 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">تاریخ انقضا</label>
            <input
              type="text"
              value={expireDate}
              onChange={(e) => setExpireDate(e.target.value)}
              placeholder="1403/05/20"
              className="w-full p-2.5 rounded-lg bg-white/10 border border-purple-300 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <div className="md:col-span-2 lg:col-span-4 flex justify-end mt-2">
            <button
              type="submit"
              className="bg-white text-purple-900 font-bold px-6 py-2.5 rounded-xl hover:bg-purple-100 transition duration-200 cursor-pointer"
            >
              افزودن تخفیف
            </button>
          </div>
        </form>
      </div>

      {/* نمایش جدول یا پیغام عدم وجود داده */}
      <div className="bg-(--purple) w-full min-h-96 rounded-tr-4xl rounded-bl-4xl p-6 shadow-xl">
        

        {offs.length === 0 ? (
          <ErrorBox error="هیچ تخفیفی یافت نشد" className="-mt-6" />
        ) : (
          <div className="overflow-x-auto">
            <h2 className="text-xl font-bold mb-6">لیست کدهای تخفیف</h2>
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="border-b border-purple-300 text-purple-200">
                  <th className="p-3">شناسه</th>
                  <th className="p-3">کد تخفیف</th>
                  <th className="p-3">درصد</th>
                  <th className="p-3">محصول</th>
                  <th className="p-3">تاریخ انقضا</th>
                  <th className="p-3">وضعیت</th>
                  <th className="p-3 text-center">عملیات</th>
                </tr>
              </thead>
              <tbody>
                {offs.map((off, index) => (
                  <tr key={off._id || off.id} className="border-b border-purple-400/30 hover:bg-white/5 transition">
                    <td className="p-3">{index + 1}</td>
                    <td className="p-3 font-mono font-bold text-yellow-300">{off.code}</td>
                    <td className="p-3">{off.percent}%</td>
                    <td className="p-3">{off.product}</td>
                    <td className="p-3">{off.expireDate || "نامشخص"}</td>
                    <td className="p-3">
                      <span className={`px-2 py-1 rounded text-xs ${off.isActive === 1 ? "bg-green-500" : "bg-red-500"}`}>
                        {off.isActive === 1 ? "تایید شده" : "رد شده / غیرفعال"}
                      </span>
                    </td>
                    <td className="p-3 text-center space-x-2 space-x-reverse">
                      <button
                        onClick={() => handleToggleOffStatus(off._id || off.id, off.isActive)}
                        className={`px-3 py-1 rounded-lg text-sm transition cursor-pointer ${
                          off.isActive === 1
                            ? "bg-amber-500 hover:bg-amber-600"
                            : "bg-emerald-600 hover:bg-emerald-700"
                        }`}
                      >
                        {off.isActive === 1 ? "رد کردن" : "تایید کردن"}
                      </button>
                      <button
                        onClick={() => handleDeleteOff(off._id || off.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm transition cursor-pointer"
                      >
                        حذف
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}