import axios from "axios";
import type { UserListResponse } from "../interfaces/reqres.response";

export const loadUsersAction = async (page: number) => {

    try {
        const { data } = await axios.get<UserListResponse>(`https://reqres.in/api/users`, {
            params: {
                page: page
            },
            headers: {
                'x-api-key': 'reqres_6a73f5b420cc4fb5a339044d18adb95f'
            }
        });

        return data.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}