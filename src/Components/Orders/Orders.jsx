import "./Orders.css";
import ErrorBox from "../ErrorBox/ErrorBox";

export default function Orders() {
  return (
    <div className="orders">
      <ErrorBox error="هیچ سفارشی یافت نشد" />
    </div>
  )
}
