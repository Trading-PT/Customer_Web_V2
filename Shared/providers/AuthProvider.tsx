'use client';

import { useEffect, useState } from 'react';
import { useAuthStore } from '../store/authStore';
import { authService } from '../api/services';

/**
 * AuthProvider
 *
 * 앱 최초 로드 시 /my API를 호출하여 로그인 상태를 확인합니다.
 * - 로그인 상태면 zustand store에 사용자 정보 저장
 * - 비로그인 상태면 store 초기화
 */
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { checkAuth } = useAuthStore();
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initAuth = async () => {
      try {
        console.log('[AuthProvider] 인증 상태 확인 시작');

        // /my API 호출하여 인증 상태 확인
        const result = await authService.getMyInfo();

        if (result.success && result.data) {
          console.log('[AuthProvider] 로그인 상태 확인됨:', result.data);
          // checkAuth에 직접 데이터 전달
          useAuthStore.getState().login(result.data);
        } else {
          console.log('[AuthProvider] 비로그인 상태');
          useAuthStore.getState().logout();
        }
      } catch (error) {
        console.error('[AuthProvider] 인증 확인 오류:', error);
        useAuthStore.getState().logout();
      } finally {
        setIsInitialized(true);
      }
    };

    initAuth();
  }, []);

  // 인증 상태 확인 전까지는 로딩 표시
  if (!isInitialized) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return <>{children}</>;
}
