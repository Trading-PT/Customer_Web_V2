'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '../../Shared/store/authStore';
import MyPageSidebar from '../../Features/mypage/MyPageSidebar';
import MyPageMain from '../../Features/mypage/MyPageMain';
import { UserStatus } from '../../Shared/store/authStore';

/**
 * 마이페이지
 * 사용자 정보와 상태에 따라 다른 UI를 표시
 */
export default function MyPage() {
  const router = useRouter();
  const { user, isAuthenticated, checkAuth } = useAuthStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      if (!isAuthenticated) {
        await checkAuth();
      }
      setLoading(false);
    };
    initAuth();
  }, [isAuthenticated, checkAuth]);

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/login');
    }
  }, [loading, isAuthenticated, router]);

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-lg text-gray-600">로딩 중...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  // 사용자 데이터 매핑
  const userData = {
    name: user.name,
    username: user.username,
    email: user.email,
    phoneNumber: user.phoneNumber,
    profileImage: user.profileImage,
    investmentType: user.investmentType,
    userStatus: user.userStatus,
    exchangeName: user.exchangeName || undefined,
    uid: user.uid,
    trainerId: user.trainerId,
    trainerName: user.trainerName,
    isCourseCompleted: user.isCourseCompleted,
    isPremium: user.isPremium,
    remainingToken: 1, // Mock data - API에 토큰 수 필드 없음
  };

  const userStatus: UserStatus = user.userStatus || 'UID_REVIEW_PENDING';

  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col md:flex-row">
      <MyPageSidebar userData={userData} />
      <MyPageMain state={userStatus} />
    </div>
  );
}
