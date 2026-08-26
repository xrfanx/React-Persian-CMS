import { Toaster } from "react-hot-toast";

export default function HotToast() {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        style: {
          color: "var(--purpleHard)",
          borderRadius: "1rem",
          padding: "1rem",
          fontSize: "1rem",
        },
      }}
    />
  );
}