import DetailsModal from "../DetailsModal/DetailsModal";
import DeleteModal from "../DeleteModal/DeleteModal";
import ErrorBox from "../ErrorBox/ErrorBox";
import { useEffect, useState } from "react";
import HotToast from "../HotToast/HotToast";
import toast from "react-hot-toast";
import EditModal from "../EditModal/EditModal";

export default function Comments() {
  const btnStyle =
    "bg-[var(--white)] text-[var(--purpleHard)] border border-[var(--purpleHard)] outline-none rounded-lg p-2 cursor-pointer transition-all duration-300 ease-out relative items-center w-20 text-base mx-2 hover:bg-[var(--purpleHard)] hover:text-[var(--white)] hover:shadow-[0_0_0.3rem_var(--white)]";
  const btnStyleDelete =
    "bg-[rgb(255,39,39)] text-[var(--white)] border border-[rgb(255,39,39)] outline-none rounded-lg p-2 cursor-pointer transition-all duration-300 ease-out relative items-center w-20 text-base mx-2 hover:bg-[var(--white)] hover:text-[rgb(255,39,39)] hover:border-[rgb(255,39,39)]";
  const [allComments, setAllComments] = useState([]);
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [mainCommentBody, setMainCommentBody] = useState("");
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [commentID, setCommentID] = useState(null);

  const closeEditModal = () => {
    setIsShowEditModal(false);
  };

  useEffect(() => {
    getAllComments();
  }, []);

  function getAllComments() {
    fetch("http://localhost:3000/api/comments")
      .then((res) => res.json())
      .then((comments) => {
        setAllComments(comments);
      })
      .catch((err) => {
        console.log(err);
        toast.error("خطا در بارگذاری اطلاعات کامنت");
      });
  }

  const closeDetailsModal = () => {
    setIsShowDetailsModal(false);
  };

  const closeDeleteModal = () => {
    setIsShowDeleteModal(false);
  };

  const deleteComment = () => {
    fetch(`http://localhost:3000/api/comments/${commentID}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("کامنت با موفقیت حذف شد");
        closeDeleteModal();
        getAllComments();
      })
      .catch((err) => {
        console.log(err);
        toast.error("خطا در حذف کامنت");
      });
  };

  const updateComment = () => {
    console.log("comment update");
    setIsShowEditModal(false);
  };

  return (
    <div
      className="w-full bg-(--purple) min-h-60 mt-4 rounded-tr-4xl
     rounded-bl-4xl p-6"
    >
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
                  <button
                    className={btnStyle}
                    onClick={() => {
                      setIsShowDetailsModal(true);
                      setMainCommentBody(comment.body);
                    }}
                  >
                    مشاهده
                  </button>
                </td>
                <td className="py-4 pl-10">{comment.date}</td>
                <td className="py-4">{comment.hour}</td>
                <td className="py-4">
                  <button
                    className={btnStyle}
                    onClick={() => {
                      setIsShowEditModal(true);
                      setMainCommentBody(comment.body);
                    }}
                  >
                    ویرایش
                  </button>
                  <button className={btnStyle}>پاسخ</button>
                  <button className={btnStyle}>تایید</button>
                  <button
                    className={btnStyleDelete}
                    onClick={() => {
                      setIsShowDeleteModal(true);
                      setCommentID(comment.id);
                    }}
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <ErrorBox error={"کامنتی یافت نشد"} className={"-mt-6"} />
      )}

      {isShowDetailsModal && (
        <DetailsModal onHide={closeDetailsModal}>
          <div className="bg-(--white) p-4 min-w-2xl min-h-12 rounded-tr-4xl rounded-bl-4xl">
            <p className="text-center text-(--purpleHard) text-xl">
              {mainCommentBody}
            </p>
          </div>
        </DetailsModal>
      )}

      {isShowDeleteModal && (
        <DeleteModal onCancel={closeDeleteModal} onConfirm={deleteComment} />
      )}

      {isShowEditModal && (
        <EditModal onClose={closeEditModal} onSubmit={updateComment}>
          <div
            className="flex flex-col items-center gap-4 text-4
           bg-(--white) w-3/5 rounded-tr-4xl rounded-bl-4xl p-4"
            onClick={(event) => event.stopPropagation()}
          >
            <h1 className="items-center text-(--purpleHard) text-2xl">
              ویرایش کامنت
            </h1>
            <textarea
              name=""
              id=""
              value={mainCommentBody}
              onChange={(event) => setMainCommentBody(event.target.value)}
              className="border-0 outline-none bg-transparent text-(--purpleHard)
             placeholder:text-(--purple) border-b border-(--purpleHard) w-full resize-none"
            />
            <button className="bg-(--purple) text-(--white) border-0 outline-none rounded-lg p-2 cursor-pointer transition-all duration-300 ease-out mt-4 items-center w-40 text-[1.2rem] hover:bg-(--purpleHard) hover:text-(--white)">
              ثبت ویرایش
            </button>
          </div>
        </EditModal>
      )}
      <HotToast />
    </div>
  );
}
