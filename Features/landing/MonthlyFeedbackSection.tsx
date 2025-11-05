"use client";

export function MonthlyFeedbackSection() {
  return (
    <section className="min-h-screen flex items-center bg-white px-4 py-20">
      <div className="max-w-7xl mx-auto">
        {/* 상단 텍스트 */}
        <div className="text-center mb-16">
          <p className="text-xl md:text-2xl text-gray-700 mb-2">
            4주간 누적된 데이터는 자동으로 월간 PnL, 평균 승률 및 손익비를 종합 분석됩니다.
          </p>
          <p className="text-lg text-gray-600">
            번거로운 엑셀 정리, 수동 계산은 더 이상 필요 없습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* 좌측 - 월간 리포트 이미지 */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-gray-900">월별 트레이딩 피드백</h3>
              <p className="text-sm text-gray-600">2025년 1월</p>
            </div>

            {/* 주요 지표 표 */}
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-3 py-2">지표</th>
                    <th className="border border-gray-300 px-3 py-2">값</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">승률</td>
                    <td className="border border-gray-300 px-3 py-2 text-green-600 font-semibold">68%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">평균 손익비</td>
                    <td className="border border-gray-300 px-3 py-2 text-blue-600 font-semibold">2.3배</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">누적 PnL</td>
                    <td className="border border-gray-300 px-3 py-2 text-green-600 font-semibold">+32.4%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 패턴별 성과 */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">패턴별 성과</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span>Reverse</span>
                  <span className="text-green-600">+15.2%</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span>Pull back</span>
                  <span className="text-green-600">+8.7%</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span>Break out</span>
                  <span className="text-red-600">-2.1%</span>
                </div>
              </div>
            </div>

            {/* 전월 대비 비교 */}
            <div className="mb-6 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">지난달 대비 변화</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">승률</p>
                  <p className="text-green-600 font-semibold">+6%</p>
                </div>
                <div>
                  <p className="text-gray-600">손익비</p>
                  <p className="text-green-600 font-semibold">+0.5배</p>
                </div>
              </div>
            </div>

            {/* 트레이너 코멘트 */}
            <div className="border-t border-gray-200 pt-6 space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">트레이너 분석</h4>
                <p className="text-sm text-gray-700">
                  이번 달은 전반적으로 안정적인 수익률을 보여주셨습니다.
                  특히 Reverse 패턴에서 뛰어난 성과를 내셨네요.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">다음 달 목표</h4>
                <p className="text-sm text-gray-700">
                  Break out 패턴에서의 손실을 줄이기 위해 진입 타이밍을 더욱 명확히 해보세요.
                  목표 승률 70%, 손익비 2.5배입니다.
                </p>
              </div>
            </div>
          </div>

          {/* 우측 - 설명 영역 */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900">
              월간 결과를 한눈에 확인하세요!
            </h3>
            <p className="text-lg text-gray-700">
              철저한 데이터를 기반으로 내가 잡는 패턴과 못하는 패턴을 정확히 구분하면서
              현명한 전략을 세워야 합니다.
            </p>

            <div className="h-px bg-gray-300" />

            <p className="text-lg text-gray-700">
              담당 트레이너로부터 다음 달 타깃별 목표 손익비, 승률이 담긴
              월간 트레이딩 로드맵을 전달 받으세요.
            </p>

            <p className="text-xl font-semibold text-gray-900">
              올바른 지향점은 비효율 매매를 방지해줄 것입니다.
            </p>
          </div>
        </div>

        {/* 하단 결론 블록 */}
        <div className="text-center mt-20 space-y-4">
          <p className="text-xl font-semibold text-gray-900">간편함 속에 담긴 정밀함</p>
          <p className="text-lg text-gray-700">복잡한 과정 없이도</p>
          <p className="text-lg text-gray-700">'나의 매매 흐름', '수익구조의 약점'</p>
          <p className="text-xl font-semibold text-gray-900">한 번에 쉽게 파악하세요.</p>
        </div>
      </div>
    </section>
  );
}
