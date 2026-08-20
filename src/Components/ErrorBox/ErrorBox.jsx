import "./ErrorBox.css";

export default function ErrorBox({ error }) {
  return (
    <>
    <div className="cms-empty-error">
        {error}
    </div>
    </>
  )
}
