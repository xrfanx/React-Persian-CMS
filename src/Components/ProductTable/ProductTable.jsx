import "./ProductTable.css";

export default function ProductTable() {
  return (
    <div className="ProductTableContainer">
      <table className="product-table">
        <thead>
          <tr>
            <th>عکس</th>
            <th>نام</th>
            <th>قیمت</th>
            <th>موجودی</th>
            <th>عملیات</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <img
                src="/image/profile.webp"
                alt="product"
                className="ProductTableImg"
              />
            </td>
            <td>عرفان روزبهانی</td>
            <td>150000000$</td>
            <td>5عدد</td>
            <td>
              <button className="ProductTablebtn">جزئیات</button>
              <button className="ProductTablebtn">ویرایش</button>
              <button className="ProductTablebtn ProductTablebtn-delete">
                حذف
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="/image/profile.webp"
                alt="product"
                className="ProductTableImg"
              />
            </td>
            <td>عرفان روزبهانی</td>
            <td>150000000$</td>
            <td>5عدد</td>
            <td>
              <button className="ProductTablebtn">جزئیات</button>
              <button className="ProductTablebtn">ویرایش</button>
              <button className="ProductTablebtn ProductTablebtn-delete">
                حذف
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
