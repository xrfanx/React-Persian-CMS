export default function ErrorBox({ error, className }) {
  return (
    <>
      <div className={`${className} flex justify-center items-center h-8 bg-(--purpleHard) text-(--white) text-[1.2rem] p-[1.2rem] rounded-tr-4xl rounded-bl-4xl mr-[25%] w-1/2 transition-all duration-300 ease-in-out`}>
        {error}
      </div>
    </>
  );
}
