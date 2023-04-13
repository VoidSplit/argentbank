import Navbar from "../layouts/Navbar";
import SignInSection from "../layouts/SignInSection";
import Footer from "../layouts/Footer";

import { useEffect } from "react";

export default function SignIn() {

  useEffect(() => {
    document.title = "Argent Bank - Sign In"
  }, []);

  return (
    <>
      <Navbar logged={false} />
      <main className="main bg-dark">
        <SignInSection />
      </main>
      <Footer />
    </>
  );

};