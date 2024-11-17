import Image from "next/image";
import DarkModeToggler from "./components/DarkModeButton";
import Header from "./components/Navbar";
import Hero from "./components/Hero";
import { Story } from "./components/Story";
import Footer from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { DG } from "./components/DG";

export default function Home() {
  return (
    <div className="">
      <header className="">
        
      </header>
      <main className="">
        <DarkModeToggler />
        <Header />
        <Hero />
        <Story />
        <DG />
        <Gallery />
        <Footer />
      </main>
      <footer className="">
       
      </footer>
    </div>
  );
}
