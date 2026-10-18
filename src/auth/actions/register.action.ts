import { tesloApi } from "@/api/tesloApi"
import type { AuthResponse } from "../interface/auth.response";

export const RegisterAction = async (email: string, password: string, fullName: string): Promise<AuthResponse> => {
    try {
        const { data } = await tesloApi.post<AuthResponse>('/auth/register', {
            email: email,
            password: password,
            fullName: fullName,
        });

        // console.log(data);

        return data;


    } catch (error) {
        // console.log(error);
        throw error;
    }

}