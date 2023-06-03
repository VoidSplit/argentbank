import "./styles/Input.css";

export default function PasswordInput({label, innerRef}) {
  return (
    <div className="input-wrapper">
      <label htmlFor="password">{label}</label>
      <input type="current-password" ref={innerRef} id="password" />
    </div>
  );
};