import Addnewproduct from "../Addnewproduct/Addnewproduct";
import ProductTable from "../ProductTable/ProductTable";
import { useEffect, useState } from "react";

export default function Products() {

    const [allProducts, setAllProducts] = useState([]);


   const getAllProducts = () => {
    fetch("http://localhost:3000/api/products")
    .then((res) => res.json())
    .then((products) => setAllProducts(products));
  };
  
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="w-full h-150 rounded-tr-4xl rounded-bl-4xl transition-all duration-300 ease-in-out">
      <Addnewproduct getAllProducts={getAllProducts} />
      <ProductTable allProducts={allProducts} getAllProducts={getAllProducts} />
    </div>
  );
}
