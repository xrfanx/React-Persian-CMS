import { useEffect } from "react";
import ReactDOM from "react-dom";

export default function DetailsModal({ onHide, children }) {
  useEffect(() => {
    const checkKey = (event) => {
      if (event.key === "Escape") {
        onHide();
      }
    };

    window.addEventListener("keydown", checkKey);

    return () => {
      window.removeEventListener("keydown", checkKey);
    };
  }, [onHide]);

  return ReactDOM.createPortal(
    <div
      className="bg-black/50 fixed inset-0 top-0 left-0 w-full
     h-full flex justify-center items-center"
      onClick={onHide}
    >
      {children}
    </div>,
    document.getElementById("modal-parent"),
  );
}
