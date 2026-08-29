import { useState } from "react";
import DeleteModal from "../DeleteModal/DeleteModal";
import DetailsModal from "../DetailsModal/DetailsModal";
import EditModal from "../EditModal/EditModal";
import ErrorBox from "../ErrorBox/ErrorBox";
import HotToast from "../HotToast/HotToast";
import toast from "react-hot-toast";

// finished imports

export default function ProductTable({ allProducts, getAllProducts }) {
  // states
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [productID, setProductID] = useState(null);
  const [mainProductInfos, setMainProductInfos] = useState({});
  const [productNewTitle, setProductNewTitle] = useState("");
  const [productNewPrice, setProductNewPrice] = useState("");
  const [productNewCount, setProductNewCount] = useState("");
  const [productNewImg, setProductNewImg] = useState("");
  const [productNewPopularity, setProductNewPopularity] = useState("");
  const [productNewSale, setProductNewSale] = useState("");
  const [productNewColors, setProductNewColors] = useState("");

  // finished states

  //  handeling states
  const DeleteModalCancelAction = () => {
    setIsShowDeleteModal(false);
  };

  const closeDetailsModal = () => {
    setIsShowDetailsModal(false);
  };

  // finished handeling states

  // functions and fetchs
  const DeleteModalConfirmAction = () => {
    fetch(`http://localhost:3000/api/products/${productID}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setIsShowDeleteModal(false);
        getAllProducts();
        toast.success("محصول با موفقیت حذف شد");
      })
      .catch((err) => {
        console.log(err);
        toast.error("امکان حذف محصول وجود ندارد");
      });
  };
  // finished functions and fetchs

  // Mix functions and fetchs and states
  const updateProductInfo = (event) => {
    event.preventDefault();

    const productNewInfo = {
      title: productNewTitle,
      price: productNewPrice,
      count: productNewCount,
      img: productNewImg,
      popularity: productNewPopularity,
      sale: productNewSale,
      colors: productNewColors,
    };

    fetch(`http://localhost:3000/api/products/${productID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productNewInfo),
    })
      .then((res) => res.json())
      .then(() => {
        setIsShowEditModal(false);
        toast.success("محصول با موفقیت ویرایش شد");
        getAllProducts();
      })
      .catch((err) => {
        console.log(err);
        toast.error("امکان ویرایش محصول وجود ندارد");
      });
  };
  // finished Mix functions and fetchs and states

  return (
    <>
      <HotToast />
      {allProducts.length ? (
        <div className="bg-(--purple) mb-4 min-h-40 rounded-tr-2xl rounded-bl-2xl p-4 mt-4">
          <table className="w-[90%] border-collapse mt-4 bg-(--white) relative right-[5%]">
            <thead>
              <tr>
                <th className="p-2 text-center bg-[#f0f0f0] text-(--purpleHard)">
                  عکس
                </th>
                <th className="p-2 text-center bg-[#f0f0f0] text-(--purpleHard)">
                  نام
                </th>
                <th className="p-2 text-center bg-[#f0f0f0] text-(--purpleHard)">
                  قیمت
                </th>
                <th className="p-2 text-center bg-[#f0f0f0] text-(--purpleHard)">
                  موجودی
                </th>
                <th className="p-2 text-center bg-[#f0f0f0] text-(--purpleHard)">
                  عملیات
                </th>
              </tr>
            </thead>

            {allProducts
              .slice()
              .reverse()
              .map((product) => (
                <tbody key={product.id}>
                  <tr className="text-(--purpleHard)">
                    <td className="p-2 text-center">
                      <img
                        src={product.img}
                        alt="product"
                        className="w-16 h-16 object-contain flex justify-center items-center relative right-4 top-0"
                      />
                    </td>
                    <td className="p-2 text-center">{product.title}</td>
                    <td className="p-2 text-center">
                      {product.price.toLocaleString()} تومان
                    </td>
                    <td className="p-2 text-center">{product.count}</td>
                    <td className="p-2 text-center">
                      <button
                        className="bg-(--white) text-(--purpleHard)
                       border border-(--purpleHard) outline-none rounded-lg p-2
                        cursor-pointer transition-all duration-300 ease-out relative
                         items-center w-20 text-base mx-2 hover:bg-(--purpleHard)
                          hover:text-(--white) hover:shadow-[0_0_0.3rem_var(--white)]"
                        onClick={() => {
                          setIsShowDetailsModal(true);
                          setMainProductInfos(product);
                        }}
                      >
                        جزئیات
                      </button>
                      <button
                        className="bg-(--white) text-(--purpleHard)
                       border border-(--purpleHard) outline-none rounded-lg p-2 
                       cursor-pointer transition-all duration-300 ease-out relative 
                       items-center w-20 text-base mx-2 hover:bg-(--purpleHard)
                        hover:text-(--white) hover:shadow-[0_0_0.3rem_var(--white)]"
                        onClick={() => {
                          setIsShowEditModal(true);
                          setProductID(product.id);
                          setProductNewTitle(product.title);
                          setProductNewPrice(product.price);
                          setProductNewCount(product.count);
                          setProductNewImg(product.img);
                          setProductNewPopularity(product.popularity);
                          setProductNewSale(product.sale);
                          setProductNewColors(product.colors);
                        }}
                      >
                        ویرایش
                      </button>
                      <button
                        className="bg-[rgb(255,39,39)] text-(--white) border border-[rgb(255,39,39)]
                       outline-none rounded-lg p-2 cursor-pointer transition-all duration-300 ease-out relative items-center 
                       w-20 text-base mx-2 hover:bg-(--white) hover:text-[rgb(255,39,39)] hover:border-[rgb(255,39,39)]"
                        onClick={() => {
                          setIsShowDeleteModal(true);
                          setProductID(product.id);
                        }}
                      >
                        حذف
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
          </table>
          {/* modals */}
          {isShowDeleteModal && (
            <DeleteModal
              title="آیا از حذف محصول اطمینان دارید؟"
              onCancel={DeleteModalCancelAction}
              onConfirm={DeleteModalConfirmAction}
            />
          )}

          {isShowDetailsModal && (
            <DetailsModal onHide={closeDetailsModal}>
              <table
                className="w-[60%] min-h-20 border-collapse bg-(--white)
        rounded-tr-4xl rounded-bl-4xl table-fixed text-(--purpleHard)"
                onClick={(event) => event.stopPropagation()}
              >
                <thead className="text-center">
                  <tr className="text-center">
                    <th>محبوبیت محصول</th>
                    <th>فروش محصول</th>
                    <th>رنگ بندی محصول</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td>{mainProductInfos.popularity}%</td>
                    <td>{mainProductInfos.sale?.toLocaleString()} تومان</td>
                    <td>{mainProductInfos.colors}</td>
                  </tr>
                </tbody>
              </table>
            </DetailsModal>
          )}

          {isShowEditModal && (
            <EditModal onClose={() => setIsShowEditModal(false)}>
              <form
                action=""
                className="bg-(--white) p-8
       rounded-tr-4xl rounded-bl-4xl flex flex-col justify-center
        items-center relative top-0 left-0 w-3xl"
                onClick={(event) => event.stopPropagation()}
              >
                <h1 className="text-center text-(--purpleHard) text-2xl">
                  اطلاعات جدید را وارد کنید
                </h1>

                <div className="flex flex-col gap-4 mt-4 text-4">
                  <input
                    className="border-0 outline-none bg-transparent text-(--purpleHard)
              placeholder:text-(--purple) border-b border-(--purpleHard)"
                    type="text"
                    placeholder="نام محصول"
                    value={productNewTitle}
                    onChange={(event) => setProductNewTitle(event.target.value)}
                  />
                  <input
                    className="border-0 outline-none bg-transparent text-(--purpleHard)
              placeholder:text-(--purple) border-b border-(--purpleHard)"
                    type="text"
                    placeholder="قیمت محصول"
                    value={productNewPrice}
                    onChange={(event) => setProductNewPrice(event.target.value)}
                  />
                  <input
                    className="border-0 outline-none bg-transparent text-(--purpleHard)
              placeholder:text-(--purple) border-b border-(--purpleHard)"
                    type="text"
                    placeholder="موجودی محصول"
                    value={productNewCount}
                    onChange={(event) => setProductNewCount(event.target.value)}
                  />
                  <input
                    className="border-0 outline-none bg-transparent text-(--purpleHard)
              placeholder:text-(--purple) border-b border-(--purpleHard)"
                    type="text"
                    placeholder="آدرس کاور محصول"
                    value={productNewImg}
                    onChange={(event) => setProductNewImg(event.target.value)}
                  />
                  <input
                    className="border-0 outline-none bg-transparent text-(--purpleHard)
              placeholder:text-(--purple) border-b border-(--purpleHard)"
                    type="text"
                    placeholder="محبوبیت محصول"
                    value={productNewPopularity}
                    onChange={(event) =>
                      setProductNewPopularity(event.target.value)
                    }
                  />
                  <input
                    className="border-0 outline-none bg-transparent text-(--purpleHard)
              placeholder:text-(--purple) border-b border-(--purpleHard)"
                    type="text"
                    placeholder="میزان فروش محصول"
                    value={productNewSale}
                    onChange={(event) => setProductNewSale(event.target.value)}
                  />
                  <input
                    className="border-0 outline-none bg-transparent text-(--purpleHard)
              placeholder:text-(--purple) border-b border-(--purpleHard)"
                    type="text"
                    placeholder="تعداد رنگ بندی محصول"
                    value={productNewColors}
                    onChange={(event) =>
                      setProductNewColors(event.target.value)
                    }
                  />
                </div>

                <button
                  className="bg-(--purple) text-white text-xl
         rounded-full px-4 py-2 mt-4"
                  onClick={updateProductInfo}
                >
                  ثبت اطلاعات جدید
                </button>
              </form>
            </EditModal>
          )}
        </div>
      ) : (
        <ErrorBox error={"محصولی یافت نشد"} />
      )}
      {/* end modals */}
    </>
  );
}
