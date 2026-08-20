import "./Users.css";
import ErrorBox from "../ErrorBox/ErrorBox";

export default function Users() {
  return (
    <>
    <div className="users">
      <ErrorBox error="هیچ کاربری یافت نشد" />
    </div>
    </>
  )
}
