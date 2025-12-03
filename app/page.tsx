import Image from "next/image";
import Header from "../src/components/Header";
import Hero from "../src/components/Hero";
import PopularServices from "../src/components/PopularServices";
import Testimonials from "../src/components/Testimonials";
import Footer from "../src/components/Footer";

export default function Home() {
  return (
    <>
      <Header/>
      <main>
        <Hero/>
        <PopularServices/>
        <Testimonials/>
      </main>
      <Footer/>
    </>
  );
}