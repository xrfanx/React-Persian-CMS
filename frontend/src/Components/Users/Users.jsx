import ErrorBox from "../ErrorBox/ErrorBox";

export default function Users() {
  return (
    <>
      <div className="bg-(--purple) mt-4 w-full h-124 rounded-tr-4xl rounded-bl-4xl">
        <ErrorBox error="هیچ کاربری یافت نشد" />
      </div>
    </>
  );
}
