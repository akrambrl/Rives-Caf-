import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import FindUs from "@/components/FindUs";
import Recruit from "@/components/Recruit";
import Instagram from "@/components/Instagram";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <FindUs />
        <Recruit />
        <Instagram />
      </main>
      <Footer />
    </>
  );
}
