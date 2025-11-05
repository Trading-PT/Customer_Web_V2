"use client";

import { Header } from "../../Widget/Header";
import { Footer } from "../../Widget/Footer";
import { HeroSection } from "../../Features/home/HeroSection";
import { GuideSection } from "../../Features/home/GuideSection";
import { TraderJournalSection } from "../../Features/home/TraderJournalSection";
import { BestJournalSection } from "../../Features/home/BestJournalSection";
import { InsightSection } from "../../Features/home/InsightSection";
import { MemberReviewSection } from "../../Features/home/MemberReviewSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20 pb-32 px-4 max-w-7xl mx-auto">
        <HeroSection />
        <GuideSection />
        <TraderJournalSection />
        <BestJournalSection />
        <InsightSection />
        <MemberReviewSection />
      </main>
      <Footer />
    </div>
  );
}
