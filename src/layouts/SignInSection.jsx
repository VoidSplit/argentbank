import "./styles/SignInSection.css";

import Checkbox from "../components/ui/Checkbox";
import PasswordInput from "../components/ui/PasswordInput";
import SubmitButton from "../components/ui/SubmitButton";
import TextInput from "../components/ui/TextInput";
import { createRef, useEffect, useState } from "react";
import store from "../libs/redux/store/store";
import { useNavigate } from "react-router-dom";
import { changeRemember, changeToken, setUserName } from "../libs/redux/actions/authActions";


export default function SignInSection() {
  const navigate = useNavigate()

  const [isValid, changeValidity] = useState(false);

  const getUserToken = async () =>  {
    try {
      const email = TextInputRef.current.value
      const password = PasswordInputRef.current.value
      const remember = CheckboxInputRef.current.checked

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      };

      const response = await fetch('http://localhost:3001/api/v1/user/login', requestOptions);

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const data = await response.json();

      if(data.status === 200) {
        store.dispatch(changeToken(data.body.token))
        store.dispatch(changeRemember(remember))
      }
      getProfile()

    } catch (error) {
      console.error(`Something went wrong: ${error}`);
    }
  }


  const getProfile = async () =>  {
    try {
      const requestOptions = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${store.getState().token}`,
        },
      }

      const response = await fetch("http://localhost:3001/api/v1/user/profile", requestOptions);

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const data = await response.json();

      if(data.status === 200) {
        store.dispatch(setUserName(data.body.firstName, data.body.lastName))
        navigate('/profile')
      }

    } catch (error) {
      console.error(`Something went wrong: ${error}`);
    }
  }


  useEffect(() => {
  const token = store.getState().token

  if(token) navigate('/profile')
  if(isValid) {
    getUserToken()
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