import type { User } from "@/interfaces/user.interface";


//login, register, checkStatus
export interface AuthResponse {
    user: User;
    token: string;
}

