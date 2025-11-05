"use client";

import CustomButton from "../../Shared/ui/CustomButton";

export function MarketAnalysisSection() {
  return (
    <section className="min-h-screen flex items-center bg-gray-50 px-4 py-20">
      <div className="max-w-7xl mx-auto w-full">
        {/* 상단 질문 블록 */}
        <div className="text-center mb-16">
          <p className="text-lg text-gray-600 mb-2">혹시</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            시장분석 자체가 어렵게 느껴지시나요?
          </h2>
        </div>

        {/* 중앙 콘텐츠 블록 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          {/* 좌측 - 시장분석 예시 이미지 */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Day Trading Plan</h3>
            <div className="space-y-4">
              <div className="flex gap-4 text-sm text-gray-600">
                <span>날짜: 25.10.23</span>
                <span>종목: BTC USDT</span>
              </div>

              {/* 차트 영역 */}
              <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">비트코인 차트 이미지</span>
              </div>

              {/* 분석 내용 */}
              <div className="space-y-3 text-sm">
                <div className="border-l-4 border-blue-600 pl-3">
                  <h4 className="font-semibold text-gray-900">차트분석</h4>
                  <p className="text-gray-700 mt-1">
                    현재 상승 추세 지속 중이며, 주요 저항선은 $68,000 부근입니다.
                  </p>
                </div>

                <div className="border-l-4 border-green-600 pl-3">
                  <h4 className="font-semibold text-gray-900">가능한 트레이딩 전략</h4>
                  <p className="text-gray-700 mt-1">
                    $66,500 부근에서 롱 진입, 손절 $65,800, 목표가 $68,200
                  </p>
                </div>

                <div className="border-l-4 border-purple-600 pl-3">
                  <h4 className="font-semibold text-gray-900">시장 상황 브리핑</h4>
                  <p className="text-gray-700 mt-1">
                    미국 CPI 발표 전, 변동성 확대 가능성 주의
                  </p>
                </div>

                <div className="border-l-4 border-orange-600 pl-3">
                  <h4 className="font-semibold text-gray-900">전략 전개 가능 조건</h4>
                  <p className="text-gray-700 mt-1">
                    거래량 증가와 함께 $66,500 지지 확인 시
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 우측 - 설명 텍스트 */}
          <div className="space-y-8">
            <p className="text-xl font-semibold text-gray-900">
              TPT 트레이더가 매일 실시간으로 분석하는 트레이딩 플랜을 참고하세요.
            </p>

            <div className="h-px bg-gray-300" />

            <p className="text-lg text-gray-700">
              <span className="font-semibold">스캘핑</span>, <span className="font-semibold">데이</span>, <span className="font-semibold">스윙</span>
            </p>

            <p className="text-lg text-gray-700">
              당신의 투자 스타일에 적합한 전략을 학습하고 시장을 읽는 눈을 키워보세요.
            </p>
          </div>
        </div>

        {/* 하단 결론 블록 (CTA) */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <p className="text-2xl font-semibold text-gray-900">다시 한 번 말씀드립니다.</p>
            <p className="text-xl text-gray-700">
              TPT는 고수익 리딩, 매매법 강의, <span className="font-bold">승률 90% 지표가 아닙니다.</span>
            </p>
          </div>

          <div className="w-px h-16 bg-gray-300 mx-auto" />

          <div className="space-y-4">
            <p className="text-lg text-gray-700">하지만 이 한 가지는 분명히 말씀드릴 수 있습니다.</p>
            <p className="text-xl font-semibold text-gray-900">
              TPT는 여러분이 손실을 통제하는 트레이딩을 할 수 있도록 돕을 수 있습니다.
            </p>
            <p className="text-lg text-gray-700">
              이제 감정이 아닌 데이터로, 감각이 아닌 시스템으로<br />
              손실을 통제하는 진짜 트레이딩을 시작하세요.
            </p>
          </div>

          {/* CTA 버튼 */}
          <div className="mt-12">
            <CustomButton
              className="px-8 py-4 text-lg bg-[#BDAA79] hover:bg-[#a89667] text-white font-bold rounded-lg transition-all"
              onClick={() => {
                // 회원가입 페이지로 이동
                window.location.href = "/signup";
              }}
            >
              TPT 회원가입 신청하기
            </CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
}
