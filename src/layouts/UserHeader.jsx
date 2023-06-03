import { useEffect, createRef, useState } from "react";
import store from "../libs/redux/store/store";
import "./styles/UserHeader.css";
import { setUserName } from "../libs/redux/actions/authActions";

export default function UserHeader() {
  const [isOpen, setState] = useState(false)
  const [user, changeUserInfos] = useState({firstName: store.getState().firstName, lastName: store.getState().lastName})
    const changeUserName = async (firstName, lastName) =>  {
        try {
          const token = store.getState().token
    
          const requestOptions = {
            method: 'PUT',
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
              Authorization: 'Bearer' + token
            },
            body: JSON.stringify({ firstName: firstName, lastName: lastName })
          };
    
          const response = await fetch('http://localhost:3001/api/v1/user/profile', requestOptions);
    
          if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
          }
    
          const data = await response.json();
    
          if(data.status === 200) {
            store.dispatch(setUserName(data.body.firstName, data.body.lastName))
            changeUserInfos({firstName: data.body.firstName, lastName: data.body.lastName})
          }
    
        } catch (error) {
          console.error(`Something went wrong: ${error}`);
        }
    }
    const toggleModal = () => {
      setState(!isOpen)
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      const firstName = e.target.firstname.value;
      const lastName = e.target.lastname.value;

      if(firstName !== "" && lastName !== "") {
        changeUserName(firstName, lastName)
        e.target.firstname.value = ""
        e.target.lastname.value = ""
        toggleModal()
      }
    }
    return (
      <>
      {isOpen ? <div className="modal" >
        <div className="inner">
          <div className="close-wrapper">
            <div className="close" onClick={toggleModal}>
              <span></span>
              <span></span>
            </div>
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="firstname">First Name</label>
            <input type="text" name="FirstName" id="firstname" />
            <label htmlFor="lastname">Last Name</label>
            <input type="text" name="LastName" id="lastname" />

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div> : null}
      
        <div className="header">
          <h1>Welcome back<br />{user.firstName} {user.lastName}!</h1>
          <button className="edit-button" onClick={toggleModal}>Edit Name</button>
        </div>
      </>
        
    );
  };