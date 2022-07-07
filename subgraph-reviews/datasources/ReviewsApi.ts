import { DataSource } from 'apollo-datasource';

interface ReviewsData {
  locations: {
    id: string;
    locationId: string;
    rating: number;
    comment: string;
  }[];
}
let {
  reviews,
}: { reviews: ReviewsData['locations'] } = require('./reviews_data.json');

class ReviewsAPI extends DataSource {
  getReview(id: string) {
    return reviews.find((r) => r.id === id);
  }

  getReviewsForLocation(id: string) {
    return reviews.filter((r) => r.locationId === id);
  }

  getLatestReviews() {
    return reviews.slice(Math.max(reviews.length - 3, 0));
  }

  getOverallRatingForLocation(id: string) {
    const allRatings = reviews
      .filter((r) => r.locationId === id)
      .map((r) => r.rating);
    const sum = allRatings.reduce((a, b) => a + b, 0);
    const average = sum / allRatings.length || 0;
    return average;
  }

  submitReviewForLocation(review: any) {
    const newReview = { id: `rev-${reviews.length + 1}`, ...review };
    reviews = [...reviews, newReview];
    return newReview;
  }
}

export default ReviewsAPI;
