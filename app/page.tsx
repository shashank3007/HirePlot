import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Ticker from "@/components/Ticker";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Ticker />
      </main>
    </>
  );
}
