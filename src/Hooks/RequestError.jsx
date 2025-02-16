const RequestError = error => {
    const { response, request, message } = error;

    if (response) return response.data.msg;
    if (request) return request.msg;
    return message;
};

export default RequestError;
