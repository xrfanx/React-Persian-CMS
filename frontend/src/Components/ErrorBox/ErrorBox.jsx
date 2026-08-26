export default function ErrorBox({ error, className }) {
  return (
    <>
      <div className={`${className} flex justify-center items-center h-8 bg-[var(--purpleHard)] text-[var(--white)] text-[1.2rem] p-[1.2rem] rounded-tr-[2rem] rounded-bl-[2rem] mr-[25%] w-1/2 transition-all duration-300 ease-in-out`}>
        {error}
      </div>
    </>
  );
}
