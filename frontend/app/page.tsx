import Navbar from "@/app/components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Strip from "./components/Strip";
import About from "./components/About";

export default function Home() {
  return (
    <>
      <div className="border-[15px] border-[#36c939] min-h-screen min-w-full">
        {/* NAVBAR */}
        <Navbar />

        {/* SECTION: HERO */}
        <Hero />

        {/* YELLOW STRIP */}
        <Strip />

        {/* SECTION: ABOUT */}
        <About />

        {/* FOOTER */}
        <Footer />
      </div>
    </>
  );
}
