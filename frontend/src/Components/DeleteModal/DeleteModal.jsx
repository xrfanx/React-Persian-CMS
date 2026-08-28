import ReactDOM from "react-dom";

export default function DeleteModal({ onCancel, onConfirm }) {
  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-50 flex items-center justify-center transition-all duration-300 ease-in ">
      <div className="bg-(--white) rounded-tr-4xl rounded-bl-4xl flex gap-4 p-4">
        <h1 className="text-[1.2rem] text-(--purpleHard)">
          آیا از حذف این محصول اطمینان دارید؟
        </h1>
        <button
          className="bg-(--purple) text-(--white)
         border-0 outline-none rounded-lg p-2 cursor-pointer transition-all
          duration-300 ease-out mt-10 items-center w-40 text-[1.2rem] hover:bg-(--purpleHard)
           hover:text-(--white)"
          onClick={onConfirm}
        >
          بله
        </button>
        <button
          className="bg-(--white) text-(--purpleHard)
         border-0 outline-none rounded-lg p-2 cursor-pointer transition-all 
         duration-300 ease-out mt-10 items-center w-40 text-[1.2rem] hover:bg-(--purpleHard)
          hover:text-(--white)"
          onClick={onCancel}
        >
          خیر
        </button>
      </div>
    </div>,
    document.getElementById("modal-parent"),
  );
}
