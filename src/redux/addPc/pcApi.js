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
  
     

    
    // deleteBook: builder.mutation({
    //   query: (id)=>({
    //     url: `/book/${id}`,
    //     method: 'DELETE',
    //   }),
    //   invalidatesTags: ['pc'],
    // }),
  }),
});

export const {

useAddPcMutation,

} = pcApi;
