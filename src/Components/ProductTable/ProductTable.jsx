import { useState } from "react";
import DeleteModal from "../DeleteModal/DeleteModal";
import DetailsModal from "../DetailsModal/DetailsModal";
import EditModal from "../EditModal/EditModal";

export default function ProductTable() {
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);

  const DeleteModalCancelAction = () => {
    setIsShowDeleteModal(false);
  };
  const DeleteModalConfirmAction = () => {
    setIsShowDeleteModal(false);
  };
  const closeDetailsModal = () => {
    setIsShowDetailsModal(false);
  };

  const updateProductInfo = () => {
    setIsShowEditModal(false);
    console.log("محصول ویرایش شد");
  };
  return (
    <>
      {/* <DetailsModal></DetailsModal> */}
      <div className="bg-[var(--purple)] mb-4 min-h-40 rounded-tr-2xl rounded-bl-2xl p-4 mt-4">
        <table className="w-[90%] border-collapse mt-4 bg-[var(--white)] relative right-[5%]">
          <thead>
            <tr>
              <th className="p-2 text-center bg-[#f0f0f0] text-[var(--purpleHard)]">
                عکس
              </th>
              <th className="p-2 text-center bg-[#f0f0f0] text-[var(--purpleHard)]">
                نام
              </th>
              <th className="p-2 text-center bg-[#f0f0f0] text-[var(--purpleHard)]">
                قیمت
              </th>
              <th className="p-2 text-center bg-[#f0f0f0] text-[var(--purpleHard)]">
                موجودی
              </th>
              <th className="p-2 text-center bg-[#f0f0f0] text-[var(--purpleHard)]">
                عملیات
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="text-[var(--purpleHard)]">
              <td className="p-2 text-center">
                <img
                  src="/image/profile.webp"
                  alt="product"
                  className="w-16 h-16 object-cover flex justify-center items-center relative right-4 top-0"
                />
              </td>
              <td className="p-2 text-center">عرفان روزبهانی</td>
              <td className="p-2 text-center">150000000$</td>
              <td className="p-2 text-center">5عدد</td>
              <td className="p-2 text-center">
                <button
                  className="bg-[var(--white)] text-[var(--purpleHard)]
                 border border-[var(--purpleHard)] outline-none rounded-lg p-2
                  cursor-pointer transition-all duration-300 ease-out relative
                   items-center w-20 text-base mx-2 hover:bg-[var(--purpleHard)]
                    hover:text-[var(--white)] hover:shadow-[0_0_0.3rem_var(--white)]"
                  onClick={() => setIsShowDetailsModal(true)}
                >
                  جزئیات
                </button>
                <button
                  className="bg-[var(--white)] text-[var(--purpleHard)]
                 border border-[var(--purpleHard)] outline-none rounded-lg p-2 
                 cursor-pointer transition-all duration-300 ease-out relative 
                 items-center w-20 text-base mx-2 hover:bg-[var(--purpleHard)]
                  hover:text-[var(--white)] hover:shadow-[0_0_0.3rem_var(--white)]"
                  onClick={() => setIsShowEditModal(true)}
                >
                  ویرایش
                </button>
                <button
                  className="bg-[rgb(255,39,39)] text-[var(--white)] border border-[rgb(255,39,39)]
                 outline-none rounded-lg p-2 cursor-pointer transition-all duration-300 ease-out relative items-center 
                 w-20 text-base mx-2 hover:bg-[var(--white)] hover:text-[rgb(255,39,39)] hover:border-[rgb(255,39,39)]"
                  onClick={() => setIsShowDeleteModal(true)}
                >
                  حذف
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {isShowDeleteModal && (
        <DeleteModal
          onCancel={DeleteModalCancelAction}
          onConfirm={DeleteModalConfirmAction}
        />
      )}
      {isShowDetailsModal && <DetailsModal onHide={closeDetailsModal} />}
      {isShowEditModal && (
        <EditModal
          onClose={() => setIsShowEditModal(false)}
          onSubmit={() => updateProductInfo()}
        ></EditModal>
      )}
    </>
  );
}
