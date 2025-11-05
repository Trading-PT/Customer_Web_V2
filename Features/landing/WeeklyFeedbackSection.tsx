"use client";

export function WeeklyFeedbackSection() {
  return (
    <section className="min-h-screen flex items-center bg-gray-50 px-4 py-20">
      <div className="max-w-7xl mx-auto">
        {/* 상단 텍스트 */}
        <div className="text-center mb-16">
          <p className="text-xl md:text-2xl text-gray-700 mb-2">
            그 한 번의 기록이 쌓여 자동으로 주간 분석 피드백으로 변환됩니다.
          </p>
          <p className="text-lg text-gray-600">
            번거로운 엑셀 정리, 수동 계산은 더 이상 필요 없습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* 좌측 - 이미지 영역 */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">주간 트레이딩 피드백</h3>

            {/* 요약 테이블 */}
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-sm">주차</th>
                    <th className="border border-gray-300 px-4 py-2 text-sm">승률</th>
                    <th className="border border-gray-300 px-4 py-2 text-sm">손익률</th>
                    <th className="border border-gray-300 px-4 py-2 text-sm">매매횟수</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 text-center text-sm">1주차</td>
                    <td className="border border-gray-300 px-4 py-2 text-center text-sm text-green-600">65%</td>
                    <td className="border border-gray-300 px-4 py-2 text-center text-sm text-blue-600">+12.5%</td>
                    <td className="border border-gray-300 px-4 py-2 text-center text-sm">24회</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 분석 리포트 */}
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">회원님의 손실 매매 원인 분석</h4>
                <div className="bg-gray-100 h-32 rounded mb-2 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">차트 이미지</span>
                </div>
                <p className="text-sm text-gray-700">
                  손실 매매의 주요 원인은 급격한 추세 전환 시점에서의 진입으로 분석됩니다...
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">회원님의 수익 매매 원인 분석</h4>
                <div className="bg-gray-100 h-32 rounded mb-2 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">차트 이미지</span>
                </div>
                <p className="text-sm text-gray-700">
                  수익 매매는 명확한 지지/저항선 확인 후 진입한 경우가 대부분입니다...
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4 bg-blue-50">
                <h4 className="font-semibold text-gray-900 mb-2">주간 패턴 최종 평가 및 개선점</h4>
                <p className="text-sm text-gray-700">
                  이번 주 전반적인 승률은 양호하나, 손절 타이밍이 다소 늦은 경향이 있습니다.
                  다음 주에는 손절 라인을 명확히 설정하고 지키는 훈련이 필요합니다.
                </p>
              </div>
            </div>
          </div>

          {/* 우측 - 설명 영역 */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900">
              주간 결과를 한눈에 확인하세요!
            </h3>
            <p className="text-lg text-gray-700">
              매일 쌓인 데이터를 자동 시스템으로 주간 PnL, 승률, 손익비 모두 정리해드립니다.
            </p>

            <div className="h-px bg-gray-300" />

            <p className="text-lg text-gray-700">
              손실 본 매매와 수익 본 매매, 나에게 최적화된 개인 맞춤형 피드백을 받고
              정확한 개선 방향을 바로 잡아가세요.
            </p>

            <p className="text-xl font-semibold text-gray-900">
              더 이상 '감'으로 매매하면 안됩니다.
            </p>

            <div className="h-px bg-gray-300" />

            <p className="text-lg text-gray-700">
              매매횟수가 늘어날수록 기술적 분석뿐만 아니라 심리적 요인에 대한 부분도 사고해야 합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
