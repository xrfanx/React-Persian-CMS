import { useState, useEffect } from "react";
import ErrorBox from "../ErrorBox/ErrorBox";
import HotToast from "../HotToast/HotToast";
import { RxPeople } from "react-icons/rx";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineProduct } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";

// finished imports

export default function Home() {
  // استیت‌های کارت‌های آماری
  const [stats, setStats] = useState({
    usersCount: 0,
    productsCount: 0,
    ordersCount: 0,
    commentsCount: 0,
  });

  // استیت آخرین سفارش‌ها
  const [recentOrders, setRecentOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const MAIN_URL = "http://localhost:3000/api";

  // دریافت اطلاعات آمار و آخرین سفارش‌ها از API

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);

        const [usersRes, productsRes, ordersRes, commentsRes] =
          await Promise.all([
            fetch(`${MAIN_URL}/users/`),
            fetch(`${MAIN_URL}/products/`),
            fetch(`${MAIN_URL}/orders/`),
            fetch(`${MAIN_URL}/comments/`),
          ]);

        const users = usersRes.ok ? await usersRes.json() : [];
        const products = productsRes.ok ? await productsRes.json() : [];
        const orders = ordersRes.ok ? await ordersRes.json() : [];
        const comments = commentsRes.ok ? await commentsRes.json() : [];

        // آپدیت تعداد آمارها
        setStats({
          usersCount: Array.isArray(users) ? users.length : 0,
          productsCount: Array.isArray(products) ? products.length : 0,
          ordersCount: Array.isArray(orders) ? orders.length : 0,
          commentsCount: Array.isArray(comments) ? comments.length : 0,
        });

        // گرفتن ۵ سفارش آخر
        if (Array.isArray(orders)) {
          setRecentOrders(orders.slice(0, 5));
          // ممکنه سفارش بیشتر از 5 تا باشد پس فقط تا 5 تای انهارو  نشون میدیم
        }
      } catch (error) {
        console.error("خطا در دریافت اطلاعات داشبورد:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="w-full min-h-screen text-white">
      <HotToast />

      {/* ۱. کارت‌های آماری (۴ کارت) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 mb-4">
        {/* کارت کاربران */}
        <div className="bg-(--purple) w-full p-6 rounded-2xl flex flex-col justify-between">
          <span className="text-(--white) text-lg">تعداد کاربران</span>
          <div className="flex items-center justify-between mt-4">
            <span className="text-3xl font-extrabold">
              {loading ? (
                <div className="animate-spin w-6 h-6 border-4 border-white border-t-transparent rounded-full" />
              ) : (
                stats.usersCount
              )}
            </span>
            <span className="bg-white/10 p-3 rounded-xl">
              <RxPeople className="w-6 h-6" />
            </span>
          </div>
        </div>

        {/* کارت محصولات */}
        <div className="bg-(--purple) p-6 rounded-2xl shadow-lg border border-purple-400/20 flex flex-col justify-between">
          <span className="text-purple-200 text-sm font-medium">
            تعداد محصولات
          </span>
          <div className="flex items-center justify-between mt-4">
            <span className="text-3xl font-extrabold">
              {loading ? (
                <div className="animate-spin w-6 h-6 border-4 border-white border-t-transparent rounded-full" />
              ) : (
                stats.productsCount
              )}
            </span>
            <span className="bg-white/10 p-3 rounded-xl">
              <AiOutlineProduct className="w-6 h-6" />
            </span>
          </div>
        </div>

        {/* کارت سفارشات */}
        <div className="bg-(--purple) p-6 rounded-2xl shadow-lg border border-purple-400/20 flex flex-col justify-between">
          <span className="text-purple-200 text-sm font-medium">
            تعداد سفارشات
          </span>
          <div className="flex items-center justify-between mt-4">
            <span className="text-3xl font-extrabold">
              {loading ? (
                <div className="animate-spin w-6 h-6 border-4 border-white border-t-transparent rounded-full" />
              ) : (
                stats.ordersCount
              )}
            </span>
            <span className="bg-white/10 p-3 rounded-xl">
              <FiShoppingCart className="w-6 h-6" />
            </span>
          </div>
        </div>

        {/* کارت کامنت‌ها */}
        <div className="bg-(--purple) p-6 rounded-2xl shadow-lg border border-purple-400/20 flex flex-col justify-between">
          <span className="text-purple-200 text-sm font-medium">
            تعداد کامنت‌ها
          </span>
          <div className="flex items-center justify-between mt-4">
            <span className="text-3xl font-extrabold">
              {loading ? (
                <div className="animate-spin w-6 h-6 border-4 border-white border-t-transparent rounded-full" />
              ) : (
                stats.commentsCount
              )}
            </span>
            <span className="bg-white/10 p-3 rounded-xl">
              <FaRegCommentDots className="w-6 h-6" />
            </span>
          </div>
        </div>
      </div>

      {/* ۲. بخش آخرین سفارش‌ ها */}
      <div className="bg-(--purple) w-full min-h-110 rounded-tr-4xl rounded-bl-4xl p-6">
        {recentOrders.length === 0 ? (
          <ErrorBox error="هیچ سفارشی یافت نشد" className={"-mt-6"} />
        ) : (
          <div className="overflow-x-auto">
            <h2 className="text-xl font-bold mb-6 border-b border-purple-400/30 pb-3">
              آخرین سفارش‌ ها
            </h2>
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="border-b border-purple-300 text-purple-200">
                  <th className="p-3">شناسه</th>
                  <th className="p-3">خریدار / محصول</th>
                  <th className="p-3">مبلغ</th>
                  <th className="p-3">تاریخ</th>
                  <th className="p-3">وضعیت</th>
                </tr>
              </thead>
              <tbody>
                {[...recentOrders].reverse().map((order, index) => (
                  <tr
                    key={order.id || index}
                    className="border-b border-purple-400/30 hover:bg-white/5 transition"
                  >
                    <td className="p-3">{order.id}</td>
                    <td className="p-3 font-semibold">
                      {order.username + " / " + order.productTitle}
                    </td>
                    <td className="p-3 text-yellow-400 font-mono">
                      {order.price.toLocaleString()} تومان
                    </td>
                    <td className="p-3 text-sm text-purple-200">
                      {order.date}
                    </td>
                    <td className="p-3">
                      <span
                        className={`px-3 py-2 rounded-full inline-block w-25 text-center text-xs font-bold ${
                          order.isActive === 1
                            ? "bg-emerald-500/50 text-emerald-300 border border-emerald-500"
                            : "bg-amber-500/50 text-amber-300 border border-amber-500"
                        }`}
                      >
                        {order.isActive === 1 ? "تایید شده" : "در حال پردازش"}
                      </span>
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
