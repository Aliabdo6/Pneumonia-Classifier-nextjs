import FAQSection from "../components/FAQSection";
import FeaturesSection from "../components/FeaturesSection";
import FutureDirectionsSection from "../components/FutureDirectionsSection";
import Hero from "../components/Hero";
import SubscriptionSection from "../components/SubscriptionSection";
import TechnologiesSection from "../components/TechnologiesSection";
import DataPreparationSection from "../components/DataPreparationSection";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <TechnologiesSection />
      <DataPreparationSection />
      <FutureDirectionsSection />
      <FAQSection />
      <SubscriptionSection />
    </>
  );
}
