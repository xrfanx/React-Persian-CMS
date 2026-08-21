import { useEffect } from "react";
import ReactDOM from "react-dom";

export default function DetailsModal({ onHide }) {

  useEffect(() => {
    const checkKey = (event) => {
        if (event.key === 'Escape') {
            onHide()
        }
    }

    window.addEventListener('keydown', checkKey)

    return () => {
        window.removeEventListener('keydown', checkKey)
    }
  }, [onHide])

  return ReactDOM.createPortal(
    <div className="bg-black/50 fixed inset-0 top-0 left-0 w-full
     h-full flex justify-center items-center"
     onClick={onHide}
     >
      <table
        className="w-[60%] min-h-20 border-collapse bg-[var(--white)]
        rounded-tr-4xl rounded-bl-4xl table-fixed text-(--purpleHard)"
        onClick={(event) => event.stopPropagation()}
      >
        <thead className="text-center">
          <tr className="text-center">
            <th>نام محصول</th>
            <th>قیمت محصول</th>
            <th>محبوبیت محصول</th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr>
            <td>عرفان روزبهانی</td>
            <td>150000000$</td>
            <td>91%</td>
          </tr>
        </tbody>
      </table>
    </div>,
    document.getElementById("modal-parent"),
  );
}
