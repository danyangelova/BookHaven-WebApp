const request = async (url, options = {}) => {
    const accessToken = localStorage.getItem('accessToken');


    if (accessToken) {
        options.headers = {
            ...options.headers,
            'X-Authorization': accessToken
        };
    }

    options.headers = {
        ...options.headers,
        'Content-Type': 'application/json'
    };


    const response = await fetch(url, options);


    if (!response.ok) {
        const errorText = await response.text();
        console.error('HTTP Error:', response.status, errorText);
        throw new Error(`!!HTTP error! status: ${response.status}, message: ${errorText}`);
    }

    const contentType = response.headers.get('content-type');

    if (contentType && contentType.includes('application/json')) {
        return response.json();
    } else {
        throw new Error('!!Unexpected content type: ' + contentType);
    }
};

export const get = (url) => {
    return request(url, {
        method: 'GET'
    });
};

export const post = (url, data) => {
    return request(url, {
        method: 'POST',
        body: JSON.stringify(data),
    });
};

export const put = (url, data) => {
    return request(url, {
        method: 'PUT',
        body: JSON.stringify(data),
    });
};

export const del = (url) => {
    return request(url, {
        method: 'DELETE'
    });
};

export default {
    get,
    post,
    put,
    del
};
