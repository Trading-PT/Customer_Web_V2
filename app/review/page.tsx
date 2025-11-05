'use client';

import { useEffect, useState } from 'react';
import { reviewService } from '../../Shared/api/services';

interface Review {
  id: number;
  userId: number;
  username: string;
  rating: number;
  content: string;
  imageUrl?: string;
  createdAt: string;
}

/**
 * 공개 리뷰 목록 페이지
 */
export default function ReviewPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const response = await reviewService.getReviewList(0, 20);
        if (response.success && response.data) {
          setReviews(response.data);
        }
      } catch (error) {
        console.error('리뷰 조회 오류:', error);
      } finally {
        setLoading(false);
      }
    };

    loadReviews();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">로딩 중...</div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 mt-20">
      <h1 className="text-3xl font-bold text-center mb-4">TPT 이용 고객의 실제 후기</h1>
      <p className="text-center text-gray-600 mb-8">고객님들의 소중한 경험을 공유합니다</p>

      {/* 리뷰 통계 */}
      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg p-8 mb-8 text-center">
        <p className="text-sm text-gray-600 mb-2">누적 리뷰 개수</p>
        <p className="text-5xl font-bold text-[#B9AB70]">{reviews.length.toLocaleString()}</p>
      </div>

      {/* 리뷰 목록 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.length === 0 ? (
          <div className="col-span-full text-center py-12 text-gray-500">
            아직 등록된 리뷰가 없습니다.
          </div>
        ) : (
          reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-3 pb-3 border-b">
                <span className="text-sm font-medium text-[#B9AB70]">{review.username}</span>
                <div className="flex items-center gap-1 text-[#B9AB70]">
                  <span>★</span>
                  <span className="text-sm">{review.rating.toFixed(1)}</span>
                </div>
              </div>
              <p className="text-sm text-gray-800 leading-relaxed mb-4 max-h-32 overflow-y-auto">
                {review.content}
              </p>
              {review.imageUrl && (
                <div className="mb-3">
                  <img
                    src={review.imageUrl}
                    alt="리뷰 이미지"
                    className="w-full h-32 object-cover rounded-md"
                  />
                </div>
              )}
              <p className="text-xs text-gray-400 text-right">
                {new Date(review.createdAt).toLocaleDateString('ko-KR')}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
