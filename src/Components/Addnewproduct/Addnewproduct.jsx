import "./Addnewproduct.css";

export default function Addnewproduct() {
  return (
    <div className="product-main">
      <h1 className="product-title">افزودن محصول جدید</h1>

      <form action="#" className="add-product-form">
        <div className="textHandler">
          <label htmlFor="product-name">نام محصول</label>
          <input
            type="text"
            id="product-name"
            placeholder="نام محصول را وارد کنید"
            className="inputHandler"
          />
          <label htmlFor="product-price">قیمت محصول</label>
          <input
            type="text"
            id="product-price"
            className="inputHandler"
            placeholder="قیمت محصول را وارد کنید"
          />
          <label htmlFor="product-description">موجودی محصول</label>
          <input
            type="text"
            id="product-description"
            className="inputHandler"
            placeholder="موجودی محصول را وارد کنید"
          />
        </div>
        <div className="imageHandler">
          <label htmlFor="product-category">عکس محصول</label>
          <input
            type="text"
            id="product-category"
            className="inputHandler"
            placeholder="آدرس عکس را وارد کنید"
          />
          <label htmlFor="product-like">تعداد رنگ بندی محصول</label>
          <input
            type="text"
            id="product-like"
            className="inputHandler"
            placeholder="تعداد رنگ محصول را وارد کنید"
          />
        </div>
        <div className="selectHandler">
          <label htmlFor="product-like">میزان فروش محصول</label>
          <select name="product-like" id="product-like-number">
            <option value="">انتخاب کنید</option>
            <option value="">بالا</option>
            <option value="">متوسط</option>
            <option value="">کم</option>
          </select>
          <label htmlFor="product-like">میزان محبوبیت محصول</label>
          <select name="product-like" id="product-like-number">
            <option value="">انتخاب کنید</option>
            <option value="">بالا</option>
            <option value="">متوسط</option>
            <option value="">کم</option>
          </select>
        </div>

        <button type="submit" className="add-product-submit">
          ثبت محصول
        </button>
      </form>
    </div>
  );
}
