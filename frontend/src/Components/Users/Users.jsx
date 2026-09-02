import { useEffect, useState } from "react";
import ErrorBox from "../ErrorBox/ErrorBox";
import toast from "react-hot-toast";
import HotToast from "../HotToast/HotToast";
import DeleteModal from "../DeleteModal/DeleteModal";
import DetailsModal from "../DetailsModal/DetailsModal";
import EditModal from "../EditModal/EditModal";
// finished imports

export default function Users() {
  // styles
  const btnStyle =
    "bg-[var(--white)] text-[var(--purpleHard)] border border-[var(--purpleHard)] outline-none rounded-lg p-2 cursor-pointer transition-all duration-300 ease-out relative items-center w-20 text-base mx-2 hover:bg-[var(--purpleHard)] hover:text-[var(--white)] hover:shadow-[0_0_0.3rem_var(--white)]";
  const btnStyleDelete =
    "bg-[rgb(255,39,39)] text-[var(--white)] border border-[rgb(255,39,39)] outline-none rounded-lg p-2 cursor-pointer transition-all duration-300 ease-out relative items-center w-20 text-base mx-2 hover:bg-[var(--white)] hover:text-[rgb(255,39,39)] hover:border-[rgb(255,39,39)]";
  const inputStyle =
  "border-0 outline-none bg-transparent text-(--purpleHard) placeholder:text-(--purple) border-b border-(--purpleHard)";
  // finished styles
  // states
  const [users, setUsers] = useState([]);
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [userID, setUserID] = useState(null);
  const [mainUserInfo, setMainUserInfo] = useState({});
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  // finished states

  // handling states
  const closeDetailsModal = () => {
    setIsShowDetailsModal(false);
  };

  const closeDeleteModal = () => {
    setIsShowDeleteModal(false);
  };

  const closeEditModal = () => {
    setIsShowEditModal(false);
  };
  // finished handling states

  // functions and fetchs
  const getAllUsers = () => {
    fetch("http://localhost:3000/api/users")
      .then((res) => res.json())
      .then((users) => {
        setUsers(users);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const deleteUser = () => {
    fetch(`http://localhost:3000/api/users/${userID}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setIsShowDeleteModal(false);
        getAllUsers();
        toast.success("کاربر با موفقیت حذف شد");
      })
      .catch((err) => {
        console.log(err);
        toast.error("امکان حذف کاربر وجود ندارد");
        setIsShowDeleteModal(false);
      });
  };

  const updateUser = () => {
    fetch(`http://localhost:3000/api/users/${userID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firsname: mainUserInfo.firsname,
        lastname: mainUserInfo.lastname,
        username: mainUserInfo.username,
        password: mainUserInfo.password,
        phone: mainUserInfo.phone,
        city: mainUserInfo.city,
        email: mainUserInfo.email,
        address: mainUserInfo.address,
        score: mainUserInfo.score,
        buy: mainUserInfo.buy,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        setIsShowEditModal(false);
        toast.success("کاربر با موفقیت ویرایش شد");
        getAllUsers();
      })
      .catch((err) => {
        console.log(err);
        toast.error("امکان ویرایش کاربر وجود ندارد");
      });
  };
  // finished functions and fetchs

  return (
    <>
      <div className="bg-(--purple) mt-4 w-full p-8 min-h-124 rounded-tr-4xl rounded-bl-4xl">
        {users.length ? (
          <>
            <h1 className="text-4xl font-bold text-center text-(--white) -mt-4 mb-4">
              کاربران
            </h1>
            <div className="flex flex-col bg-(--white) items-center justify-center w-full h-full">
              <table className="w-full text-center border-collapse text-(--purpleHard)">
                <thead>
                  <tr>
                    <th className="py-4 bg-[#f0f0f0]">نام و نام خانوادگی</th>
                    <th className="bg-[#f0f0f0]">یوزرنیم</th>
                    <th className="bg-[#f0f0f0]">شماره تلفن</th>
                    <th className="bg-[#f0f0f0]">رمز عبور</th>
                    <th className="bg-[#f0f0f0]">ایمیل</th>
                    <th className="bg-[#f0f0f0]">عملیات</th>
                  </tr>
                </thead>
                <tbody>
                  {[...users].reverse().map((users) => (
                    <tr key={users.id}>
                      <td className="py-4">
                        {users.firsname} {users.lastname}
                      </td>
                      <td>{users.username}</td>
                      <td>{users.phone}</td>
                      <td>{users.password}</td>
                      <td>{users.email}</td>
                      <td>
                        <button
                          className={btnStyle}
                          onClick={() => {
                            setIsShowEditModal(true);
                            setUserID(users.id);
                            setMainUserInfo(users);
                          }}
                        >
                          ویرایش
                        </button>
                        <button
                          className={btnStyle}
                          onClick={() => {
                            setIsShowDetailsModal(true);
                            setMainUserInfo(users);
                          }}
                        >
                          جزئیات
                        </button>
                        <button
                          className={btnStyleDelete}
                          onClick={() => {
                            setIsShowDeleteModal(true);
                            setUserID(users.id);
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
          </>
        ) : (
          <ErrorBox error="هیچ کاربری یافت نشد" className="-mt-8" />
        )}

        {/* modals */}
        {isShowDetailsModal && (
          <DetailsModal onHide={closeDetailsModal}>
            <table
              className="w-[60%] min-h-20 border-collapse bg-(--white)
        rounded-tr-4xl rounded-bl-4xl table-fixed text-(--purpleHard)"
              onClick={(event) => event.stopPropagation()}
            >
              <thead className="text-center">
                <tr className="text-center">
                  <th>شهر</th>
                  <th>امتیاز</th>
                  <th>خرید</th>
                  <th>آدرس</th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr>
                  <td>{mainUserInfo.city}</td>
                  <td>{mainUserInfo.score}</td>
                  <td>{mainUserInfo.buy}</td>
                  <td>{mainUserInfo.address}</td>
                </tr>
              </tbody>
            </table>
          </DetailsModal>
        )}

        {isShowDeleteModal && (
          <DeleteModal
            title="آیا از حذف کاربر اطمینان دارید؟"
            onCancel={closeDeleteModal}
            onConfirm={deleteUser}
          />
        )}
        {isShowEditModal && (
          <EditModal onClose={closeEditModal} onSubmit={updateUser}>
            <div
              className="flex flex-col items-center gap-4 text-4
           bg-(--white) w-3/5 rounded-tr-4xl rounded-bl-4xl p-4"
              onClick={(event) => event.stopPropagation()}
            >
              <h1 className="items-center text-(--purpleHard) text-2xl">
                اطلاعات جدید را وارد کنید
              </h1>

              <div className="flex flex-col gap-4 mt-4 text-4">
                <input
                  className={inputStyle}
                  type="text"
                  placeholder="نام کاربر"
                  value={mainUserInfo.firsname}
                  onChange={(event) =>
                    setMainUserInfo({
                      ...mainUserInfo,
                      firsname: event.target.value,
                    })
                  }
                />
                <input
                  className={inputStyle}
                  type="text"
                  placeholder="نام خانوادگی"
                  value={mainUserInfo.lastname}
                  onChange={(event) =>
                    setMainUserInfo({
                      ...mainUserInfo,
                      lastname: event.target.value,
                    })
                  }
                />
                <input
                  className={inputStyle}
                  type="text"
                  placeholder="یوزرنیم"
                  value={mainUserInfo.username}
                  onChange={(event) =>
                    setMainUserInfo({
                      ...mainUserInfo,
                      username: event.target.value,
                    })
                  }
                />
                <input
                  className={inputStyle}
                  type="text"
                  placeholder="رمز عبور"
                  value={mainUserInfo.password}
                  onChange={(event) =>
                    setMainUserInfo({
                      ...mainUserInfo,
                      password: event.target.value,
                    })
                  }
                />
                <input
                  className={inputStyle}
                  type="text"
                  placeholder="شماره تلفن"
                  value={mainUserInfo.phone}
                  onChange={(event) =>
                    setMainUserInfo({
                      ...mainUserInfo,
                      phone: event.target.value,
                    })
                  }
                />
                <input
                  className={inputStyle}
                  type="text"
                  placeholder="ایمیل"
                  value={mainUserInfo.email}
                  onChange={(event) =>
                    setMainUserInfo({
                      ...mainUserInfo,
                      email: event.target.value,
                    })
                  }
                />
                <input
                  className={inputStyle}
                  type="text"
                  placeholder="آدرس"
                  value={mainUserInfo.address}
                  onChange={(event) =>
                    setMainUserInfo({
                      ...mainUserInfo,
                      address: event.target.value,
                    })
                  }
                />
                <input
                  className={inputStyle}
                  type="text"
                  placeholder="امتیاز"
                  value={mainUserInfo.score}
                  onChange={(event) =>
                    setMainUserInfo({
                      ...mainUserInfo,
                      score: event.target.value,
                    })
                  }
                />
                <input
                  className={inputStyle}
                  type="text"
                  placeholder="خرید"
                  value={mainUserInfo.buy}
                  onChange={(event) =>
                    setMainUserInfo({
                      ...mainUserInfo,
                      buy: event.target.value,
                    })
                  }
                />
              </div>

              <button
                className="bg-(--purple) text-white text-xl
         rounded-full px-4 py-2 mt-4"
                onClick={updateUser}
              >
                ثبت اطلاعات جدید
              </button>
            </div>
          </EditModal>
        )}
        <HotToast />
        {/* end modals */}
      </div>
    </>
  );
}
