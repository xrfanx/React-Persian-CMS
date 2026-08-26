import { useState } from "react";
import toast from "react-hot-toast";

export default function Addnewproduct({ getAllProducts }) {
  const [newProdutName, setNewProdutName] = useState("");
  const [newProdutPrice, setNewProdutPrice] = useState("");
  const [newProdutCount, setNewProdutCount] = useState("");
  const [newProdutImg, setNewProdutImg] = useState("");
  const [newProdutPopularity, setNewProdutPopularity] = useState("");
  const [newProdutSale, setNewProdutSale] = useState("");
  const [newProdutColors, setNewProdutColors] = useState("");

  const newProductInfo = {
    title: newProdutName,
    price: newProdutPrice,
    count: newProdutCount,
    img: newProdutImg,
    popularity: newProdutPopularity,
    sale: newProdutSale,
    colors: newProdutColors,
  };

  const addNewProduct = (event) => {
    event.preventDefault();

    fetch("http://localhost:3000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProductInfo),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("محصول با موفقیت اضافه شد");
        emptyInputs();
        getAllProducts();
      })
      .catch((err) => {
        console.log(err);
        toast.error("امکان اضافه کردن محصول وجود ندارد");
      });
  };

  const emptyInputs = () => {
    setNewProdutName("");
    setNewProdutPrice("");
    setNewProdutCount("");
    setNewProdutImg("");
    setNewProdutPopularity("");
    setNewProdutSale("");
    setNewProdutColors("");
  };

  return (
    <div className="flex flex-col gap-4 p-6 bg-[var(--purple)] rounded-tr-4xl rounded-bl-4xl w-full mt-4 transition-all duration-300 ease-in-out">
      <h1 className="text-2xl text-[var(--white)] font-bold">افزودن محصول جدید</h1>

      <form onSubmit={addNewProduct} className="flex flex-col gap-6">
        {/* گرید ۳ ستونه برای اینپوت‌ها */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 items-center">
          
          <div className="flex items-center justify-between gap-2">
            <label htmlFor="product-name" className="text-[var(--white)] whitespace-nowrap text-base">
              نام محصول
            </label>
            <input
              type="text"
              id="product-name"
              placeholder="نام محصول را وارد کنید"
              className="border border-[var(--purpleHard)] bg-[var(--white)] w-48 rounded-lg outline-none text-[var(--purpleHard)] text-sm p-2 transition-all duration-300 ease-out placeholder:text-[var(--purple)]"
              value={newProdutName}
              onChange={(event) => setNewProdutName(event.target.value)}
            />
          </div>

          <div className="flex items-center justify-between gap-2">
            <label htmlFor="product-price" className="text-[var(--white)] whitespace-nowrap text-base">
              قیمت محصول
            </label>
            <input
              type="text"
              id="product-price"
              placeholder="قیمت محصول را وارد کنید"
              className="border border-[var(--purpleHard)] bg-[var(--white)] w-48 rounded-lg outline-none text-[var(--purpleHard)] text-sm p-2 transition-all duration-300 ease-out placeholder:text-[var(--purple)]"
              value={newProdutPrice}
              onChange={(event) => setNewProdutPrice(event.target.value)}
            />
          </div>

          <div className="flex items-center justify-between gap-2">
            <label htmlFor="product-description" className="text-[var(--white)] whitespace-nowrap text-base">
              موجودی محصول
            </label>
            <input
              type="text"
              id="product-description"
              placeholder="موجودی محصول را وارد کنید"
              className="border border-[var(--purpleHard)] bg-[var(--white)] w-48 rounded-lg outline-none text-[var(--purpleHard)] text-sm p-2 transition-all duration-300 ease-out placeholder:text-[var(--purple)]"
              value={newProdutCount}
              onChange={(event) => setNewProdutCount(event.target.value)}
            />
          </div>

          <div className="flex items-center justify-between gap-2">
            <label htmlFor="product-category" className="text-[var(--white)] whitespace-nowrap text-base">
              عکس محصول
            </label>
            <input
              type="text"
              id="product-category"
              placeholder="آدرس عکس را وارد کنید"
              className="border border-[var(--purpleHard)] bg-[var(--white)] w-48 rounded-lg outline-none text-[var(--purpleHard)] text-sm p-2 transition-all duration-300 ease-out placeholder:text-[var(--purple)]"
              value={newProdutImg}
              onChange={(event) => setNewProdutImg(event.target.value)}
            />
          </div>

          <div className="flex items-center justify-between gap-2">
            <label htmlFor="product-colors" className="text-[var(--white)] whitespace-nowrap text-base">
              تعداد رنگ بندی
            </label>
            <input
              type="text"
              id="product-colors"
              placeholder="تعداد رنگ محصول"
              className="border border-[var(--purpleHard)] bg-[var(--white)] w-48 rounded-lg outline-none text-[var(--purpleHard)] text-sm p-2 transition-all duration-300 ease-out placeholder:text-[var(--purple)]"
              value={newProdutColors}
              onChange={(event) => setNewProdutColors(event.target.value)}
            />
          </div>

          <div className="flex items-center justify-between gap-2">
            <label htmlFor="product-sale" className="text-[var(--white)] whitespace-nowrap text-base">
              میزان فروش محصول
            </label>
            <input
              type="text"
              id="product-sale"
              placeholder="فروش محصول را وارد کنید"
              className="border border-[var(--purpleHard)] bg-[var(--white)] w-48 rounded-lg outline-none text-[var(--purpleHard)] text-sm p-2 transition-all duration-300 ease-out placeholder:text-[var(--purple)]"
              value={newProdutSale}
              onChange={(event) => setNewProdutSale(event.target.value)}
            />
          </div>

          <div className="flex items-center justify-between gap-2">
            <label htmlFor="product-popularity" className="text-[var(--white)] whitespace-nowrap text-base">
              میزان محبوبیت
            </label>
            <input
              type="text"
              id="product-popularity"
              placeholder="محبوبیت را وارد کنید"
              className="border border-[var(--purpleHard)] bg-[var(--white)] w-48 rounded-lg outline-none text-[var(--purpleHard)] text-sm p-2 transition-all duration-300 ease-out placeholder:text-[var(--purple)]"
              value={newProdutPopularity}
              onChange={(event) => setNewProdutPopularity(event.target.value)}
            />
          </div>

        </div>

        {/* دکمه ثبت مرکزی */}
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="bg-[var(--white)] text-[var(--purpleHard)] border-0 outline-none rounded-lg py-2 px-8 cursor-pointer font-bold transition-all duration-300 ease-out text-lg hover:bg-[var(--purpleHard)] hover:text-[var(--white)]"
          >
            ثبت محصول
          </button>
        </div>
      </form>
    </div>
  );
}