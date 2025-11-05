'use client';

import { useState } from 'react';
import { authService } from '../../Shared/api/services';
import { useAuthStore } from '../../Shared/store/authStore';

/**
 * 프로필 이미지 업로드 관리 훅
 */
export const useProfileImage = (initialImage?: string | null) => {
  const [profileImage, setProfileImage] = useState(initialImage || '/images/default_profile.png');
  const [uploading, setUploading] = useState(false);
  const { updateUser } = useAuthStore();

  const handleProfileImageChange = async (file: File) => {
    setUploading(true);
    try {
      const result = await authService.updateProfileImage(file);
      if (result.success && result.data) {
        const newImageUrl = result.data; // result.data is already the URL string
        setProfileImage(newImageUrl);
        updateUser({ profileImage: newImageUrl });
      }
    } catch (error) {
      console.error('프로필 이미지 업로드 실패:', error);
    } finally {
      setUploading(false);
    }
  };

  return {
    profileImage,
    handleProfileImageChange,
    uploading,
  };
};
