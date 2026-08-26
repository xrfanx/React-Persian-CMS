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
      {children}
      
    </div>,
    document.getElementById("modal-parent"),
  );
}
