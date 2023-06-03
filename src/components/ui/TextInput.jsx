import "./styles/Input.css";

export default function TextInput({label, innerRef}) {
  return (
    <div className="input-wrapper">
      <label htmlFor="username">{label}</label>
      <input type="email" ref={innerRef} id="username" />
    </div>
  );
};
