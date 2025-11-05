"use client";

export function AutoJournalSection() {
  return (
    <section className="min-h-screen flex items-center bg-white px-4 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* 좌측 영역 - 기능 시각화 */}
        <div className="space-y-8">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              복잡한 계산은 잊으세요.
            </h2>
            <p className="text-xl text-gray-700">
              이제 단 한 번의 매매일지 작성으로 모든 것이 자동으로 완성됩니다.
            </p>
          </div>

          {/* 이미지 박스 (실제 UI 캡처 이미지 예시) */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">날짜:</span>
                <div className="flex-1 bg-gray-100 h-10 rounded" />
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">종목명:</span>
                <div className="flex-1 bg-gray-100 h-10 rounded" />
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">포지션:</span>
                <div className="flex gap-2">
                  <div className="bg-blue-100 px-4 py-2 rounded">롱</div>
                  <div className="bg-gray-100 px-4 py-2 rounded">숏</div>
                </div>
              </div>
              <div className="bg-gray-100 h-48 rounded flex items-center justify-center">
                <p className="text-gray-500">차트 업로드 영역</p>
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <span className="text-sm text-gray-600">리스크:</span>
                  <div className="bg-gray-100 h-10 rounded mt-2" />
                </div>
                <div className="flex-1">
                  <span className="text-sm text-gray-600">레버리지:</span>
                  <div className="bg-gray-100 h-10 rounded mt-2" />
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                피드백 요청하기
              </button>
            </div>
          </div>
        </div>

        {/* 우측 영역 - 사용자 인식 전환 */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-gray-900">
            회원님이 해야 할 일은 단 한 가지
          </h3>
          <p className="text-lg text-gray-600">
            하루 한 번, 주어진 양식에 맞춰 매매일지를 작성하는 것뿐입니다.
          </p>

          <div className="h-px bg-gray-300 my-8" />

          <p className="text-lg text-gray-700">
            귀찮아서 미뤄왔던 매매일지 작성 이제 단 1분이면 해결할 수 있어요.
          </p>

          <p className="text-xl font-semibold text-gray-900 mt-6">
            혼자 고민하면서 먼 길 돌아가지 마세요.
          </p>

          <p className="text-lg text-gray-700">
            이미 먼저 잃어보고 깨달은 경험자에게 현명한 조언을 구할 수 있으니까요.
          </p>
        </div>
      </div>
    </section>
  );
}
