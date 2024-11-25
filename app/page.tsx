import Header from "./components/Navbar";
import Hero from "./components/Hero";
import { Story } from "./components/Story";
import Footer from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { DG } from "./components/DG";
import { BrideNGroom } from "./components/BrideNGroom";


export default function Home() {

  return (
    <div className="">
      <Header />
      <main className="">

        <Hero />
        <BrideNGroom />
        <Story />
        <Gallery />
        <DG />
      </main>
      <Footer />
    </div>
  );
}
