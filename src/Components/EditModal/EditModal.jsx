import ReactDOM from "react-dom";
import { useEffect } from "react";

export default function EditModal({ children, onClose, onSubmit }) {

    useEffect(() => {
      const checkKey = (event) => {
          if (event.key === 'Escape') {
              onClose()
          }
      }
  
      window.addEventListener('keydown', checkKey)
  
      return () => {
          window.removeEventListener('keydown', checkKey)
      }
    }, [onClose])

  return ReactDOM.createPortal(
    <div
      className="bg-black/50 fixed inset-0 top-0 left-0 flex justify-center items-center"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      onClick={onClose}
    >
      <form
        action=""
        className="bg-[var(--white)] p-8
       rounded-tr-4xl rounded-bl-4xl flex flex-col justify-center
        items-center relative top-0 left-0 w-3xl"
        onClick={(event) => event.stopPropagation()}
      >
        <h1 className="text-center text-[var(--purpleHard)] text-2xl">
          اطلاعات جدید را وارد کنید
        </h1>

        {/* {children} */}
        <div className="flex flex-col gap-4 mt-4 text-4">
          <input
            className="border-0 outline-none bg-transparent text-[var(--purpleHard)]
              placeholder:text-[var(--purple)] border-b-[1px] border-[var(--purpleHard)]"
            type="text"
            placeholder="نام محصول"
          />
          <input
            className="border-0 outline-none bg-transparent text-[var(--purpleHard)]
              placeholder:text-[var(--purple)] border-b-[1px] border-[var(--purpleHard)]"
            type="text"
            placeholder="قیمت محصول"
          />
          <input
            className="border-0 outline-none bg-transparent text-[var(--purpleHard)]
              placeholder:text-[var(--purple)] border-b-[1px] border-[var(--purpleHard)]"
            type="text"
            placeholder="محبوبیت محصول"
          />
        </div>

        <button className="bg-[var(--purple)] text-white text-xl
         rounded-full px-4 py-2 mt-4"
         onClick={onSubmit}
         >
          ثبت اطلاعات جدید
        </button>
      </form>
    </div>,
    document.getElementById("modal-parent"),
  );
}
