const API_BASE_URLS = {
    development: "http://localhost:5000/",
    production: "https://mindcys.com/",
};

const API_METHODS = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE",
};

const getBaseUrl = () => {
    const environment = process.env.NODE_ENV || "development";
    return API_BASE_URLS[environment];
};

export { getBaseUrl, API_METHODS };