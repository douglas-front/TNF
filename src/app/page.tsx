import About from "@/app/layout/About";
import Creators from "@/app/layout/Creators";
import DownloadSection from "@/app/layout/DownloadSection";
import Footer from "@/app/layout/Footer";
import Hero from "@/app/layout/Hero";
import LanguageSection from "@/app/layout/LanguageSection";
import PreLoader from "@/app/layout/PreLoader";

export default function Home() {
  return (
    <>
    <PreLoader/>
    <main>
      <Hero/>
      <About/>
      <LanguageSection/>
      <Creators/>
      <DownloadSection/>
      <Footer/>
    </main>
    </>
  );
}
