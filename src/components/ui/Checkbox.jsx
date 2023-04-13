import "./styles/Checkbox.css";

export default function Checkbox({label}) {
  return (
    <div className="input-remember">
      <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">{label}</label>
    </div>
  );
};