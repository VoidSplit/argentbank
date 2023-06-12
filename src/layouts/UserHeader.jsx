import { useState } from "react";
import store from "../libs/redux/store/store";
import "./styles/UserHeader.css";
import { ChangeUserName } from "../services/api/apiCall";

export default function UserHeader() {
  const [isOpen, setState] = useState(false)
  const [user, changeUserInfos] = useState({firstName: store.getState().firstName, lastName: store.getState().lastName})
    const toggleModal = () => {
      setState(!isOpen)
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      const firstName = e.target.firstname.value;
      const lastName = e.target.lastname.value;

      if(firstName !== "" && lastName !== "") {
        ChangeUserName(firstName, lastName, changeUserInfos)
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