import { Resolvers } from './generated/graphql';
const resolvers: Resolvers = {
  Query: {
    latestReviews: (_, __, { dataSources }) => {
      return dataSources.reviewsAPI.getLatestReviews();
    },
  },
  Mutation: {
    submitReview: (_, { locationReview }, { dataSources }) => {
      const newReview =
        dataSources.reviewsAPI.submitReviewForLocation(locationReview);
      return {
        code: 200,
        success: true,
        message: 'success',
        locationReview: newReview,
      };
    },
  },
};

export default resolvers;
