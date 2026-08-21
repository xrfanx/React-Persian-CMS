export default function Addnewproduct() {
  return (
    <div className="flex flex-col gap-2 p-4 bg-(--purple) rounded-tr-4xl rounded-bl-4xl w-full h-[55vh] mt-4 transition-all duration-300 ease-in-out">
      <h1 className="text-2xl text-(--white) mb-4">افزودن محصول جدید</h1>

      <form action="#" className="text-[1.2rem]">
        <div className="flex items-center justify-between">
          <label htmlFor="product-name" className="text-(--white)">نام محصول</label>
          <input
            type="text"
            id="product-name"
            placeholder="نام محصول را وارد کنید"
            className="border border-(--purpleHard) bg-(--white) my-4 mr-0 ml-4 w-44 rounded-lg outline-none text-(--purpleHard) text-[0.9rem] p-[0.3rem] transition-all duration-300 ease-out placeholder:text-(--purple)"
          />
          <label htmlFor="product-price" className="text-(--white)">قیمت محصول</label>
          <input
            type="text"
            id="product-price"
            className="border border-(--purpleHard) bg-(--white) my-4 mr-0 ml-4 w-44 rounded-lg outline-none text-(--purpleHard) text-[0.9rem] p-[0.3rem] transition-all duration-300 ease-out placeholder:text-(--purple)"
            placeholder="قیمت محصول را وارد کنید"
          />
          <label htmlFor="product-description" className="text-(--white)">موجودی محصول</label>
          <input
            type="text"
            id="product-description"
            className="border border-(--purpleHard) bg-(--white) my-4 mr-0 ml-4 w-44 rounded-lg outline-none text-(--purpleHard) text-[0.9rem] p-[0.3rem] transition-all duration-300 ease-out placeholder:text-(--purple)"
            placeholder="موجودی محصول را وارد کنید"
          />
        </div>
        <div className="flex gap-2 items-center justify-evenly">
          <label htmlFor="product-category" className="text-(--white)">عکس محصول</label>
          <input
            type="text"
            id="product-category"
            className="relative right-[-3rem] bg-(--white) border border-(--purpleHard) my-4 mr-0 ml-4 w-44 rounded-lg outline-none text-(--purpleHard) text-[0.9rem] p-[0.3rem] transition-all duration-300 ease-out placeholder:text-(--purple)"
            placeholder="آدرس عکس را وارد کنید"
          />
          <label htmlFor="product-like" className="text-(--white)">تعداد رنگ بندی محصول</label>
          <input
            type="text"
            id="product-like"
            className="relative right-[-3rem] bg-(--white) border border-(--purpleHard) my-4 mr-0 ml-4 w-48 rounded-lg outline-none text-(--purpleHard) text-[0.9rem] p-[0.3rem] transition-all duration-300 ease-out placeholder:text-(--purple)"
            placeholder="تعداد رنگ محصول را وارد کنید"
          />
        </div>
        <div className="flex gap-4 items-center justify-between mt-4">
          <label htmlFor="product-like" className="text-(--white)">میزان فروش محصول</label>
          <select
            className="relative right-[-8rem] text-(--purpleHard) w-28"
            name="product-like"
            id="product-like-number"
          >
            <option value="">انتخاب کنید</option>
            <option value="">بالا</option>
            <option value="">متوسط</option>
            <option value="">کم</option>
          </select>
          <label htmlFor="product-like" className="text-(--white)">میزان محبوبیت محصول</label>
          <select
            className="relative right-[-8rem] text-(--purpleHard) w-28"
            name="product-like"
            id="product-like-number"
          >
            <option value="">انتخاب کنید</option>
            <option value="">بالا</option>
            <option value="">متوسط</option>
            <option value="">کم</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-(--white) text-(--purpleHard) border-0 outline-none rounded-lg p-2 cursor-pointer transition-all duration-300 ease-out relative right-[40%] mt-10 items-center w-40 text-[1.2rem] hover:bg-(--purpleHard) hover:text-(--white)"
        >
          ثبت محصول
        </button>
      </form>
    </div>
  );
}
