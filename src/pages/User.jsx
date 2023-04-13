import Navbar from "../layouts/Navbar";
import UserHeader from "../layouts/UserHeader";
import Account from "../components/ui/Account";
import Footer from "../layouts/Footer";

import { useEffect } from "react";

export default function User() {

  useEffect(() => {
    document.title = "Argent Bank - User"
  }, []);

  return (
    <>
      <Navbar logged={true} />
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
  
};