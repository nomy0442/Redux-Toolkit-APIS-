import {COMMENTS_URL} from '../constants';
import {apiSlice} from './apiSlice';

export const CommentsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getComments: builder.query({
      query: () => ({
        url: `${COMMENTS_URL}`,
      }),
      providesTags: ['Posts'],
      keepUnusedDataFor: 5,
    }),

    // getCommentDetails: builder.query({
    //   query: (PostId) => ({
    //     url: `${COMMENTS_URL}/${PostId}`,
    //   }),
    //   keepUnusedDataFor: 5,
    // }),
    // createPost: builder.mutation({
    //   query: () => ({
    //     url: `${COMMENTS_URL}`,
    //     method: 'POST',
    //   }),
    //   invalidatesTags: ['Posts'],
    // }),
    // updatePost: builder.mutation({
    //   query: (data) => ({
    //     url: `${COMMENTS_URL}/${data.PostId}`,
    //     method: 'PUT',
    //     body: data,
    //   }),
    //   invalidatesTags: ['Posts'],
    // }),

    // deletePost: builder.mutation({
    //   query: (PostId) => ({
    //     url: `${COMMENTS_URL}/${PostId}`,
    //     method: 'DELETE',
    //   }),
    // }),
  }),
});

export const {
  useGetCommentsQuery,
  // useGetPostDetailsQuery,
  // useCreatePostMutation,
  // useDeletePostMutation,
  // useUpdatePostMutation
} = CommentsApiSlice;
