/**
 * 상담 관련 API 서비스
 */

import { fetcher } from '../apiInstance';
import { API_ENDPOINTS } from '../endpoints';
import type { ApiResponse, ConsultationCreateRequest } from '../apiTypes';

/**
 * 내 상담 예약 목록 조회
 */
export const getMyConsultations = async (): Promise<ApiResponse<any>> => {
  return fetcher<any>(API_ENDPOINTS.CONSULTATION.MY_LIST, {
    method: 'GET',
  });
};

/**
 * 상담 예약 생성
 */
export const createConsultation = async (
  data: ConsultationCreateRequest
): Promise<ApiResponse<any>> => {
  return fetcher<any>(API_ENDPOINTS.CONSULTATION.CREATE, {
    method: 'POST',
    body: JSON.stringify(data),
  });
};

/**
 * 상담 예약 수정
 */
export const updateConsultation = async (
  data: ConsultationCreateRequest
): Promise<ApiResponse<any>> => {
  return fetcher<any>(API_ENDPOINTS.CONSULTATION.UPDATE, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
};

/**
 * 상담 예약 삭제
 */
export const deleteConsultation = async (consultationId: number): Promise<ApiResponse<void>> => {
  return fetcher<void>(API_ENDPOINTS.CONSULTATION.DELETE(consultationId), {
    method: 'DELETE',
  });
};

/**
 * 특정 날짜의 상담 가능 시간대 조회
 */
export const getConsultationAvailability = async (date: string): Promise<ApiResponse<any>> => {
  return fetcher<any>(`${API_ENDPOINTS.CONSULTATION.AVAILABILITY}?date=${date}`, {
    method: 'GET',
  });
};
