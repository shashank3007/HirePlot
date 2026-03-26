import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Ticker from "@/components/Ticker";
import ProblemSection from "@/components/ProblemSection";
import HowItWorksSection from "@/components/HowItWorksSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Ticker />
        <ProblemSection />
        <HowItWorksSection />
      </main>
    </>
  );
}
