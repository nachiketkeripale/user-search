import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UsersResponse } from "../model/UserAPIInterface";

export const userAPI = createApi({
    reducerPath:"userAPI",
    baseQuery: fetchBaseQuery({baseUrl: "https://dummyjson.com"}),
    endpoints: (builder) => ({
        getAllUsers: builder.query<UsersResponse, void>({
            query: () => "/users",
        })
    })
})

export const { useGetAllUsersQuery } = userAPI;