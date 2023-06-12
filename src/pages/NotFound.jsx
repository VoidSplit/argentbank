import Navbar from "../layouts/Navbar";
import NotFoundLayout from "../layouts/NotFoundLayout";
import Footer from "../layouts/Footer";

import { useEffect } from "react";
import store from "../libs/redux/store/store";

export default function NotFound() {

  useEffect(() => {
    document.title = "Argent Bank - Not Found"
  }, []);

  return (
    <>
      <Navbar logged={store.getState().userIsLogged} />
      <main className="notfound">
        <NotFoundLayout />
      </main>
      <Footer />
    </>
  );
  
};