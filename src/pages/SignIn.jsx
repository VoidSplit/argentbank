import Navbar from "../layouts/Navbar";
import SignInSection from "../layouts/SignInSection";
import Footer from "../layouts/Footer";

import { useEffect } from "react";
import store from "../libs/redux/store/store";

export default function SignIn() {

  useEffect(() => {
    document.title = "Argent Bank - Sign In"
  }, []);

  return (
    <>
      <Navbar logged={store.getState().userIsLogged} />
      <main className="main bg-dark">
        <SignInSection />
      </main>
      <Footer />
    </>
  );

};