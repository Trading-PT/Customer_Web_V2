'use client';

import { UserStatus } from '../../Shared/store/authStore';
import { RENDER_RULES } from '../../app/my/constants/userStatusRules';
import StatusWrapper from './StatusWrapper';

// Import widgets
import UIDPending from '../../app/my/widget/UID_Pending';
import UIDDenied from '../../app/my/widget/UID_Denied';
import UIDApproved from '../../app/my/widget/UID_Approved';
import PaidBeforeLeveltest from '../../app/my/widget/Paid_Before_Leveltest';
import PaidAfterLeveltestPendingTrainer from '../../app/my/widget/Paid_After_Leveltest_Pending_Trainer';
import AfterAssignedTrainer from '../../app/my/widget/After_Assigned_Trainer';

type Props = {
  state: UserStatus;
};

/**
 * 마이페이지 메인 컨텐츠 영역
 * 사용자 상태에 따라 다른 위젯을 표시
 */
export default function MyPageMain({ state }: Props) {
  // basic_available은 무료 고객이 쓸 수 있는 기능의 보여짐 여부를 제어하기 위한 변수
  // premium_available은 유료 고객이 쓸 수 있는 기능의 보여짐 여부를 제어하기 위한 변수
  // message는 기능이 보여지지 못할 때 표시할 안내 문구

  // false일 때 blur, true 일 때 visible
  const { basic_available, premium_available, message } = RENDER_RULES[state];

  const renderMainContent = () => {
    switch (state) {
      case 'UID_REVIEW_PENDING':
        return <UIDPending />;
      case 'UID_REJECTED':
        return <UIDDenied />;
      case 'UID_APPROVED':
        return <UIDApproved />;
      case 'PAID_BEFORE_TEST':
        return <PaidBeforeLeveltest />;
      case 'PAID_AFTER_TEST_TRAINER_ASSIGNING':
        return <PaidAfterLeveltestPendingTrainer />;
      case 'TRAINER_ASSIGNED':
        return <AfterAssignedTrainer />;
      default:
        return <div>알 수 없는 상태입니다.</div>;
    }
  };

  return (
    <main className="flex-1 p-4 sm:p-6 md:p-10 overflow-visible md:overflow-y-auto md:max-h-screen">
      <div className="max-w-2xl mx-auto text-center gap-5">
        {renderMainContent()}

        {/* UID 승인 이후에만 보임 */}
        <StatusWrapper
          type="basic"
          basic_available={basic_available}
          premium_available={premium_available}
          message={message}
        >
          {/* 추가 기본 기능 컨텐츠 (예: 캘린더, 안내문구 등) */}
          <div className="mt-10">
            <div className="bg-gray-50 rounded-md p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">TPT 서비스 안내</h3>
              <p className="text-sm text-gray-600">
                프리미엄 멤버십 가입 시 전문 트레이너의 1:1 피드백을 받으실 수 있습니다.
              </p>
            </div>
          </div>
        </StatusWrapper>
      </div>
    </main>
  );
}
