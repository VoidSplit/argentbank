import Navbar from "../layouts/Navbar";
import HeroSection from "../layouts/HeroSection";
import Features from "../layouts/Features";
import Footer from "../layouts/Footer";

import { useEffect } from "react";
import store from "../libs/redux/store/store";

export default function Home() {

  useEffect(() => {
    document.title = "Argent Bank - Home Page"
  }, []);

  return (
    <>
      <Navbar logged={store.getState().userIsLogged} />
      <main>
        <HeroSection />
        <Features />
      </main>
      <Footer />
    </>
  );
  
};