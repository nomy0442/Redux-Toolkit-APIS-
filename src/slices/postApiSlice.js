import {POST_URL} from '../constants';
import {apiSlice} from './apiSlice';

export const PostApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => ({
        url: `${POST_URL}`,
      }),
      providesTags: ['Posts'],
      keepUnusedDataFor: 5,
    }),
  }),
});

export const {
  useGetPostsQuery,
  // useGetPostDetailsQuery,
  // useCreatePostMutation,
  // useDeletePostMutation,
  // useUpdatePostMutation
} = PostApiSlice;
