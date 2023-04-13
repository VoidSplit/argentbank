import "./styles/Input.css";

export default function PasswordInput({label}) {
  return (
    <div className="input-wrapper">
      <label htmlFor="password">{label}</label>
      <input type="current-password" id="password" />
    </div>
  );
};