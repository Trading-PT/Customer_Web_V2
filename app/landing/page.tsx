"use client";

import { useRouter } from "next/navigation";
import { Header } from "../../Widget/Header";
import { Footer } from "../../Widget/Footer";
import { IntroSection } from "../../Features/landing/IntroSection";
import { AutoJournalSection } from "../../Features/landing/AutoJournalSection";
import { WeeklyFeedbackSection } from "../../Features/landing/WeeklyFeedbackSection";
import { MonthlyFeedbackSection } from "../../Features/landing/MonthlyFeedbackSection";
import { MarketAnalysisSection } from "../../Features/landing/MarketAnalysisSection";
import CustomButton from "../../Shared/ui/CustomButton";

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 pb-24">
        <IntroSection />

        {/* 홈으로 버튼 */}
        <div className="flex items-center justify-center py-12">
          <CustomButton
            variant="normalFull"
            className="px-8 py-4 text-lg"
            onClick={() => router.push("/home")}
          >
            홈으로
          </CustomButton>
        </div>

        <AutoJournalSection />
        <WeeklyFeedbackSection />
        <MonthlyFeedbackSection />
        <MarketAnalysisSection />
      </main>
      <Footer />
    </div>
  );
}
