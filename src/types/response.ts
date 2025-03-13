type ResponseData<T> = {
    timeStamp: string,
    statusCode: number,
    status: string,
    reason: string,
    message: string,
    data: Record<string, T[]>;
};