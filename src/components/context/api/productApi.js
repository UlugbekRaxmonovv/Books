import { api } from './index'

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: (params) => ({ 
        url: '/signup', 
        params 
      }),
      providesTags:["Product"]
    }),

    getMyself: build.query({
      query: (params) => ({ 
        url: '/myself', 
        params 
      }),
      providesTags:["Product"]
    }),
    
    getProductById: build.query({
      query: (id) => ({ 
        url: `/products/${id}`
      }),
      providesTags:["Product"]
    }),
    createProduct: build.mutation({
      query: (body)=> ({
        url:"/signup",
        method: "POST",
        body
      }),
      invalidatesTags: ["Product"]
    }),
    deleteProduct: build.mutation({
      query: (id)=> ({
        url:`/myself/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: ["Product"]
    }),
    updateProduct: build.mutation({
      query: ({id, body})=> ({
        url:`/myself/${id}`,
        method: "PUT", 
        body
      }),
      invalidatesTags: ["Product"]
    })
  }),
})

export const {
  useGetProductsQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useGetMyselfQuery,
} = productApi