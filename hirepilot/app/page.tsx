import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Ticker from "@/components/Ticker";
import ProblemSection from "@/components/ProblemSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Ticker />
        <ProblemSection />
      </main>
    </>
  );
}
