import DetailsModal from "../DetailsModal/DetailsModal";
import DeleteModal from "../DeleteModal/DeleteModal";
import ErrorBox from "../ErrorBox/ErrorBox";
import { useEffect, useState } from "react";
import HotToast from "../HotToast/HotToast";
import toast from "react-hot-toast";
import EditModal from "../EditModal/EditModal";

// finished imports

export default function Comments() {
  // styles
  const btnStyle =
    "bg-[var(--white)] text-[var(--purpleHard)] border border-[var(--purpleHard)] outline-none rounded-lg p-2 cursor-pointer transition-all duration-300 ease-out relative items-center w-20 text-base mx-2 hover:bg-[var(--purpleHard)] hover:text-[var(--white)] hover:shadow-[0_0_0.3rem_var(--white)]";
  const btnStyleDelete =
    "bg-[rgb(255,39,39)] text-[var(--white)] border border-[rgb(255,39,39)] outline-none rounded-lg p-2 cursor-pointer transition-all duration-300 ease-out relative items-center w-20 text-base mx-2 hover:bg-[var(--white)] hover:text-[rgb(255,39,39)] hover:border-[rgb(255,39,39)]";
  // finished styles

  // states
  const [allComments, setAllComments] = useState([]);
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [mainCommentBody, setMainCommentBody] = useState("");
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [commentID, setCommentID] = useState(null);
  const [isShowAcceptModal, setIsShowAcceptModal] = useState(false);
  const [isShowRejectModal, setIsShowRejectModal] = useState(false);
  // finished states

  // handling states

  const closeEditModal = () => {
    setIsShowEditModal(false);
  };

  const closeDetailsModal = () => {
    setIsShowDetailsModal(false);
  };

  const closeDeleteModal = () => {
    setIsShowDeleteModal(false);
  };

  const closeAcceptModal = () => {
    setIsShowAcceptModal(false);
  };

  const closeRejectModal = () => {
    setIsShowRejectModal(false);
  };

  useEffect(() => {
    getAllComments();
  }, []);

  // finished handling states

  // functions and fetchs

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
  /////////
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
  /////////
  const updateComment = () => {
    fetch(`http://localhost:3000/api/comments/${commentID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: mainCommentBody,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("کامنت با موفقیت به روز شد");
        closeEditModal();
        getAllComments();
      })
      .catch((err) => {
        console.log(err);
        toast.error("خطا در به روز کامنت");
      });
  };
  /////////
  const acceptComment = () => {
    fetch(`http://localhost:3000/api/comments/accept/${commentID}`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("کامنت با موفقیت تایید شد");
        closeAcceptModal();
        getAllComments();
      })
      .catch((err) => {
        console.log(err);
        toast.error("خطا در تایید کامنت");
      });
  };
  /////////
  const rejectComment = () => {
    fetch(`http://localhost:3000/api/comments/reject/${commentID}`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("کامنت با موفقیت رد شد");
        closeRejectModal();
        getAllComments();
      })
      .catch((err) => {
        console.log(err);
        toast.error("خطا در رد کامنت");
      });
  };
  // finished functions and fetchs

  return (
    <div
      className="w-full bg-(--purple) min-h-124 mt-4 mb-50 rounded-tr-4xl
     rounded-bl-4xl p-6"
    >
      {allComments.length ? (
        <div className="">
          <h1 className="text-4xl font-bold text-center text-(--white) -mt-2 mb-4">
            کامنت ها
          </h1>
          <table className="w-full bg-(--white) border-collapse text-(--purpleHard) text-center">
            <thead>
              <tr>
                <th className="py-4 bg-[#f0f0f0]">نام</th>
                <th className="bg-[#f0f0f0]">محصول</th>
                <th className="w-50 bg-[#f0f0f0]">کامنت</th>
                <th className="pl-10 bg-[#f0f0f0]">تاریخ</th>
                <th className="bg-[#f0f0f0]">ساعت</th>
                <th className="bg-[#f0f0f0]">عملیات</th>
              </tr>
            </thead>

            <tbody>
              {[...allComments].reverse().map((comment) => (
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
                        setCommentID(comment.id);
                      }}
                    >
                      ویرایش
                    </button>
                    <button
                      className={btnStyle}
                      onClick={() =>
                        toast.error("امکان پاسخ به کامنت برای شما وجود ندارد!")
                      }
                    >
                      پاسخ
                    </button>
                    {comment.isAccept === 0 ? (
                      <button
                        className={btnStyle}
                        onClick={() => {
                          setIsShowAcceptModal(true);
                          setCommentID(comment.id);
                        }}
                      >
                        تایید
                      </button>
                    ) : (
                      <button
                        className={btnStyle}
                        onClick={() => {
                          setIsShowRejectModal(true);
                          setCommentID(comment.id);
                        }}
                      >
                        رد
                      </button>
                    )}
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
        </div>
      ) : (
        <ErrorBox error={"کامنتی یافت نشد"} className={"-mt-6"} />
      )}

      {/* modals */}
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
        <DeleteModal
          onCancel={closeDeleteModal}
          onConfirm={deleteComment}
          title="آیا از حذف کامنت اطمینان دارید؟"
        />
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
            <button
              className="bg-(--purple) text-(--white) border-0 outline-none
             rounded-lg p-2 cursor-pointer transition-all duration-300 ease-out mt-4 
             items-center w-40 text-[1.2rem] hover:bg-(--purpleHard) hover:text-(--white)"
              onClick={updateComment}
            >
              ثبت ویرایش
            </button>
          </div>
        </EditModal>
      )}

      {isShowAcceptModal && (
        <DeleteModal
          title="آیا از پذیرش کامنت اطمینان دارید؟"
          onCancel={closeAcceptModal}
          onConfirm={acceptComment}
        />
      )}

      {isShowRejectModal && (
        <DeleteModal
          title="آیا از رد کامنت اطمینان دارید؟"
          onCancel={closeRejectModal}
          onConfirm={rejectComment}
        />
      )}

      <HotToast />

      {/* end modals */}
    </div>
  );
}
