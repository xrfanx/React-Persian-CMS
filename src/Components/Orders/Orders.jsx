import ErrorBox from "../ErrorBox/ErrorBox";

export default function Orders() {
  return (
    <div className="bg-[var(--purple)] w-full h-[31rem] rounded-tr-[2rem] rounded-bl-[2rem] pt-2 mt-4">
      <ErrorBox error="هیچ سفارشی یافت نشد" />
    </div>
  );
}
