import "./styles/Input.css";

export default function TextInput({label}) {
  return (
    <div className="input-wrapper">
      <label htmlFor="username">{label}</label>
      <input type="text" id="username" />
    </div>
  );
};