/**
 * 민원 관련 API 서비스
 */

import { fetcher } from '../apiInstance';
import { API_ENDPOINTS } from '../endpoints';
import type { ApiResponse } from '../apiTypes';

/**
 * 민원 응답 타입
 */
export interface ComplaintResponse {
  id: number;
  title: string;
  content: string;
  complaintReply?: string;
  answeredAt?: string;
  createdAt: string;
}

/**
 * 민원 작성 요청 타입
 */
export interface CreateComplaintRequest {
  title: string;
  content: string;
  image?: File;
}

/**
 * 민원 목록 조회 (내 민원)
 */
export const getComplaintList = async (): Promise<ApiResponse<ComplaintResponse[]>> => {
  console.log('[complaintService] 민원 목록 조회 요청');
  const result = await fetcher<ComplaintResponse[]>(API_ENDPOINTS.COMPLAINT.LIST, {
    method: 'GET',
  });
  console.log('[complaintService] 민원 목록 조회 결과:', result);
  return result;
};

/**
 * 민원 등록
 */
export const createComplaint = async (
  data: CreateComplaintRequest
): Promise<ApiResponse<{ id: number }>> => {
  console.log('[complaintService] 민원 작성 요청:', data);

  const formData = new FormData();
  formData.append('title', data.title);
  formData.append('content', data.content);
  if (data.image) {
    formData.append('image', data.image);
  }

  const result = await fetcher<{ id: number }>(API_ENDPOINTS.COMPLAINT.CREATE, {
    method: 'POST',
    body: formData,
    headers: {},
  });
  console.log('[complaintService] 민원 작성 결과:', result);
  return result;
};
