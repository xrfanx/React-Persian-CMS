import "./Products.css";
import ErrorBox from "../ErrorBox/ErrorBox";
import Addnewproduct from "../Addnewproduct/Addnewproduct";
import ProductTable from "../ProductTable/ProductTable";

export default function Products() {
  return (
    <div className="products">
      <Addnewproduct />
      <ErrorBox error="هیچ محصولی یافت نشد" />
      <ProductTable />
    </div>
  )
}
