import Navbar from "../../components/common/Navbar";

import Hero from "./Hero";
import Features from "./Features";
import HowItWorks from "./HowItWorks";
import WhyPitchPilot from "./WhyPitchPilot";
import CTA from "./CTA";

import Footer from "../../components/common/Footer";



function Home() {

  return (

    <div
      className="
      min-h-screen
      bg-[#FFFFFF]
      text-[#022B3A]
      overflow-x-hidden
      "
    >

      <Navbar />

      <main>

        <Hero />

        <Features />

        <HowItWorks />

        <WhyPitchPilot />

        <CTA />

      </main>

      <Footer />

    </div>

  );

}

export default Home;