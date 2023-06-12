import "./styles/SignInSection.css";

import Checkbox from "../components/ui/Checkbox";
import PasswordInput from "../components/ui/PasswordInput";
import SubmitButton from "../components/ui/SubmitButton";
import TextInput from "../components/ui/TextInput";
import { createRef, useEffect, useState } from "react";
import store from "../libs/redux/store/store";
import { useNavigate } from "react-router-dom";
import { GetUserToken } from "../services/api/apiCall";


export default function SignInSection() {
  const navigate = useNavigate()

  const [isValid, changeValidity] = useState(false);

  


  useEffect(() => {
  const token = store.getState().token

  if(token) navigate('/profile')
  if(isValid) {
    const email = TextInputRef.current.value
    const password = PasswordInputRef.current.value
    const remember = CheckboxInputRef.current.checked
    GetUserToken(email, password, remember, navigate)
  }
  })

  const handleSubmit = () => {
    const TextinputValue = TextInputRef.current.value
    const PasswordInputValue = PasswordInputRef.current.value
    
    if(TextinputValue && PasswordInputValue) {
      changeValidity(true)
    }
  }
  const TextInputRef = createRef()
  const PasswordInputRef = createRef()
  const CheckboxInputRef = createRef()

  return (
    <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
            <TextInput label={"Username"} innerRef={TextInputRef} />
            <PasswordInput label={"Password"} innerRef={PasswordInputRef} />
            <Checkbox label={"Remember me"} innerRef={CheckboxInputRef} />
            <SubmitButton label={"Sign In"} handleFunction={handleSubmit}/>
        </form>
    </section>
  );
};