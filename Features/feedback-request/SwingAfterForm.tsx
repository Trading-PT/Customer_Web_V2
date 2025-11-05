'use client';

import { useState, useEffect } from 'react';
import { User } from '../../Shared/store/authStore';
import WeekSelector from './WeekSelector';

type Props = {
  onSubmit: (data: any) => void;
  currentUser: User;
  riskTaking?: number;
};

/**
 * 스윙 투자 + 완강 후 프리미엄 회원용 피드백 요청 폼
 */
export default function SwingAfterForm({ onSubmit, currentUser, riskTaking = 5 }: Props) {
  const [category, setCategory] = useState('');
  const [entryDate, setEntryDate] = useState('');
  const [exitDate, setExitDate] = useState('');
  const [trendAnalysis, setTrendAnalysis] = useState('');
  const [tradingReview, setTradingReview] = useState('');
  const [trainerFeedback, setTrainerFeedback] = useState('');
  const [risk, setRisk] = useState<number>(riskTaking);
  const [leverage, setLeverage] = useState<number>(0);
  const [position, setPosition] = useState<'LONG' | 'SHORT' | null>(null);
  const [isPositive, setIsPositive] = useState(true);
  const [pl, setPl] = useState<number>(0);
  const [rr, setRr] = useState<number>(0);
  const [selectedWeek, setSelectedWeek] = useState<{ month: number; week: number } | null>(null);
  const [screenshotFile, setScreenshotFile] = useState<File | null>(null);
  const [screenshotPreview, setScreenshotPreview] = useState<string | null>(null);

  useEffect(() => {
    if (pl !== 0) setRr(Number((risk / Math.abs(pl)).toFixed(2)));
    else setRr(0);
  }, [pl, risk]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setScreenshotFile(file);
      setScreenshotPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      screenshot: screenshotFile,
      category,
      entryDate,
      exitDate,
      trendAnalysis,
      risk,
      leverage,
      position,
      pl: isPositive ? pl : -pl,
      rr,
      tradingReview,
      trainerFeedback,
      selectedWeek,
    };
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
      <div className="flex items-center gap-3 mb-6">
        <span className="px-3 py-1 bg-amber-400 text-white rounded">스윙</span>
        <span className="px-3 py-1 border rounded">완강 후</span>
      </div>

      <WeekSelector onChange={(data) => setSelectedWeek(data)} />

      <div>
        <label className="block mb-1 font-medium">종목</label>
        <input
          type="text"
          placeholder="투자 종목을 입력하세요."
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-[#F4F4F4] rounded p-2 w-full"
        />
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block mb-1 font-medium">포지션 진입 날짜</label>
          <input
            type="date"
            value={entryDate}
            onChange={(e) => setEntryDate(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>
        <div className="flex-1">
          <label className="block mb-1 font-medium">포지션 종료 날짜</label>
          <input
            type="date"
            value={exitDate}
            onChange={(e) => setExitDate(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>
      </div>

      <div>
        <label className="block mb-1 font-medium">스크린샷 업로드</label>
        <div
          className="w-full h-40 rounded bg-[#F4F4F4] flex items-center justify-center cursor-pointer overflow-hidden"
          onClick={() => document.getElementById('swingScreenshotInput')?.click()}
        >
          {screenshotPreview ? (
            <img src={screenshotPreview} alt="screenshot" className="object-contain w-full h-full" />
          ) : (
            <span className="text-gray-400">이미지를 업로드하세요</span>
          )}
        </div>
        <input
          type="file"
          id="swingScreenshotInput"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">추세 분석</label>
        <textarea
          className="bg-[#F4F4F4] rounded p-2 w-full h-12"
          value={trendAnalysis}
          onChange={(e) => setTrendAnalysis(e.target.value)}
        />
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block mb-1 font-medium">리스크 테이킹 (%)</label>
          <input
            type="number"
            value={risk}
            onChange={(e) => setRisk(Number(e.target.value))}
            className="bg-[#F4F4F4] rounded p-2 w-full"
          />
        </div>
        <div className="flex-1">
          <label className="block mb-1 font-medium">레버리지 (배점)</label>
          <input
            type="number"
            value={leverage}
            onChange={(e) => setLeverage(Number(e.target.value))}
            className="bg-[#F4F4F4] rounded p-2 w-full"
          />
        </div>
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => setPosition('LONG')}
          className={`px-4 py-2 cursor-pointer rounded ${
            position === 'LONG' ? 'bg-[#2AC287] text-white' : 'bg-[#F4F4F4] text-black'
          }`}
        >
          Long
        </button>
        <button
          type="button"
          onClick={() => setPosition('SHORT')}
          className={`px-4 py-2 cursor-pointer rounded ${
            position === 'SHORT' ? 'bg-[#F74C5F] text-white' : 'bg-[#F4F4F4] text-black'
          }`}
        >
          Short
        </button>
      </div>

      <div className="flex items-center gap-3">
        <span className="font-semibold">P&L:</span>
        <div className="flex gap-2">
          <button
            type="button"
            className={`px-3 py-1 border rounded ${
              isPositive ? 'bg-[#2AC287] text-white' : 'bg-white text-[#2AC287] border-[#2AC287]'
            }`}
            onClick={() => setIsPositive(true)}
          >
            +
          </button>
          <button
            type="button"
            className={`px-3 py-1 border rounded ${
              !isPositive ? 'bg-[#F74C5F] text-white' : 'bg-white text-[#F74C5F] border-[#F74C5F]'
            }`}
            onClick={() => setIsPositive(false)}
          >
            -
          </button>
        </div>
        <input
          type="number"
          value={pl}
          onChange={(e) => setPl(Number(e.target.value))}
          className="w-20 border rounded p-1 text-center"
        />
        <span>%</span>
      </div>

      <div className="flex items-center gap-3">
        <span className="font-semibold">R&R:</span>
        <span>{rr}</span>
      </div>

      <div>
        <label className="block mb-1 font-medium">매매 복기</label>
        <textarea
          className="bg-[#F4F4F4] rounded p-2 w-full h-24"
          value={tradingReview}
          onChange={(e) => setTradingReview(e.target.value)}
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">담당 트레이너 피드백 요청 사항</label>
        <textarea
          className="bg-[#F4F4F4] rounded p-2 w-full h-24"
          value={trainerFeedback}
          onChange={(e) => setTrainerFeedback(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="bg-gradient-to-r from-[#D2C693] to-[#928346] text-white py-3 rounded mb-20 cursor-pointer"
      >
        매매일지 기록하기
      </button>
    </form>
  );
}
