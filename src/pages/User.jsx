import Navbar from "../layouts/Navbar";
import UserHeader from "../layouts/UserHeader";
import Account from "../components/ui/Account";
import Footer from "../layouts/Footer";

import { useEffect } from "react";
import store from "../libs/redux/store/store";
import { useNavigate } from 'react-router-dom';

export default function User() {
  const navigate = useNavigate();
  let redirectHomePage = false
  useEffect(() => {
    document.title = "Argent Bank - User"
    if(redirectHomePage) {
      navigate("/")
    }
  }, []);
  
  if(store.getState().userIsLogged) {
    return (
      <>
        <Navbar logged={store.getState().userIsLogged} />
        <main className="main bg-dark">
          <UserHeader />
          <h2 className="sr-only">Accounts</h2>
          <Account />
          <Account />
          <Account />
        </main>
        <Footer />
      </>
    );
  } else {
    redirectHomePage = true
  }
  
};