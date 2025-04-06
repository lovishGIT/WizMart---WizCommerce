interface ErrorProps {
    status: number;
    message: string;
    success: boolean;
}

export class ApiError extends Error {
    status: number;
    success: boolean;

    constructor({
        status = 500,
        message = 'Internal Server Error',
        success = false
    }: ErrorProps) {
        super(message);
        this.status = status;
        this.success = success;
        Object.setPrototypeOf(this, ApiError.prototype);
    }
}