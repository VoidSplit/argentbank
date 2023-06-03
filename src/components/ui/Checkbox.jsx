import "./styles/Checkbox.css";

export default function Checkbox({label, innerRef}) {
  return (
    <div className="input-remember">
      <input type="checkbox" ref={innerRef} id="remember-me" /><label htmlFor="remember-me">{label}</label>
    </div>
  );
};