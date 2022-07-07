import ReviewsAPI from './datasources/ReviewsApi';

export interface Context {
  dataSources: {
    reviewsAPI: ReviewsAPI;
  };
}
