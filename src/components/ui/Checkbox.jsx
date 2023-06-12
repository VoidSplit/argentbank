import store from "../../libs/redux/store/store";
import "./styles/Checkbox.css";

export default function Checkbox({label, innerRef}) {
  if(store.getState().rememberMeChecked) {
    return (
      <div className="input-remember">
        <input type="checkbox" ref={innerRef} id="remember-me" defaultChecked/><label htmlFor="remember-me">{label}</label>
      </div>
    )
  } else {
    return (
      <div className="input-remember">
        <input type="checkbox" ref={innerRef} id="remember-me" /><label htmlFor="remember-me">{label}</label>
      </div>
    )
  } 
};