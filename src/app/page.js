import Image from "next/image";
import HeaderTop from "./components/HeaderTop";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SmartPhones from "./components/Smartphone";
import TopCategories from "./components/TopCategories";
import DailyEssentials from "./components/DailyEssentials";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ElectronicsBrands from "./components/ElectronicsBrands";

export default function Home() {
  return (
    <main className="font-sans">
      <HeaderTop />
      <Header />
      <Navbar />
      <Hero />
      <SmartPhones />
      <TopCategories />
      <ElectronicsBrands />
      <DailyEssentials />
      <Footer />
    </main>
  );
}
