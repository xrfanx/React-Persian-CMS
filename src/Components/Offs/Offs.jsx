import ErrorBox from "../ErrorBox/ErrorBox";

export default function Offs() {
  return (
    <div className="bg-[var(--purple)] w-full h-124 rounded-tr-[2rem] rounded-bl-[2rem]">
      <div className="">
        <ErrorBox error="هیچ تخفیفی یافت نشد" />
      </div>
    </div>
  );
}
