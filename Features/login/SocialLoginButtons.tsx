'use client';

import React from 'react';
import Image from 'next/image';

interface SocialLoginButtonsProps {
  onKakao: () => void;
  onNaver: () => void;
  disabled?: boolean;
}

/**
 * 소셜 로그인 버튼 컴포넌트
 */
export default function SocialLoginButtons({
  onKakao,
  onNaver,
  disabled = false,
}: SocialLoginButtonsProps) {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="text-center text-sm text-gray-500">또는 소셜 로그인</div>
      <div className="flex flex-col sm:flex-row gap-3 w-full">
        <button
          type="button"
          onClick={onKakao}
          disabled={disabled}
          className="flex-1 bg-[#FEE500] hover:bg-[#F5DC00] transition-colors rounded-md py-3 px-4 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Image src="/images/kakao_icon.png" alt="Kakao" width={20} height={20} />
          <span className="font-medium text-[#191919]">카카오 로그인</span>
        </button>
        <button
          type="button"
          onClick={onNaver}
          disabled={disabled}
          className="flex-1 bg-[#03C75A] hover:bg-[#02B350] transition-colors rounded-md py-3 px-4 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Image src="/images/naver_icon.png" alt="Naver" width={20} height={20} />
          <span className="font-medium text-white">네이버 로그인</span>
        </button>
      </div>
    </div>
  );
}
