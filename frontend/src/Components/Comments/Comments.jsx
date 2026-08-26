import DeleteModal from "../DeleteModal/DeleteModal";
import ErrorBox from "../ErrorBox/ErrorBox";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Comments() {

  const btnStyle = "bg-[var(--white)] text-[var(--purpleHard)] border border-[var(--purpleHard)] outline-none rounded-lg p-2 cursor-pointer transition-all duration-300 ease-out relative items-center w-20 text-base mx-2 hover:bg-[var(--purpleHard)] hover:text-[var(--white)] hover:shadow-[0_0_0.3rem_var(--white)]";
  const btnStyleDelete = "bg-[rgb(255,39,39)] text-[var(--white)] border border-[rgb(255,39,39)] outline-none rounded-lg p-2 cursor-pointer transition-all duration-300 ease-out relative items-center w-20 text-base mx-2 hover:bg-[var(--white)] hover:text-[rgb(255,39,39)] hover:border-[rgb(255,39,39)]";
  const [allComments, setAllComments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/comments")
    .then((res) => res.json())
    .then((comments) => {
      setAllComments(comments);
    })
    .catch((err) => {
      console.log(err);
      toast.error("خطا در بارگذاری اطلاعات کامنت");
    });
  }, []);

  return (
    <div
      className="w-full bg-(--purple) min-h-96 mt-4 rounded-tr-4xl
     rounded-bl-4xl p-6"
    >
      {/* <DeleteModal /> */}

    {allComments.length ? (
      <table className="w-full bg-(--white) border-collapse text-(--purpleHard) text-center">
        <thead>
          <tr>
            <th className="py-4">نام</th>
            <th>محصول</th>
            <th className="w-50">کامنت</th>
            <th className="pl-10">تاریخ</th>
            <th>ساعت</th>
            <th>عملیات</th>
          </tr>
        </thead>

        <tbody>
          {allComments.map((comment) => (
            <tr key={comment.id}>
              <td className="py-4">{comment.userID}</td>
              <td className="py-4">{comment.productID}</td>
              <td className="py-4">
                <button className={btnStyle}>مشاهده</button>
              </td>
              <td className="py-4 pl-10">{comment.date}</td>
              <td className="py-4">{comment.hour}</td>
              <td className="py-4">
                <button className={btnStyle}>ویرایش</button>
                <button className={btnStyle}>پاسخ</button>
                <button className={btnStyle}>تایید</button>
                <button className={btnStyleDelete}>حذف</button>
              </td>
            </tr>
          ))}
          <tr>
            <td className="py-4">عرفان روزبهانی</td>
            <td className="py-4">روغن</td>
            <td className="py-4">
              <button className={btnStyle}>مشاهده</button>
            </td>
            <td className="py-4 pl-10">1405/6/1</td>
            <td className="py-4">16:11</td>
            <td className="py-4">
              <button className={btnStyle}>ویرایش</button>
              <button className={btnStyle}>پاسخ</button>
              <button className={btnStyle}>تایید</button>
              <button className={btnStyleDelete}>حذف</button>
            </td>
          </tr>
          
        </tbody>
      </table>) : (<ErrorBox error={"کامنتی یافت نشد"} />)}

    </div>
  );
}
