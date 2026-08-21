import ErrorBox from "../ErrorBox/ErrorBox";
import Addnewproduct from "../Addnewproduct/Addnewproduct";
import ProductTable from "../ProductTable/ProductTable";

export default function Products() {
  return (
    <div className="w-5xl h-150 rounded-tr-4xl rounded-bl-4xl transition-all duration-300 ease-in-out">
      <Addnewproduct />
      {/* <ErrorBox error="هیچ محصولی یافت نشد" /> */}
      <ProductTable />
    </div>
  );
}
