import ErrorBox from "../ErrorBox/ErrorBox";
import HotToast from "../HotToast/HotToast";

export default function Offs() {
  return (
    <div className="bg-(--purple) mt-4 w-full h-124 rounded-tr-4xl rounded-bl-4xl">
      <div className="">
        <ErrorBox error="هیچ تخفیفی یافت نشد" />
        <HotToast />
      </div>
    </div>
  );
}
