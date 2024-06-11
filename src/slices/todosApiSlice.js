import {TODOS_URL} from '../constants';
import {apiSlice} from './apiSlice';

export const TodosApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => ({
        url: `${TODOS_URL}`,
      }),
      providesTags: ['todos'],
      keepUnusedDataFor: 5,
    }),
  }),
});

export const {
  useGetTodosQuery,
  // useGetPostDetailsQuery,
  // useCreatePostMutation,
  // useDeletePostMutation,
  // useUpdatePostMutation
} = TodosApiSlice;
