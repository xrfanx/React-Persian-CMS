import { useState, useEffect } from "react";
import ErrorBox from "../ErrorBox/ErrorBox";
import HotToast from "../HotToast/HotToast";
import { toast } from "react-hot-toast";
import DeleteModal from "../DeleteModal/DeleteModal";

// finish imports

export default function Offs() {
  // Styles for buttons
  const btnStyle =
    "bg-(--white) text-(--purpleHard) border border-(--purpleHard) outline-none rounded-lg p-2 cursor-pointer transition-all duration-300 ease-out relative items-center w-[7rem] mx-2 hover:bg-(--purpleHard) hover:text-(--white) hover:shadow-[0_0_0.3rem_var(--white)]";
  const btnStyleDelete =
    "bg-[rgb(255,39,39)] text-(--white) border border-[rgb(255,39,39)] outline-none rounded-lg p-2 cursor-pointer transition-all duration-300 ease-out relative items-center w-[7rem] mx-2 hover:bg-[var(--white)] hover:text-[rgb(255,39,39)] hover:border-[rgb(255,39,39)]";
  // finish styles for buttons

  // State for offs
  const [offs, setOffs] = useState([]);

  // استیت‌های فرم ثبت کد تخفیف جدید
  const [code, setCode] = useState("");
  const [percent, setPercent] = useState("");
  const [expireDate, setExpireDate] = useState("");
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowDeactivateModal, setIsShowDeactivateModal] = useState(false);
  const [selectedOffID, setSelectedOffID] = useState(null);

  const MAIN_URL = "http://localhost:3000/api/offs";
  // finish state for offs

  // 1. دریافت تمامی کدهای تخفیف (Get all Offs)
  const getAllOffs = async () => {
    try {
      const res = await fetch(`${MAIN_URL}`);
      if (res.ok) {
        const data = await res.json();
        setOffs(data);
      }
    } catch (error) {
      console.error("خطا در دریافت لیست کدهای تخفیف:", error);
    }
  };

useEffect(() => {
  fetch(`${MAIN_URL}`)
    .then((res) => res.json())
    .then((data) => {
      setOffs(data);
    })
    .catch((error) => {
      console.error("خطا در دریافت لیست کدهای تخفیف:", error);
    });
}, []);

  const handleShowCreateModal = () => {
    if (!code || !percent) {
      toast.error("لطفاً تمامی فیلدهای ضروری را پر کنید.");
      return;
    }

    if (isNaN(percent) || percent <= 0 || percent > 100) {
      toast.error("درصد تخفیف باید عددی بین 1 تا 100 باشد.");
      return;
    }

    setIsShowDeleteModal(true);
  };

  // 2. ایجاد کد تخفیف جدید (Add New Off)
  const handleCreateOff = async () => {
    if (!code || !percent) {
      toast.error("لطفاً تمامی فیلدهای ضروری را پر کنید.");
      return;
    }

    if (isNaN(percent) || percent <= 0 || percent > 100) {
      toast.error("درصد تخفیف باید عددی بین 1 تا 100 باشد.");
      return;
    }

    const newOffData = {
      code,
      percent,
      date: expireDate || "بدون انقضا",
      isActive: 1,
      adminID: null,
      productID: null,
    };

    try {
      const res = await fetch(`${MAIN_URL}`, {
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
        toast.success("کد تخفیف با موفقیت اضافه شد!");
      }
    } catch (error) {
      console.error("خطا در ایجاد کد تخفیف:", error);
      toast.error("خطا در ایجاد کد تخفیف");
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

  

  // finish handleToggleOffStatus

  return (
    <div className="w-full min-h-screen text-white">
      <HotToast />

      <div className="bg-(--purple) w-full p-6 mt-4 rounded-2xl mb-4 shadow-lg">
        <h2 className="text-xl font-bold mb-4 border-b border-purple-400 pb-2">
          افزودن کد تخفیف جدید
        </h2>
        <form
          onSubmit={handleCreateOff}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
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
              type="text"
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
              placeholder="1405/12/20"
              className="w-full p-2.5 rounded-lg bg-white/10 border border-purple-300 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <div className="md:col-span-2 lg:col-span-4 flex justify-end mt-2">
            <button
              type="button"
              className="bg-white text-purple-900 font-bold px-6 py-2.5 rounded-xl hover:bg-purple-100 transition duration-200 cursor-pointer"
              onClick={handleShowCreateModal}
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
                {[...offs].reverse().map((off, index) => (
                  <tr
                    key={off._id || off.id}
                    className="border-b border-purple-400/30 hover:bg-white/5 transition"
                  >
                    <td className="p-3">{offs.length - index}</td>
                    <td className="p-3 font-bold text-yellow-400">
                      {off.code}
                    </td>
                    <td className="p-3">{off.percent}%</td>
                    <td className="p-3">{off.productTitle || "همه محصولات"}</td>
                    <td className="p-3">{off.date || "نامشخص"}</td>
                    <td className="p-3">
                      <span
                        className={`px-3 py-2 rounded text-xs inline-block w-20 text-center ${off.isActive === 1 ? "bg-green-500" : "bg-red-500"}`}
                      >
                        {off.isActive === 1 ? "تایید شده" : "غیرفعال"}
                      </span>
                    </td>
                    <td className="p-3 text-center space-x-2 space-x-reverse">
                      <button
                        onClick={() =>
                          handleToggleOffStatus(off._id || off.id, off.isActive)
                        }
                        className={btnStyle}
                      >
                        {off.isActive === 1 ? "غیر فعال کردن" : "فعال کردن"}
                      </button>
                      <button
                        onClick={() => {
                          setIsShowDeactivateModal(true);
                          setSelectedOffID(off._id || off.id);
                        }}
                        className={btnStyleDelete}
                      >
                        لغو کد تخفیف
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      {isShowDeleteModal && (
        <DeleteModal
          title="آیا از ثبت کردن کد تخفیف جدید اطمینان دارید؟"
          onCancel={() => setIsShowDeleteModal(false)}
          onConfirm={() => {
            setIsShowDeleteModal(false);
            handleCreateOff();
          }}
        />
      )}
      {isShowDeactivateModal && (
        <DeleteModal
          title="آیا از غیرفعال کردن کد تخفیف جدید اطمینان دارید؟"
          onCancel={() => setIsShowDeactivateModal(false)}
          onConfirm={() => {
            setIsShowDeactivateModal(false);
            handleDeleteOff(selectedOffID);
          }}
        />
      )}
    </div>
  );
}
