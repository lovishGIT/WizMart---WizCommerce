interface ApiResponseType<T> {
    status: number;
    success: boolean;
    message: string;
    data?: T;
}

export function ApiResponse<T>(
    data: T,
    message: string = '',
    status: number = 200,
    success: boolean = true
): ApiResponseType<T> {
    return {
        status,
        success,
        message,
        data,
    };
}

// T can be any type, including null or undefined