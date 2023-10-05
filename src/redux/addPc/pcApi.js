import { api } from "../apiSlice";


const pcApi = api.injectEndpoints({
  endpoints: (builder) => ({
   
    addPc: builder.mutation({
      query:(pc)=>({
     
        url: `/userpcbuild`,
        method: 'POST',
        body: pc
      }),
      invalidatesTags: ['pc'],
    }),

    getPc: builder.query({
      query: () => '/getUserPcBuild',
    }),
  
     

    
    deletePc: builder.mutation({
      query: (email)=>({
        url: `/deletepc/${email}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['pc'],
    }),
  }),
});

export const {

useAddPcMutation,
useGetPcQuery,
useDeletePcMutation

} = pcApi;
