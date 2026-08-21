import ErrorBox from "../ErrorBox/ErrorBox";

export default function Users() {
  return (
    <>
      <div className="bg-[var(--purple)] w-5xl h-[31rem] rounded-tr-[2rem] rounded-bl-[2rem]">
        <ErrorBox error="هیچ کاربری یافت نشد" />
      </div>
    </>
  );
}
