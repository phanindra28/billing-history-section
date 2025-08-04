import "./Pill.css";
export default function Pill({ status }) {
  return (
    <span
      className={`border p-1 px-2 pill ${status === "paid" ? "pill-green" : ""}`}
    >
      {status}
    </span>
  );
}
