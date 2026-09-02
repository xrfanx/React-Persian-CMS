import ErrorBox from "../ErrorBox/ErrorBox";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import HotToast from "../HotToast/HotToast";
import DeleteModal from "../DeleteModal/DeleteModal";

export default function Orders() {

  // Styles for buttons
  const btnStyle =
    "bg-(--white) border border-(--purpleHard) outline-none rounded-lg p-2 cursor-pointer transition-all duration-300 ease-out relative items-center w-fit text-base mx-2 hover:bg-[var(--purpleHard)] hover:text-[var(--white)] hover:shadow-[0_0_0.3rem_var(--white)]";
  const btnStyleDelete =
    "bg-[rgb(255,39,39)] text-(--white) border border-[rgb(255,39,39)] outline-none rounded-lg p-2 cursor-pointer transition-all duration-300 ease-out relative items-center text-base mx-2 hover:bg-[var(--white)] hover:text-[rgb(255,39,39)] hover:border-[rgb(255,39,39)]";
  // finish styles for buttons

  // State for orders
  const [orders, setOrders] = useState([]);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [orderID, setOrderID] = useState(null);
  const [isShowSendToPostModal, setIsShowSendToPostModal] = useState(false);
  // finish state for orders
  
  // 1. Get all orders
  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/orders/");

        if (!res.ok) {
          throw new Error(`HTTP Error: ${res.status}`);
        }

        const data = await res.json();

        console.log("ORDERS FROM API:", data);

        setOrders(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Error fetching orders:", err);
        toast.error("خطا در بارگذاری سفارش ها");
      }
    };

    getOrders();
  }, []);

  // 2. Delete main order
  const deleteOrder = async (orderID) => {
    try {
      const res = await fetch(`http://localhost:3000/api/orders/${orderID}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete order");

      setOrders((prevOrders) =>
        prevOrders.filter((order) => order.id !== orderID),
      );
      toast.success("سفارش با موفقیت کنسل شد!");
    } catch (err) {
      console.error("Error deleting order:", err);
      toast.error("امکان کنسل کردن سفارش وجود ندارد.");
    }
  };

  // 3. Update order status (Accept/Reject)
  const toggleOrderStatus = async (orderID, currentStatus) => {
    const newStatus = currentStatus === 1 ? 0 : 1;
    try {
      const res = await fetch(
        `http://localhost:3000/api/orders/active-order/${orderID}/${newStatus}`,
        { method: "PUT" },
      );

      if (!res.ok) throw new Error("Failed to update status");

      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.id === orderID ? { ...order, isActive: newStatus } : order,
        ),
      );
      toast.success("وضعیت سفارش با موفقیت تغییر یافت!");
    } catch (err) {
      console.error("Error updating status:", err);
      toast.error("امکان به روز رسانی وضعیت سفارش وجود ندارد.");
    }
  };

  // 4. send to post order
    const sendToPostOrder = async (orderID) => {
    try {
      const res = await fetch(`http://localhost:3000/api/orders/${orderID}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete order");

      setOrders((prevOrders) =>
        prevOrders.filter((order) => order.id !== orderID),
      );
      toast.success("سفارش به پست ارسال شد!");
    } catch (err) {
      console.error("Error deleting order:", err);
      toast.error("امکان ارسال سفارش به پست وجود ندارد.");
    }
  };

  return (
    <div className="bg-(--purple) text-(--purpleHard) mt-4 w-full h-124 rounded-tr-4xl rounded-bl-4xl p-4">
      {/* ErrorBox renders only when there are no orders */}
      {orders.length === 0 ? (
        <ErrorBox error="سفارش جدیدی یافت نشد." className="-mt-4" />
      ) : (
        <>
          <h1 className="text-4xl font-bold text-center text-(--white) -mt-2 mb-4">
            سفارش ها
          </h1>

          <table className="bg-(--white) w-full text-center border-collapse rounded-lg overflow-hidden">
            <thead>
              <tr>
                <th>شماره سفارش</th>
                <th>نام کاربر</th>
                <th>سفارش</th>
                <th>قیمت</th>
                <th>تعداد</th>
                <th>محبوبیت</th>
                <th>تاریخ</th>
                <th>وضعیت سفارش</th>
                <th>عملیات</th>
              </tr>
            </thead>

            <tbody>
              {[...orders].reverse().map((order, index) => (
                <tr key={order.id || index}>
                  <td className="py-4">{order.id}</td>
                  <td>
                    {order.username || order.userID || order.userId || "-"}
                  </td>
                  <td>
                    {order.productTitle ||
                      order.productName ||
                      order.title ||
                      "-"}
                  </td>
                  <td>{order.price.toLocaleString()}</td>
                  <td>{order.count}</td>
                  <td>{order.popularity ?? "-"}</td>
                  <td>{order.date || "-"}</td>
                  <td>
                    <span
                      onClick={() =>
                        toggleOrderStatus(order.id, order.isActive)
                      }
                      className="cursor-pointer font-semibold text-blue-600 hover:underline"
                    >
                      {order.isActive === 1 ? "تایید شده" : "در حال پردازش"}
                    </span>
                  </td>
                  <td>
                    <button className={btnStyle}
                    onClick={() => {
                      setIsShowSendToPostModal(true);
                      setOrderID(order.id);
                    }}
                    >ارسال به پست</button>
                    <button
                      className={btnStyleDelete}
                      onClick={() => {
                        setIsShowDeleteModal(true);
                        setOrderID(order.id);
                      }}
                    >
                      لغو سفارش
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {isShowDeleteModal && (
        <DeleteModal
          title="آیا از لغو سفارش اطمینان دارید؟"
          onCancel={() => setIsShowDeleteModal(false)}
          onConfirm={() => {
            deleteOrder(orderID);
            setIsShowDeleteModal(false);
          }}
        />
      )}
      {isShowSendToPostModal && (
        <DeleteModal
          title="آیا از ارسال سفارش به پست اطمینان دارید؟"
          onCancel={() => setIsShowSendToPostModal(false)}
          onConfirm={() => {
            sendToPostOrder(orderID);
            setIsShowSendToPostModal(false);
          }}
        />
      )}


      <HotToast />
    </div>
  );
}
