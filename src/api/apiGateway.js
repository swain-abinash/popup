import axios from "axios";
import { getBaseUrl, API_METHODS } from "./apiConfig";

export const apiGateway = async (
    endpoint,
    method = API_METHODS.GET,
    body = null,
    headers = {}
) => {
    const baseUrl = getBaseUrl();
    const url = `${baseUrl}${endpoint}`;

    const defaultHeaders = {
        "Content-Type": "application/json",
        ...headers,
    };

    const config = {
        url,
        method,
        headers: defaultHeaders,
    };

    if (
        body &&
        (method === API_METHODS.POST ||
            method === API_METHODS.PUT ||
            method === API_METHODS.PATCH)
    ) {
        config.data = body;
    }

    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        if (error.response) {
            throw new Error(
                `HTTP error! status: ${error.response.status} - ${error.response.data}`
            );
        } else if (error.request) {
            throw new Error("Network error: No response received");
        } else {
            throw new Error(`Error: ${error.message}`);
        }
    }
};