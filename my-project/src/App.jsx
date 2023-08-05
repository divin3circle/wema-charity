import Navbar from "./components/header/Navbar"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/header/Header";
import Objectives from "./components/ui/Objectives";
import Join from "./components/ui/Join";
import Past from "./components/ui/Past";
import Contact from "./components/ui/Contact";
import Footer from "./components/footer/Footer";
import Team from "./components/ui/Team";
import DonateModal from "./components/modals/DonateModal";
import { useState } from "react";
import GalleryModal from "./components/modals/GalleryModal";

function App() {
   useEffect(() => {
     AOS.init();
     AOS.refresh();
   }, []);

   const [donateModal, setDonateModal] = useState(false);
   const [galleryModal, setGalleryModal]= useState(false);

  return (
    <>
      <Navbar donateModal={donateModal} setDonateModal={setDonateModal} />
      <Header donateModal={donateModal} setDonateModal={setDonateModal} />
      <Objectives />
      <Join />
      <Past galleryModal={galleryModal} setGalleryModal={setGalleryModal} />
      <Team />
      <Contact />
      <Footer donateModal={donateModal} setDonateModal={setDonateModal} />
      <DonateModal
        visible={donateModal}
        donateModal={donateModal}
        setDonateModal={setDonateModal}
      />
      <GalleryModal
        galleryModal={galleryModal}
        setGalleryModal={setGalleryModal}
      />
    </>
  );
}

export default App
